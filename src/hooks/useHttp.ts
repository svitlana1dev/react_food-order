import { FC, useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url: string, config: RequestInit) => {
  const res = await fetch(url, config);
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Something went wrong");
  }

  return resData;
};

export const useHttp = (url: string, config: RequestInit, initialData: any) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(async function sendRequest() {
    setIsLoading(true);

    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [url, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
};
