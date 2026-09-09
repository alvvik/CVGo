"use client";

import StartPopout from "@/components/creator/StartPopout/StartPopout";
import { useCVStore } from "@/store/cvStore";
import { templatesMap } from "@/components/CVTemplates/templates";
import { useState, useRef } from "react";
import Sidebar from "@/components/creator/Sidebar";

export default function EditorPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);
  const { data, templateId } = useCVStore();

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-background text-text print:block print:h-auto print:overflow-visible print:bg-white">
        <div className="hidden w-full max-w-xl border-r border-primary/15 bg-background lg:block print:hidden">
          <Sidebar cvRef={cvRef} />
        </div>

        <div className="flex flex-1 items-center justify-center bg-background p-2 md:p-8 print:flex print:w-full print:max-w-none print:p-0 print:bg-white">
          <div
            ref={cvRef}
            className="cv-print-sheet flex h-auto w-full max-w-full flex-col justify-between bg-white text-black p-4 sm:max-w-md sm:p-8 md:max-w-xl lg:max-w-2xl lg:aspect-[1/1.414] print:w-full print:max-w-none print:aspect-auto print:p-0 print:shadow-none"
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
          className="lg:hidden print:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary  px-4 py-2 rounded-full shadow-lg z-40 "
        >
          Edytuj
        </button>

        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 print:hidden ${
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
              <Sidebar cvRef={cvRef} />
            </div>
          </div>
        </div>
      </div>
      <StartPopout />
    </>
  );
}
