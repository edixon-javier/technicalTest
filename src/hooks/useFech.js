import { useState, useEffect } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  url = `https://dummyapi.io/data/v1/${endpoint}`;

  const options = {
    method: "GET",
    headers: {
      "app-id": "0JyYiOQXQQr5H9OEn21312",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch.catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return { data, loading };
}
