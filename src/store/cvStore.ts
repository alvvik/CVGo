import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: "Początkujacy" | "Średniozaawansowany" | "Zaawansowany" | "Ekspert";
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate?: string;
  endDate?: string;
}

export interface Language {
  id: string;
  language: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}
export interface PersonalInfo {
  photo: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  summary: string;
}
export interface CVState {
  data: {
    personalInfo: PersonalInfo;
    experiences: Experience[];
    skills: Skill[];
    education: Education[];
    languages: Language[];
  };

  templateId: "classic" | "modern";

  updatePersonal: (field: keyof PersonalInfo, value: string) => void;

  setTemplate: (id: "classic" | "modern") => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: keyof Experience) => void;
  updateExperience: (
    id: string,
    field: keyof Experience,
    value: string,
  ) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  updateSkill: (id: string, field: string, value: string) => void;
  addEducation: (education: Education) => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, field: keyof Education, value: string) => void;
  addLanguage: (language: Language) => void;
  removeLanguage: (id: string) => void;
  updateLanguage: (id: string, field: keyof Language, value: string) => void;
}
export const useCVStore = create<CVState>()(
  devtools(
    persist(
      (set) => ({
        data: {
          personalInfo: {
            photo: "",
            fullName: "",
            title: "",
            email: "",
            phone: "",
            address: "",
            linkedin: "",
            summary: "",
          },
          experiences: [],
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
              experiences: state.data.experiences.filter(
                (exp) => exp.id !== id,
              ),
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
      }),
      { name: "cv" },
    ),
  ),
);
