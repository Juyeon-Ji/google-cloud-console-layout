import { useEffect, useState } from "react";
import axios from "axios";

function UseRequest(url) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      try {
        setLoading(true);
        let res = await axios.get(url);
        setResponse(res);
      } catch (e) {
        setError(e);
        console.error(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return [response, loading, error];
}

export default UseRequest;
