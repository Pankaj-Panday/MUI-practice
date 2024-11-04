import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import { Note } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Notes /> },
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
