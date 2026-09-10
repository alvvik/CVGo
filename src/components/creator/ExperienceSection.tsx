import ButtonCustom from "@/components/ButtonCustom";
import InputCustom from "@/components/InputCustom";
import type { Experience } from "@/store/cvStore";

interface ExperienceSectionProps {
  experiences: Experience[];
  addExperience: (exp: Experience) => void;
  removeExperience: (id: string) => void;
  updateExperience: (id: string, field: string, value: string) => void;
}

export default function ExperienceSection({
  experiences,
  addExperience,
  removeExperience,
  updateExperience,
}: ExperienceSectionProps) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-background/90 p-4 ">
      <div className="mb-4 flex items-center justify-between">
        <h2>Doświadczenie</h2>
        <ButtonCustom
          onClick={() => {
            addExperience({
              id: crypto.randomUUID().toString(),
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
        {experiences.map((exp) => (
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
  );
}
