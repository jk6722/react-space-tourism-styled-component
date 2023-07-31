import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import Layout from "./components/Layout/Layout";

const RouteData = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "destination",
    element: <DestinationPage />,
  },
  {
    path: "crew",
    element: <CrewPage />,
  },
  {
    path: "technology",
    element: <TechnologyPage />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {RouteData.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
