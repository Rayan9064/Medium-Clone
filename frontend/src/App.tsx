import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Home'
import Blogs from './pages/Blogs'
import { CreateBlog } from './pages/CreateBlog'
import { useSelector } from 'react-redux'
import { RootState } from './redux'
import Home from './pages/Home'

function App() {
const isLogin = useSelector((state: RootState) => state.login.isLogin);

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* I want to redirect to the blogs page by default when tried to ping diferent router */}
          <Route path="/" element={<Navigate to='/blogs' replace/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/new-blog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Catch-all route for any unexpected paths */}
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App