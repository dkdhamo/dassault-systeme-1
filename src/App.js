import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import VideoPage from "./pages/VideoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/category/:category" element={<Category />} />

        <Route path="/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
