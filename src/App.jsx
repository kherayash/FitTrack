
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Dashboard from "./pages/Dashboard";
import Meals from "./pages/Meals";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";
import Analytics from "./pages/Analytics";


function App() {
  

  return (
    <>
      <BrowserRouter>
    <Routes>

        <Route path="/" element={<Layout />}>

            <Route index element={<Dashboard />} />

            <Route path="meals" element={<Meals />} />

            <Route path="workouts" element={<Workouts />} />

            <Route path="goals" element={<Goals />} />

            <Route path="analytics" element={<Analytics />} />

        </Route>

    </Routes>
</BrowserRouter>

    </>
  )
}

export default App
