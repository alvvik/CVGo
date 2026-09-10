import ButtonCustom from "@/components/ButtonCustom";
import InputCustom from "@/components/InputCustom";
import type { Language } from "@/store/cvStore";

interface LanguagesSectionProps {
  languages: Language[];
  addLanguage: (lang: Language) => void;
  removeLanguage: (id: string) => void;
  updateLanguage: (id: string, field: string, value: string) => void;
}

export default function LanguagesSection({
  languages,
  addLanguage,
  removeLanguage,
  updateLanguage,
}: LanguagesSectionProps) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-background/90 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2>Języki obce</h2>
        <ButtonCustom
          onClick={() => {
            addLanguage({
              id: crypto.randomUUID().toString(),
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
        {languages.map((lang) => (
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
  );
}
