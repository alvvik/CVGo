import type { ChangeEvent } from "react";
import { useCVStore, type CVState } from "@/store/cvStore";

export const importDataFromJson = async (
  file: File,
): Promise<CVState["data"]> => {
  const text = await file.text();
  const parsed = JSON.parse(text) as Partial<CVState["data"]>;

  if (!parsed || typeof parsed !== "object") {
    throw new Error("Nieprawidłowy plik JSON.");
  }

  return parsed as CVState["data"];
};

export const applyImportedData = (importedData: CVState["data"]) => {
  useCVStore.setState((state) => ({
    ...state,
    data: {
      ...state.data,
      ...importedData,
      personalInfo: {
        ...state.data.personalInfo,
        ...importedData.personalInfo,
      },
    },
  }));
};

export const handleImportJson = async (
  event: ChangeEvent<HTMLInputElement>,
) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const importedData = await importDataFromJson(file);
    applyImportedData(importedData);
  } catch (error) {
    console.error("Błąd importu JSON:", error);
  } finally {
    event.target.value = "";
  }
};
