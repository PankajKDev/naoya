import { create } from "zustand";

type IFormDataStore = {
  name: string | null;
  description: string | null;
  isPrivate: boolean | null;
  RoomPassword: string | null;
  currentVideo: string | null;
  currentVideoThumbnail: string | null;
  error: string | null;
  setField: (
    field:
      | "name"
      | "description"
      | "isPrivate"
      | "RoomPassword"
      | "currentVideo"
      | "currentVideoThumbnail",
    value: string | boolean | null,
  ) => void;
};

export const useFormDataStore = create<IFormDataStore>((set) => ({
  name: null,
  description: null,
  isPrivate: false,
  RoomPassword: null,
  currentVideo: null,
  currentVideoThumbnail: null,
  error: null,
  setField: (field, value) => set({ [field]: value, error: null }),
}));
