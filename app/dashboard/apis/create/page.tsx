"use client";

import { useState } from "react";

export default function CreateAPIPage() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleCreate = async () => {
    const token = localStorage.getItem("access");

    await fetch("http://localhost:8000/api/monitoring/apis/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        base_url: url,
        method: "GET",
      }),
    });

    window.location.href = "/dashboard/apis";
  };

  return (
    <div>
      <h1>Add API</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Base URL" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
