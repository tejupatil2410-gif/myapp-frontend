import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || "http://3.110.54.155/"}/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("⚠️ Could not connect to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 My React Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
