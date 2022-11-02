import { useState, useCallback } from "react";

//TODO put this var in a config file and get it from env
const baseUrl = "http://localhost:8080/";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseUrl}${requestConfig.endpoint}`, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();

      if (response.ok) {
        applyData(data);
      } else {
        setError(data.errors);
      }
    } catch (err) {
      setError([{ message: err.message || "Something went wrong!" }]);
    }
    setIsLoading(false);
  }, []);

  return [isLoading, error, setError, sendRequest];
};

export default useApi;
