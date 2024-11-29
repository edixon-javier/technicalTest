// En hooks/useFetchFakeData.js
import { useState, useEffect } from "react";

export function useFetchFakeData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fakeData = [
    { id: 1, name: "Edixon Pabon", photo: "https://via.placeholder.com/100" },
    { id: 2, name: "John Doe", photo: "https://via.placeholder.com/100" },
    { id: 3, name: "Jane Smith", photo: "https://via.placeholder.com/100" },
    { id: 4, name: "Robert Brown", photo: "https://via.placeholder.com/100" },
    { id: 5, name: "Alice Johnson", photo: "https://via.placeholder.com/100" },
    { id: 6, name: "Michael White", photo: "https://via.placeholder.com/100" },
    { id: 7, name: "Emily Davis", photo: "https://via.placeholder.com/100" },
    { id: 8, name: "David Wilson", photo: "https://via.placeholder.com/100" },
    { id: 9, name: "Sophia Moore", photo: "https://via.placeholder.com/100" },
    { id: 10, name: "William Taylor", photo: "https://via.placeholder.com/100" },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData({ data: fakeData });
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
}
