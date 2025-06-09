import { create } from "zustand";

type Store = {
  course: "web" | "mobile";
  switch: () => void;
};

export const useSwitchCourseStore = create<Store>()((set) => ({
  course: "web",
  switch: () =>
    set((state) => ({ course: state.course === "web" ? "mobile" : "web" })),
}));
