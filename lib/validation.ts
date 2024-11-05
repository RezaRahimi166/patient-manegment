import { z } from "zod";

export const UserFormVlidation = z.object({
  name: z
    .string()
    .min(2, "name must be at least 2 characters.")
    .max(50, "name must be at most 50 characters."),
  email: z.string().email("Invalid Email Addres "),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Invalid Phone Number"
    ),
});
