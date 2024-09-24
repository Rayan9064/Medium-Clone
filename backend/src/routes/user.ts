import { Hono } from "hono"
import { sign } from "hono/jwt"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput } from 'rayan9064_medium-common'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

// Middlewares for user
//  ** isExistingUser
//  ** isCredentialsCorrect


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    // Checking the signup body 
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({error: "Invalid input"})
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });
    if(existingUser){
      c.status(409) // Indicates resource exists
      return c.json({message: "email already exists!"});
    }

    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      })
  
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({ jwt })
    } catch(e: any) {
      console.log(e.message)
      return c.json({
        message: e.message
      })
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
      const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
  
      const body = await c.req.json();
      const { success } = signinInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({error: "Invalid input", 
          message: c.error
        })
      }
      const user = await prisma.user.findFirst({
          where: {
              email: body.email, 
              password: body.password
          }
      });
  
      if (!user) {
          c.status(401);
          return c.json({ error: "Invalid credentials" });
      }
  
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    console.log("LoggedIn successfully!")
      return c.json({ jwt });
  })