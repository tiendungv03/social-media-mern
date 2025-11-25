import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";
import Post from "./components/Posts/Post/Post";
import Posts from "./components/Posts/Posts";

function App() {
  const [showPost, setShowPost] = useState(false);

  const user = { name: "Tien Dung" };

  const handleLoginClick = () => {
    console.log("login / logout here");
  };

  const handleClick = () => {
    console.log("Clicked");
    setShowPost(true);
  };

  return (
    <>
      <Header user={user} onLoginClick={handleLoginClick} />
      <div className="">
        <Posts />
      </div>
      <button onClick={handleClick}>Post</button>

      {showPost && <Post />}
    </>
  );
}

export default App;
