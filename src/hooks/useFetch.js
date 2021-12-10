import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsLoading(false);

        setData(json);

        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          setIsLoading(false);
          setError("Not fetch the data");
        }
      }
    };

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, isLoading, error, postData };
};
