import React, { useState } from "react";

function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // simulasi login berhasil
    if (email && password) {
      localStorage.setItem("token", "dummy-token");
      setIsLogin(true);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f1f1f1ff, #b6b9b7ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: 30,
          width: 300,
          borderRadius: 8,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
