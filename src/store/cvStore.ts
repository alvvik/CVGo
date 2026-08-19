import { create } from "zustand";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
}

export interface CVState {
  data: {
    personalInfo: {
      photo: string;
      fullName: string;
      title: string;
      email: string;
    };
    experiences: Experience[];
  };

  templateId: "classic" | "modern";

  updatePersonal: (field: string, value: string) => void;
  setTemplate: (id: "classic" | "modern") => void;
}

export const useCVStore = create<CVState>((set) => ({
  data: {
    personalInfo: {
      photo: "https://placehold.net/avatar.svg",
      fullName: "Jan Kowalski",
      title: "Frontend Developer",
      email: "jan@example.com",
    },
    experiences: [
      {
        id: "1",
        company: "Firma IT",
        position: "Junior React Dev",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
      },
    ],
  },
  templateId: "classic",

  updatePersonal: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        personalInfo: {
          ...state.data.personalInfo,
          [field]: value,
        },
      },
    })),

  setTemplate: (id) => set({ templateId: id }),
}));
