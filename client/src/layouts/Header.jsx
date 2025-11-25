// src/layouts/Header.jsx
import React from "react";

const Header = ({ user, onLoginClick }) => {
  const isLoggedIn = !!user;

  return (
    <header className="w-[95%] mx-auto bg-slate-600 text-slate-100 rounded-b-lg shadow-md">
      <div className="px-4 py-3 flex items-center justify-between ">
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
            M
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold">Memories</span>
            <span className="text-xs text-slate-400">
              Save your best moments
            </span>
          </div>
        </div>

        {/* Right side: user + button */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-200">
            {isLoggedIn ? `Hi, ${user.name}` : "Guest"}
          </span>
          <button
            onClick={onLoginClick}
            className="px-3 py-1.5 rounded-full text-sm font-medium
                       bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
                       transition-colors"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
