import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notes from './pages/Notes';
import Create from './pages/Create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Notes />
  },
  {
    path: "/create",
    element: <Create />
  }
])

function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App
