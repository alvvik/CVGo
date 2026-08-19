"use client";

import StartPopout from "@/components/creator/StartPopout/StartPopout";
import { useCVStore } from "@/store/cvStore";
import { templatesMap } from "@/components/CVTemplates/templates";
import { useState } from "react";

export default function EditorPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, templateId, updatePersonal, setTemplate } = useCVStore();

  const SidebarContent = (
    <div className="p-6  bg-background h-full print:hidden">
      <h1 className="text-xl font-bold mb-6 ">Kreator CVGo</h1>

      <div>
        <h2 className="font-semibold ">Dane osobowe</h2>
        <div>
          <label className="block  mb-1">Imię i nazwisko</label>
          <input
            type="text"
            value={data.personalInfo.fullName}
            onChange={(e) => updatePersonal("fullName", e.target.value)}
            className="w-full p-2 border rounded-lg "
          />
        </div>
        <div>
          <label className="block  mb-1">Stanowisko</label>
          <input
            type="text"
            value={data.personalInfo.title}
            onChange={(e) => updatePersonal("title", e.target.value)}
            className="w-full p-2 border rounded-lg "
          />
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
          className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-40"
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
