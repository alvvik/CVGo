"use client";

import { useState, useEffect } from "react";
import ButtonCustom from "@/components/ButtonCustom";
import { useCVStore } from "@/store/cvStore";
import templates from "@/components/CVTemplates/templates";
export default function StartPopout() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"start" | "templates">("start");
  const { templateId, setTemplate } = useCVStore();
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleTemplateClick = () => {
    setView("templates");
  };

  const handleBackClick = () => {
    setView("start");
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-secondary border border-primary/10 rounded-2xl shadow-2xl p-8">
        {view === "start" ? (
          <>
            <h1 className="text-fluid-h1 font-bold text-center">
              Witaj w kreatorze CVGo
            </h1>
            <p className="text-fluid-lead text-center">
              Wybierz czy wolisz stworzyc swoje CV z naszych gotowych wzorow
              wpisujac tylko swoje dane czy wolisz stworzyc je samemu od zera
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <div className="p-4 border border-primary/10 rounded-lg flex justify-center items-center flex-col gap-2">
                <p className="text-fluid-lead font-semibold">Szybki start</p>
                <p>Uzyj szablonu</p>
                <p>Wybierz szablon ktory chcesz uzyc</p>
                <ButtonCustom onClick={handleTemplateClick}>
                  Przejdz do wyboru szablonu
                </ButtonCustom>
              </div>
              <div className="cursor-not-allowed opacity-60 blur-xs select-none pointer-events-none">
                <div className="p-4 border border-primary/10 rounded-lg flex justify-center items-center flex-col gap-2">
                  <p className="text-fluid-lead font-semibold">Szybki start</p>
                  <p>Pełna kontrola</p>
                  <p>Twórz CV od zera przeciagajac elementy</p>
                  <ButtonCustom disabled>
                    Przejdz do tworzenia od zera
                  </ButtonCustom>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-fluid-h1 font-bold text-center">
              Wybierz szablon CV
            </h1>
            <p className="text-fluid-lead text-center">
              Tutaj pojawi sie menu z dostepnymi szablonami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-primary/5 border border-primary/10 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => {
                    setTemplate(template.id as "classic" | "modern");
                    setIsOpen(false);
                  }}
                >
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-fluid-small ">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <ButtonCustom onClick={handleBackClick}>Wroc</ButtonCustom>
              <ButtonCustom onClick={() => setIsOpen(false)}>
                Zamknij
              </ButtonCustom>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
}
