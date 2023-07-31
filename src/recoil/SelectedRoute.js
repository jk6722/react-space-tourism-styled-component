import { atom } from "recoil";

export const SelectedRouter = atom({
  key: "SelectedRouter",
  default: "HOME",
});

export const SelectedDestination = atom({
  key: "SelectedDestination",
  default: "MOON",
});
