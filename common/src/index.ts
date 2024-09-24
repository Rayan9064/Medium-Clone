import z from "zod";

// user auth
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

// blog auth
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string()
})

// comments auth
export const createCommentInput = z.object({
    content: z.string(),
    authorId: z.number(),
    blogId: z.number()
})

export const updateCommentInput = z.object({
    // id: z.number(), No need of comment id as we can authorize by author id
    content: z.string(),
})

export type signupInput = z.infer<typeof signupInput>
export type signinInput = z.infer<typeof signinInput>
export type createBlogInput = z.infer<typeof createBlogInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>
export type createCommentInput = z.infer<typeof createCommentInput>
export type updateCommentInput = z.infer<typeof updateCommentInput>