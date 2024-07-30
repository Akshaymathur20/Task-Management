import {z} from "zod"


export const messageSchema  = z.object({
    content:z
    .string()
    .min(10,'contnet must be at least of 10 characters')
    .max(200,'contnet must be at less than of 200 characters')
})