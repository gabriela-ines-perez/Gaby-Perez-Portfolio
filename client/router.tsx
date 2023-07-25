import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectSinglePage from './components/ProjectSinglePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />}></Route>
      <Route path="projects/:id" element={<ProjectSinglePage />}></Route>
    </Route>,
  ),
)

export default router
