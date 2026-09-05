import { CVState } from "@/store/cvStore";

export const exportData = (data: CVState["data"]) => {
  const dataStr = JSON.stringify(data, null, 2);

  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "moje-cv.json";

  link.click();
  URL.revokeObjectURL(url);
};
