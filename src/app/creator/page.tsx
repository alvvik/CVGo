"use client";

import StartPopout from "@/components/creator/StartPopout/StartPopout";
import { useCVStore } from "@/store/cvStore";
import { templatesMap } from "@/components/CVTemplates/templates";
import { useState } from "react";
import InputCustom from "@/components/InputCustom";
import ButtonCustom from "@/components/ButtonCustom";
import Link from "next/link";
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
    <div className="h-full overflow-y-auto bg-background p-5 text-text print:hidden md:p-6">
      <div className="mb-6 flex flex-col items-center justify-center gap-2">
        <Link href="/" className="text-primary hover:text-primary/80">
          Wróc do strony głównej
        </Link>
        <h1 className="mb-6 text-2xl font-bold text-text text-center">
          Kreator CVGo
        </h1>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4 ">
        <h2 className="text-sm font-semibold uppercase ">Dane osobowe</h2>

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
            placeholder="Frontend Developer"
            value={data.personalInfo.title}
            onChange={(e) => updatePersonal("title", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-primary/15 bg-background/90 p-4 ">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-text/70">
            Doświadczenie
          </h2>
          <span className="rounded-full bg-accent/10 px-2.5 py-1 text-fluid-small font-medium text-accent">
            {data.experiences.length}
          </span>
        </div>

        <div className="mb-5 rounded-2xl  bg-primary/5 p-4">
          <h3 className="mb-3 text-base font-semibold text-text">
            Dodaj nowe doświadczenie
          </h3>
          <div className="space-y-4">
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
            <div className="grid gap-4 md:grid-cols-2">
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
            </div>
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
              className="w-full"
            >
              Dodaj doświadczenie
            </ButtonCustom>
          </div>
        </div>

        <div className="space-y-3">
          {data.experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-primary/15 bg-background/80 p-4 "
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-text">
                    {exp.position}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-text/80">
                    {exp.company}
                  </p>
                  {exp.startDate && (
                    <p className="mt-2 text-fluid-small text-text/60">
                      {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                    </p>
                  )}
                </div>
                <ButtonCustom
                  onClick={() => removeExperience(exp.id)}
                  className="bg-transparent shadow text-primary hover:bg-accent/10 hover:text-primary/90 focus:ring-accent/20"
                >
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
      <div className="flex h-screen overflow-hidden bg-background text-text">
        <div className="hidden w-full max-w-xl border-r border-primary/15 bg-background lg:block">
          {SidebarContent}
        </div>

        <div className="flex flex-1 items-center justify-center bg-background p-2 md:p-8 print:w-full print:p-0 print:bg-white">
          <div className="flex h-auto w-full max-w-full flex-col justify-between  bg-white text-black p-4  sm:max-w-md sm:p-8 md:max-w-xl lg:max-w-2xl lg:aspect-[1/1.414] print:shadow-none print:w-full print:max-w-none">
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
