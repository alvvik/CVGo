import ButtonCustom from "@/components/ButtonCustom";
import InputCustom from "@/components/InputCustom";
import type { Skill } from "@/store/cvStore";

interface SkillsSectionProps {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  updateSkill: (id: string, field: string, value: string) => void;
}

export default function SkillsSection({
  skills,
  addSkill,
  removeSkill,
  updateSkill,
}: SkillsSectionProps) {
  return (
    <div className="mb-6 rounded-2xl border border-primary/15 bg-background/90 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2>Umiejętności</h2>
        <ButtonCustom
          onClick={() => {
            addSkill({
              id: Date.now().toString(),
              name: "",
              level: "Średniozaawansowany",
            });
          }}
          className="text-sm"
        >
          + Dodaj
        </ButtonCustom>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-2xl border border-primary/15 bg-background/80 p-4"
          >
            <div className="space-y-4">
              <InputCustom
                label="Nazwa umiejętności"
                name={`skill-name-${skill.id}`}
                type="text"
                placeholder="Umiejętność"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
              />
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Poziom
                </label>
                <select
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(skill.id, "level", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-xl border border-primary/15 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Początkujacy">Początkujący</option>
                  <option value="Średniozaawansowany">
                    Średniozaawansowany
                  </option>
                  <option value="Zaawansowany">Zaawansowany</option>
                  <option value="Espercki">Espercki</option>
                </select>
              </div>
              <ButtonCustom
                onClick={() => removeSkill(skill.id)}
                className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
              >
                Usuń umiejętność
              </ButtonCustom>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
