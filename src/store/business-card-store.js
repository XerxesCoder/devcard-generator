import { create } from "zustand";

export const useBusinessCardStore = create((set, get) => ({
  selectedTheme: "dark-plus",

  cardData: {
    name: "",
    title: "",
    bio: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    tiktok: "",
    whatsapp: "",
    telegram: "",
  },

  setSelectedTheme: (theme) => set({ selectedTheme: theme }),

  setCardData: (cardData) => set({ cardData }),

  updateCardData: (newData) =>
    set((state) => ({
      cardData: { ...state.cardData, ...newData },
    })),

  handleDataChange: (newData) =>
    set((state) => ({
      cardData: { ...newData },
    })),

  getField: (field) => get().cardData[field],

  setField: (field, value) =>
    set((state) => ({
      cardData: { ...state.cardData, [field]: value },
    })),
}));
