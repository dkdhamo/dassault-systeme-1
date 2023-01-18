import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import HomePage from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { NavBar } from "./components/NavBar";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/category/:category/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
