import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content should be at least 10 chars" })
    .max(300, { message: "Content should not exceed 300 chars" }),
});
