import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(3, 'title is required'),
    description: z.string().min(3, 'description is required')
});
