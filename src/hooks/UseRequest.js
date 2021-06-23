import { useEffect, useState } from "react";
import axios from "axios";

function UseRequest(url, postApiBody) {
  // loading, response, error 값을 다루는 hooks
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setError(null); // 에러 null 처리
      try {
        setLoading(true); // 로딩중
        console.log(url);
        let res = null;
        if (postApiBody) {
          res = await axios.post(url, postApiBody);
        } else {
          res = await axios.get(url);
        }

        setResponse(res); // response 설정
      } catch (e) {
        setError(e); // error 설정
        console.log("Error: ", e);
      }
      setLoading(false); // 로딩 끝
    }
    fetchData();
  }, [url]);

  return [response, loading, error]; // 현재 값들을 배열로 반환
}

export default UseRequest;
