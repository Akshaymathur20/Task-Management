import {z} from 'zod'

export const usernameValidation = z
            .string()
            .min(2,"Username must be atleast 2 characters")
            .max(2,"Username must be less than 20 characters")
            .regex(/^[a-zA-Z0-9_]+$/,"UserName must not contains special character")



export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid Email Address'}),
    password: z.string().min(6,{message:"password  is must at least 6 character"})
})