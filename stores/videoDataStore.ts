import { create } from "zustand";

type IVideoDataStore = {
  title: string | null;
  url: string | null;
  thumbnail: string | null;
  error: string | null;
  setField: (
    field: "title" | "url" | "thumbnail" | "order",
    value: string | number | null,
  ) => void;
};

export const useVideoDataStore = create<IVideoDataStore>((set) => ({
  title: null,
  url: null,
  thumbnail: null,
  error: null,

  setField: (field, value) => set({ [field]: value, error: null }),
}));
