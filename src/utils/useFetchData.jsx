import { useState, useEffect } from "react";

export function useFetchData() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    // fetch Get
    async function fetchGet() {
      const config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      try {
        const response = await fetch(
          "https://633c5fc1f11701a65f752782.mockapi.io/newhotles",
          config
        );
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        setFetchData([]);
        console.log("Error: ", error);
        console.log("No data: ", data);
      }
    }
    fetchGet();
  }, []);

  return { fetchData };
}
