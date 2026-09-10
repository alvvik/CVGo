import ButtonCustom from "@/components/ButtonCustom";
import InputCustom from "@/components/InputCustom";
import type { Education } from "@/store/cvStore";

interface EducationSectionProps {
  education: Education[];
  addEducation: (edu: Education) => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, field: string, value: string) => void;
}

export default function EducationSection({
  education,
  addEducation,
  removeEducation,
  updateEducation,
}: EducationSectionProps) {
  return (
    <div className="mb-6 rounded-2xl border border-primary/15 bg-background/90 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2>Edukacja</h2>
        <ButtonCustom
          onClick={() => {
            addEducation({
              id: crypto.randomUUID().toString(),
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
        {education.map((edu) => (
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
  );
}
