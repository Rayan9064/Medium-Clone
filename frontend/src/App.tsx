import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import { CreateBlog } from './pages/CreateBlog'
import { useSelector } from 'react-redux'
import { RootState } from './redux'

function App() {
const isLogin = useSelector((state: RootState) => state.login.isLogin);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/new-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App