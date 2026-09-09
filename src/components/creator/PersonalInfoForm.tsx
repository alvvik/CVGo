import InputCustom from "@/components/InputCustom";
import { type ChangeEvent } from "react";
import { CVState } from "@/store/cvStore";

interface PersonalInfoFormProps {
  personalInfo: CVState["data"]["personalInfo"];
  updatePersonal: (field: string, value: string) => void;
}

export default function PersonalInfoForm({
  personalInfo,
  updatePersonal,
}: PersonalInfoFormProps) {
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

  return (
    <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4 ">
      <h2>Dane osobowe</h2>

      <div className="space-y-4">
        <InputCustom
          label="Imię i nazwisko"
          name="fullName"
          type="text"
          placeholder="Jan Kowalski"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonal("fullName", e.target.value)}
        />
        <InputCustom
          label="Stanowisko"
          name="title"
          type="text"
          placeholder="Specjalista"
          value={personalInfo.title}
          onChange={(e) => updatePersonal("title", e.target.value)}
        />
        <InputCustom
          label="Email"
          name="email"
          type="email"
          placeholder="jan@example.com"
          value={personalInfo.email}
          onChange={(e) => updatePersonal("email", e.target.value)}
        />
        <InputCustom
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="+48 123 456 789"
          value={personalInfo.phone}
          onChange={(e) => updatePersonal("phone", e.target.value)}
        />
        <InputCustom
          label="Adres"
          name="address"
          type="text"
          placeholder="Warszawa, Polska"
          value={personalInfo.address}
          onChange={(e) => updatePersonal("address", e.target.value)}
        />
        <InputCustom
          label="LinkedIn"
          name="linkedin"
          type="text"
          placeholder="linkedin.com/in/jankowalski"
          value={personalInfo.linkedin}
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

          {personalInfo.photo ? (
            <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background p-3">
              <img
                src={personalInfo.photo}
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
  );
}
