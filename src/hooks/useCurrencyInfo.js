//hooks are generally given the js type because they return a js value.Files should be named according to the value they return. Jsx should be named when they return the given object.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.5/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // converting data is into json because generally api gives output in string
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
