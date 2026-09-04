import { create } from "zustand";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
}

interface Skill {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

interface Education {
  id: string;
  school: string;
  degree: string;
  startDate?: string;
  endDate?: string;
}

interface Language {
  id: string;
  language: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export interface CVState {
  data: {
    personalInfo: {
      photo: string;
      fullName: string;
      title: string;
      email: string;
      phone: string;
      address: string;
      linkedin: string;
      summary: string;
    };
    experiences: Experience[];
    skills: Skill[];
    education: Education[];
    languages: Language[];
  };

  templateId: "classic" | "modern";

  updatePersonal: (field: string, value: string) => void;
  setTemplate: (id: "classic" | "modern") => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: string) => void;
  updateExperience: (id: string, field: string, value: string) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  updateSkill: (id: string, field: string, value: string) => void;
  addEducation: (education: Education) => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, field: string, value: string) => void;
  addLanguage: (language: Language) => void;
  removeLanguage: (id: string) => void;
  updateLanguage: (id: string, field: string, value: string) => void;
}

export const useCVStore = create<CVState>((set) => ({
  data: {
    personalInfo: {
      photo: "",
      fullName: "Jan Kowalski",
      title: "Specjalista",
      email: "jan@example.com",
      phone: "+48 123 456 789",
      address: "Warszawa, Polska",
      linkedin: "linkedin.com/in/jankowalski",
      summary:
        "Motywowany profesjonalista z doświadczeniem w branży. Dążę do ciągłego rozwoju i osiągania wyznaczonych celów.",
    },
    experiences: [
      {
        id: "1",
        company: "Nazwa Firmy",
        position: "Stanowisko",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
      },
    ],
    skills: [],
    education: [],
    languages: [],
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

  addExperience: (experience) =>
    set((state) => ({
      data: {
        ...state.data,
        experiences: [...state.data.experiences, experience],
      },
    })),

  removeExperience: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        experiences: state.data.experiences.filter((exp) => exp.id !== id),
      },
    })),

  updateExperience: (id, field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        experiences: state.data.experiences.map((exp) =>
          exp.id === id ? { ...exp, [field]: value } : exp,
        ),
      },
    })),

  addSkill: (skill) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: [...state.data.skills, skill],
      },
    })),

  removeSkill: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: state.data.skills.filter((skill) => skill.id !== id),
      },
    })),

  updateSkill: (id, field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: state.data.skills.map((skill) =>
          skill.id === id ? { ...skill, [field]: value } : skill,
        ),
      },
    })),

  addEducation: (education) =>
    set((state) => ({
      data: {
        ...state.data,
        education: [...state.data.education, education],
      },
    })),

  removeEducation: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.filter((edu) => edu.id !== id),
      },
    })),

  updateEducation: (id, field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.map((edu) =>
          edu.id === id ? { ...edu, [field]: value } : edu,
        ),
      },
    })),

  addLanguage: (language) =>
    set((state) => ({
      data: {
        ...state.data,
        languages: [...state.data.languages, language],
      },
    })),

  removeLanguage: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        languages: state.data.languages.filter((lang) => lang.id !== id),
      },
    })),

  updateLanguage: (id, field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        languages: state.data.languages.map((lang) =>
          lang.id === id ? { ...lang, [field]: value } : lang,
        ),
      },
    })),
}));
