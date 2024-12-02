import { useState, useEffect } from "react";

export function useFetch(endpoint = "", page = 0, limit = 5) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://dummyapi.io/data/v1/user";

  const options = {
    headers: {
      "app-id": "63473330c1927d386ca6a3a5",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}${endpoint}?page=${page}&limit=${limit}`, {
      ...options,
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint, page, limit]);
  console.log(data);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        ...options,
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete data");
      setData((prevData) => ({
        ...prevData,
        data: prevData.data.filter((item) => item.id !== id),
      }));
      return true;
    } catch (err) {
      setError(err);
      return false;
    }
  };

  return { data, loading, error, deleteData };
}
