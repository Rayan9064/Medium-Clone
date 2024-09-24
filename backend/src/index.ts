import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'
import { commentRouter } from './routes/comments'

const app = new Hono()

app.use('/*', cors())
app.route("/api/user", userRouter);
app.route("/api/blog", blogRouter);
app.route("/api/blog/comment", commentRouter);

export default app
