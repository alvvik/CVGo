"use client";

import StartPopout from "@/components/creator/StartPopout/StartPopout";
import { useCVStore } from "@/store/cvStore";
import templates, { templatesMap } from "@/components/CVTemplates/templates";
import { useState, type ChangeEvent, useRef } from "react";
import InputCustom from "@/components/InputCustom";
import ButtonCustom from "@/components/ButtonCustom";
import Link from "next/link";
import { exportData, exportToPDF } from "@/utils/export";
import { handleImportJson } from "@/utils/import";

export default function EditorPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);
  const {
    data,
    templateId,
    updatePersonal,
    setTemplate,
    addExperience,
    removeExperience,
    updateExperience,
    addSkill,
    removeSkill,
    updateSkill,
    addEducation,
    removeEducation,
    updateEducation,
    addLanguage,
    removeLanguage,
    updateLanguage,
  } = useCVStore();

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updatePersonal("photo", reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const SidebarContent = (
    <div className="h-full overflow-y-auto bg-background p-5 text-text print:hidden md:p-6">
      <div className="mb-6 flex flex-col items-center justify-center gap-2">
        <Link href="/" className="text-primary hover:text-primary/80">
          Wróc do strony głównej
        </Link>
        <h1 className="mb-6 text-2xl font-bold text-text text-center">
          Kreator CVGo
        </h1>
      </div>
      <div className="mb-6 flex gap-3">
        <ButtonCustom
          onClick={() => exportData(data)}
          className="flex-1 text-sm"
        >
          Eksportuj JSON
        </ButtonCustom>
        <ButtonCustom
          onClick={() => exportToPDF(cvRef)}
          className="flex-1 text-sm"
        >
          Eksportuj PDF
        </ButtonCustom>
        <label className="flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
          Importuj JSON
          <input
            type="file"
            accept="application/json"
            onChange={handleImportJson}
            className="hidden"
          />
        </label>
      </div>
      <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4">
        <h2>Szablon CV</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setTemplate(template.id as "classic" | "modern")}
              className={`rounded-xl border p-3 text-left transition-all ${
                templateId === template.id
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-primary/15 bg-background hover:border-primary/30"
              }`}
            >
              <div className="font-semibold text-text">{template.name}</div>
              <div className="mt-1 text-xs text-text/60">
                {template.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4 ">
        <h2>Dane osobowe</h2>

        <div className="space-y-4">
          <InputCustom
            label="Imię i nazwisko"
            name="fullName"
            type="text"
            placeholder="Jan Kowalski"
            value={data.personalInfo.fullName}
            onChange={(e) => updatePersonal("fullName", e.target.value)}
          />
          <InputCustom
            label="Stanowisko"
            name="title"
            type="text"
            placeholder="Specjalista"
            value={data.personalInfo.title}
            onChange={(e) => updatePersonal("title", e.target.value)}
          />
          <InputCustom
            label="Email"
            name="email"
            type="email"
            placeholder="jan@example.com"
            value={data.personalInfo.email}
            onChange={(e) => updatePersonal("email", e.target.value)}
          />
          <InputCustom
            label="Telefon"
            name="phone"
            type="tel"
            placeholder="+48 123 456 789"
            value={data.personalInfo.phone}
            onChange={(e) => updatePersonal("phone", e.target.value)}
          />
          <InputCustom
            label="Adres"
            name="address"
            type="text"
            placeholder="Warszawa, Polska"
            value={data.personalInfo.address}
            onChange={(e) => updatePersonal("address", e.target.value)}
          />
          <InputCustom
            label="LinkedIn"
            name="linkedin"
            type="text"
            placeholder="linkedin.com/in/jankowalski"
            value={data.personalInfo.linkedin}
            onChange={(e) => updatePersonal("linkedin", e.target.value)}
          />

          <div className="space-y-3">
            <label className="block text-sm font-medium text-text">
              Zdjęcie profilowe
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="block w-full rounded-xl border border-primary/15 bg-white/80 px-3 py-2 text-sm text-text file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-2 file:text-white"
            />

            {data.personalInfo.photo ? (
              <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background p-3">
                <img
                  src={data.personalInfo.photo}
                  alt="Podgląd zdjęcia profilowego"
                  className="h-16 w-16 rounded-full object-cover border border-primary/15"
                />
                <button
                  type="button"
                  onClick={() => updatePersonal("photo", "")}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Usuń zdjęcie
                </button>
              </div>
            ) : (
              <p className="text-sm text-text/60">
                Brak Twojego zdjęcia profilowego. Możesz je dodać, aby Twoje CV
                wyglądało bardziej profesjonalnie. Zwiększa to również szanse na
                przyciągnięcie uwagi rekrutera. Pamiętaj, aby zdjęcie było
                aktualne i przedstawiało Cię w pozytywnym świetle.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4 ">
        <h2>Podsumowanie</h2>
        <InputCustom
          label="Krótki opis zawodowy"
          name="summary"
          type="textarea"
          placeholder="Pasjonat programowania z doświadczeniem w tworzeniu nowoczesnych aplikacji webowych."
          value={data.personalInfo.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
        />
      </div>

      <div className="rounded-2xl border border-primary/15 bg-background/90 p-4 ">
        <div className="mb-4 flex items-center justify-between">
          <h2>Doświadczenie</h2>
          <ButtonCustom
            onClick={() => {
              addExperience({
                id: Date.now().toString(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
              });
            }}
            className="text-sm"
          >
            + Dodaj
          </ButtonCustom>
        </div>

        <div className="space-y-4">
          {data.experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-primary/15 bg-background/80 p-4 "
            >
              <div className="space-y-4">
                <InputCustom
                  label="Firma"
                  name={`company-${exp.id}`}
                  type="text"
                  placeholder="Nazwa firmy"
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                />
                <InputCustom
                  label="Stanowisko"
                  name={`position-${exp.id}`}
                  type="text"
                  placeholder="Stanowisko"
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(exp.id, "position", e.target.value)
                  }
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <InputCustom
                    label="Data rozpoczęcia"
                    name={`startDate-${exp.id}`}
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                  />
                  <InputCustom
                    label="Data zakończenia"
                    name={`endDate-${exp.id}`}
                    type="date"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                  />
                </div>
                <ButtonCustom
                  onClick={() => removeExperience(exp.id)}
                  className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
                >
                  Usuń doświadczenie
                </ButtonCustom>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-primary/15 bg-background/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2>Umiejętności</h2>
          <ButtonCustom
            onClick={() => {
              addSkill({
                id: Date.now().toString(),
                name: "",
                level: "Średniozaawansowany",
              });
            }}
            className="text-sm"
          >
            + Dodaj
          </ButtonCustom>
        </div>

        <div className="space-y-4">
          {data.skills.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl border border-primary/15 bg-background/80 p-4"
            >
              <div className="space-y-4">
                <InputCustom
                  label="Nazwa umiejętności"
                  name={`skill-name-${skill.id}`}
                  type="text"
                  placeholder="Umiejętność"
                  value={skill.name}
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                />
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Poziom
                  </label>
                  <select
                    value={skill.level}
                    onChange={(e) =>
                      updateSkill(skill.id, "level", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-xl border border-primary/15 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Początkujacy">Początkujący</option>
                    <option value="Średniozaawansowany">
                      Średniozaawansowany
                    </option>
                    <option value="Zaawansowany">Zaawansowany</option>
                    <option value="Espercki">Espercki</option>
                  </select>
                </div>
                <ButtonCustom
                  onClick={() => removeSkill(skill.id)}
                  className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
                >
                  Usuń umiejętność
                </ButtonCustom>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-primary/15 bg-background/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2>Edukacja</h2>
          <ButtonCustom
            onClick={() => {
              addEducation({
                id: Date.now().toString(),
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
              });
            }}
            className="text-sm"
          >
            + Dodaj
          </ButtonCustom>
        </div>

        <div className="space-y-4">
          {data.education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-primary/15 bg-background/80 p-4"
            >
              <div className="space-y-4">
                <InputCustom
                  label="Szkoła/Uczelnia"
                  name={`school-${edu.id}`}
                  type="text"
                  placeholder="Nazwa szkoły/uczelni"
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(edu.id, "school", e.target.value)
                  }
                />
                <InputCustom
                  label="Kierunek/Stopień"
                  name={`degree-${edu.id}`}
                  type="text"
                  placeholder="Kierunek, stopień"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <InputCustom
                    label="Data rozpoczęcia"
                    name={`eduStartDate-${edu.id}`}
                    type="date"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "startDate", e.target.value)
                    }
                  />
                  <InputCustom
                    label="Data zakończenia"
                    name={`eduEndDate-${edu.id}`}
                    type="date"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "endDate", e.target.value)
                    }
                  />
                </div>
                <ButtonCustom
                  onClick={() => removeEducation(edu.id)}
                  className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
                >
                  Usuń wykształcenie
                </ButtonCustom>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-primary/15 bg-background/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2>Języki obce</h2>
          <ButtonCustom
            onClick={() => {
              addLanguage({
                id: Date.now().toString(),
                language: "",
                level: "B1",
              });
            }}
            className="text-sm"
          >
            + Dodaj
          </ButtonCustom>
        </div>

        <div className="space-y-4">
          {data.languages.map((lang) => (
            <div
              key={lang.id}
              className="rounded-2xl border border-primary/15 bg-background/80 p-4"
            >
              <div className="space-y-4">
                <InputCustom
                  label="Język"
                  name={`language-${lang.id}`}
                  type="text"
                  placeholder="Angielski"
                  value={lang.language}
                  onChange={(e) =>
                    updateLanguage(lang.id, "language", e.target.value)
                  }
                />
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Poziom
                  </label>
                  <select
                    value={lang.level}
                    onChange={(e) =>
                      updateLanguage(lang.id, "level", e.target.value)
                    }
                    className="w-full px-4 py-2 rounded-xl border border-primary/15 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="A1">A1 - Początkujący</option>
                    <option value="A2">A2 - Elementarny</option>
                    <option value="B1">B1 - Średniozaawansowany</option>
                    <option value="B2">B2 - Wyższy średniozaawansowany</option>
                    <option value="C1">C1 - Zaawansowany</option>
                    <option value="C2">C2 - Profi</option>
                  </select>
                </div>
                <ButtonCustom
                  onClick={() => removeLanguage(lang.id)}
                  className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
                >
                  Usuń język
                </ButtonCustom>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-background text-text">
        <div className="hidden w-full max-w-xl border-r border-primary/15 bg-background lg:block">
          {SidebarContent}
        </div>

        <div className="flex flex-1 items-center justify-center bg-background p-2 md:p-8 print:w-full print:p-0 print:bg-white">
          <div
            ref={cvRef}
            className="flex h-auto w-full max-w-full flex-col justify-between  bg-white text-black p-4  sm:max-w-md sm:p-8 md:max-w-xl lg:max-w-2xl lg:aspect-[1/1.414] print:shadow-none print:w-full print:max-w-none"
          >
            {(() => {
              const Selected = templatesMap[templateId];
              if (!Selected) return <div>Brak szablonu</div>;
              return <Selected data={data} />;
            })()}
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden print:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary  px-4 py-2 rounded-full shadow-lg z-40"
        >
          Edytuj
        </button>

        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-[85vh] max-h-[85vh] overflow-hidden rounded-t-xl border-t border-primary/20 bg-background shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-primary/10 bg-background p-4">
              <h3 className="font-semibold">Edycja</h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded bg-primary/10 px-3 py-1"
              >
                Zamknij
              </button>
            </div>
            <div className="h-[calc(85vh-73px)] overflow-y-auto overscroll-contain p-4">
              {SidebarContent}
            </div>
          </div>
        </div>
      </div>
      <StartPopout />
    </>
  );
}
