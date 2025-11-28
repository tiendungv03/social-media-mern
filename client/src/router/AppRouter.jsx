// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import Posts from "../components/Posts/Posts";
import Post from "../components/Posts/Post/Post";
import Register from "../components/Form/RegisterForm";
import Login from "../components/Form/Login";
import { useAuth } from "../context/AuthContext";

const AppRouter = () => {
  // const user = { name: "Tien Dung" };

  // const { user, isLoggedIn, logout } = useAuth();

  // const handleLoginClick = () => {
  //   if (isLoggedIn) logout();
  //   // nếu chưa login thì chuyển hướng /login (sau này dùng navigate)
  // };

  return (
    <BrowserRouter>
      {/* luôn hiển thị header */}
      <Header />

      {/* nội dung thay đổi theo route */}
      <main className="">
        <Routes>
          <Route path="/" element={<Posts />} /> {/* / */}
          <Route path="/create" element={<Post />} /> {/* /create */}
          <Route path="/login" element={<Login />} /> {/* /login */}
          <Route path="/register" element={<Register />} />
          {/* /register */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default AppRouter;
