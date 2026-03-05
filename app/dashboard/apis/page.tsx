"use client";

import { useEffect, useState } from "react";

export default function APIListPage() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    const fetchAPIs = async () => {
      const token = localStorage.getItem("access");

      const res = await fetch("http://localhost:8000/api/monitoring/apis/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setApis(data);
    };

    fetchAPIs();
  }, []);

  return (
    <div>
      <h1>Registered APIs</h1>
      {apis.map((api: any) => (
        <div key={api.id}>
          <h3>{api.name}</h3>
          <p>{api.base_url}</p>
        </div>
      ))}
    </div>
  );
}
