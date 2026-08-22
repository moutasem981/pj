import { Registerschema } from "./Registerschema";

export const ProfileSchema = (t) =>
  Registerschema(t).pick([
    "fullName",
    "city",
    "phoneNumber",
  ]);