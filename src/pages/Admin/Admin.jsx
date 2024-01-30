import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="inputs">
        <input type="URL" placeholder="URL..." />
        <input type="text" placeholder="Text..." />
        <input type="number" placeholder="Number..." />
      </div>
      <button>CREATE</button>
    </div>
  );
};

export default Admin;
