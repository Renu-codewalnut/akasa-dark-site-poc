import { useEffect, useState } from "react";
import { fetchDarkSiteContent } from "dataLayer/cms";

export function useCmsPageData() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDarkSiteContent()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.warn({ error });
      });

    return () => {
      setData({});
    };
  }, []);

  return data;
}
