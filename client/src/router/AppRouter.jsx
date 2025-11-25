// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import Posts from "../components/Posts/Posts";
import Post from "../components/Posts/Post/Post";
import App from "../App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} /> {/* / */}
          <Route path="create" element={<Post />} />
          {/* /create */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
