import { CVState } from "@/store/cvStore";

export const exportData = (data: CVState["data"]) => {
  const dataStr = JSON.stringify(data, null, 2);

  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cv-${data.personalInfo.fullName ? data.personalInfo.fullName : new Date().toISOString()}.json`;

  link.click();
  URL.revokeObjectURL(url);
};

export const exportToPDF = (
  targetRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!targetRef.current) return;

  const element = targetRef.current;

  window.print();
};
