"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import ButtonCustom from "@/components/ButtonCustom";

export default function StartPopout() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
        <DialogPanel className="w-full max-w-4xl bg-secondary border border-primary/10 rounded-2xl shadow-2xl p-8">
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
              <ButtonCustom>Przejdz do wyboru szablonu</ButtonCustom>
            </div>
            <div className="p-4 border border-primary/10 rounded-lg flex justify-center items-center flex-col gap-2">
              <p className="text-fluid-lead font-semibold">Szybki start</p>
              <p>Pełna kontrola</p>
              <p>Twórz CV od zera przeciagajac elementy</p>
              <ButtonCustom>Przejdz do tworzenia od zera</ButtonCustom>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
