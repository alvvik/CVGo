"use client";

import StartPopout from "@/components/creator/StartPopout/StartPopout";
import { useCVStore } from "@/store/cvStore";
import { templatesMap } from "@/components/CVTemplates/templates";
import { useState } from "react";
import InputCustom from "@/components/InputCustom";
import ButtonCustom from "@/components/ButtonCustom";
interface Experience {
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
}
export default function EditorPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    data,
    templateId,
    updatePersonal,
    setTemplate,
    addExperience,
    removeExperience,
  } = useCVStore();

  const [newExp, setNewExp] = useState<Experience>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const SidebarContent = (
    <div className="p-6  bg-background h-full print:hidden overflow-y-auto">
      <h1 className="text-xl font-bold mb-6 ">Kreator CVGo</h1>

      <div className="mb-8 space-y-3">
        <h2 className="font-semibold mb-4">Dane osobowe</h2>
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
          placeholder="Frontend Developer"
          value={data.personalInfo.title}
          onChange={(e) => updatePersonal("title", e.target.value)}
        />
      </div>

      <div>
        <h2 className="font-semibold mb-4">Doświadczenie zawodowe</h2>

        <div className="mb-6 p-4 border rounded-lg ">
          <h3 className="font-medium mb-3 text-sm">Dodaj nowe doświadczenie</h3>
          <div className="space-y-3">
            <InputCustom
              label="Firma"
              name="company"
              type="text"
              placeholder="Nazwa firmy"
              value={newExp.company}
              onChange={(e) =>
                setNewExp({ ...newExp, company: e.target.value })
              }
            />
            <InputCustom
              label="Stanowisko"
              name="position"
              type="text"
              placeholder="Twoje stanowisko"
              value={newExp.position}
              onChange={(e) =>
                setNewExp({ ...newExp, position: e.target.value })
              }
            />
            <InputCustom
              label="Data rozpoczęcia"
              name="startDate"
              type="date"
              value={newExp.startDate}
              onChange={(e) =>
                setNewExp({ ...newExp, startDate: e.target.value })
              }
            />
            <InputCustom
              label="Data zakończenia"
              name="endDate"
              type="date"
              value={newExp.endDate}
              onChange={(e) =>
                setNewExp({ ...newExp, endDate: e.target.value })
              }
            />
            <ButtonCustom
              onClick={() => {
                if (newExp.company && newExp.position) {
                  addExperience({
                    id: Date.now().toString(),
                    ...newExp,
                  });
                  setNewExp({
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                  });
                }
              }}
              className="w-full bg-primary  p-2 rounded-lg text-sm font-medium hover:bg-primary/90"
            >
              Dodaj
            </ButtonCustom>
          </div>
        </div>

        <div className="space-y-2">
          {data.experiences.map((exp) => (
            <div key={exp.id} className="p-4 border rounded-lg">
              <div className="flex md:justify-between md:flex-row md:items-start flex-col justify-center items-center gap-2">
                <div>
                  <h4 className="font-medium">{exp.position}</h4>
                  <p>{exp.company}</p>
                  {exp.startDate && (
                    <p>
                      {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                    </p>
                  )}
                </div>
                <ButtonCustom onClick={() => removeExperience(exp.id)}>
                  Usuń
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
      <div className="flex h-screen bg-slate-100 overflow-hidden">
        <div className="hidden lg:block w-1/2 border-r border-primary/80">
          {SidebarContent}
        </div>

        <div className="flex-1 p-2 md:p-8 flex items-center justify-center  print:w-full print:p-0 print:bg-white bg-background text-black">
          <div className="w-full h-auto max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl lg:aspect-[1/1.414] bg-white shadow-xl rounded-xl p-4 sm:p-8 flex flex-col justify-between print:shadow-none print:w-full print:max-w-none">
            {(() => {
              const Selected = templatesMap[templateId];
              if (!Selected) return <div>Brak szablonu</div>;
              return <Selected data={data} />;
            })()}
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary  px-4 py-2 rounded-full shadow-lg z-40"
        >
          Edytuj
        </button>

        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-3/4 bg-background border-t  border-primary/20 rounded-t-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-semibold">Edycja</h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="px-3 py-1 bg-primary/10 rounded"
              >
                Zamknij
              </button>
            </div>
            <div className="p-4">{SidebarContent}</div>
          </div>
        </div>
      </div>
      <StartPopout />
    </>
  );
}
