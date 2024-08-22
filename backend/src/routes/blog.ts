import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "rayan9064_medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

// Middleware
blogRouter.use("/*", async (c, next) => {
    const jwt = c.req.header('Authorization') || "";
	const payload = await verify(jwt, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set("userId", payload.id as string);
	await next()
});

// New blog 
blogRouter.post('/new', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = createBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({error: "Invalid input"})
    }

	const post = await prisma.blog.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: Number(userId)
		}
	});

    console.log(post);
	return c.json({
		post
	});
})

// Update blog
blogRouter.put('/update', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({error: "Invalid input"})
    }

    try {
	const updatedBody = await prisma.blog.update({
		where: {
			id: body.id,
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

    console.log(updatedBody);
	return c.json({ id: body.id, msg: "Blog updated!"});
    }catch(e: any){
        c.status(411)
        return c.json({error: "Unable to update. Something went wrong!", 
			message: e.message
		})
    }
});

// Bulk router for multiple posts and with pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // Get page number and number of items per page from query params (optional)
  const page = parseInt((c.req.query as any).page) || 1;
  const limit = parseInt((c.req.query as any).limit) || 10; // Default to 10 posts per page

  try {
    const blogs = await prisma.blog.findMany({
      skip: (page - 1) * limit, // Calculate skip based on page and limit
      take: limit
    })
    const total = await prisma.blog.count(); // Get total number of posts
    return c.json({ posts: blogs, totalPosts: total });
  } catch (e: any) {
    console.error(e.message);
    return c.json({ 
		error: "Something went wrong while fetching posts", 
		message: e.message
	 });
  }
})

blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	
	const post = await prisma.blog.findUnique({
		where: {
			id: Number(id)
		}
	});

    if(!post){
        c.status(411)
        return c.json({error: "Invalid blog id, Blog not found"});
    }

	return c.json(post);
})
