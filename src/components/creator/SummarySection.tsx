import InputCustom from "@/components/InputCustom";

interface SummarySectionProps {
  summary: string;
  updatePersonal: (field: string, value: string) => void;
}

export default function SummarySection({
  summary,
  updatePersonal,
}: SummarySectionProps) {
  return (
    <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4 ">
      <h2>Podsumowanie</h2>
      <InputCustom
        label="Krótki opis zawodowy"
        name="summary"
        type="textarea"
        placeholder="Pasjonat programowania z doświadczeniem w tworzeniu nowoczesnych aplikacji webowych."
        value={summary}
        onChange={(e) => updatePersonal("summary", e.target.value)}
      />
    </div>
  );
}
