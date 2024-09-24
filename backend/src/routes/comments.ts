import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const commentRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	},
	Variables: {
		userId: string;
	}
}>();

// Middleware
commentRouter.use("/*", async (c, next) => {
	const jwt = c.req.header('Authorization') || "";
	const payload = await verify(jwt, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ pay: payload, error: "unauthorized" });
	}
	c.set("userId", payload.id as string);
	await next()
});

// ** Create a new comment **
//  -- Adding userId authorId from middlewares
//  -- Adding blogId from parameters
//  -- Adding the comment data
commentRouter.post('/:id', async (c) => {
	const userId = c.get('userId');
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	// const { success } = createBlogInput.safeParse(body);
	// if(!success){
	//   c.status(411)
	//   return c.json({error: "Invalid input"})
	// }

	const comment = await prisma.comment.create({
		data: {
			content: body.content,
			authorId: Number(userId),
			blogId: Number(id),
		}
	});

	console.log(comment);
	return c.json({
		comment
	});
})

// ** Edit a comment **
commentRouter.put('/:id', async (c) => {
	const userId = c.get('userId');
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	// const { success } = createBlogInput.safeParse(body);
	// if(!success){
	//   c.status(411)
	//   return c.json({error: "Invalid input"})
	// }

	const comment = await prisma.comment.findUnique({
		where: {
			id: body.id
		}
	});

	if (Number(userId) !== comment?.authorId) {
		c.status(401)
		return c.json({ error: "Unauthorized to update this blog!" });
	}

	const updatedComment = await prisma.comment.update({
		where: {
			id: comment.id,
		},
		data: {
			content: body.content
		}
	});

	console.log(updatedComment);
	return c.json({
		msg: "Blog updated successfully",
		updatedComment
	});
})

// ** Delete a comment **
commentRouter.delete('/:id', async (c) => {
	const id = c.req.param('id'); // blog ID
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const userId = c.get('userId');
	const body = await c.req.json();
    const comment = await prisma.comment.findUnique({
        where: {
            id: body.id
        }
    });
    if (Number(userId) !== comment?.authorId) {
        c.status(401);
        return c.json({ error: "Unauthorized, only user can delete the comment" });
    }
    try {
    const deletedcomment = await prisma.comment.delete({
        where: {
            id: Number(comment.id)
        }
    });

    console.log(deletedcomment);
    return c.json({ msg: "Blog deleted!", deletedcomment});
    }catch(e: any){
        c.status(411)
        return c.json({error: "Unable to delete. Something went wrong!", 
            message: e.message
        })
    }
})