"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [name, setName] = useState("");

  const createOrg = async () => {
    const token = localStorage.getItem("access");

    await fetch("http://localhost:8000/api/org/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });

    window.location.href = "/dashboard";
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-4">
        <h1>Create Organization</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Org Name"
        />
        <button onClick={createOrg}>Create</button>
      </div>
    </div>
  );
}
