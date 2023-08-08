import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - Reafatorando post
  const [config, setConfig] = useState(null); // configura cabeçarios, posts...
  const [method, setMethod] = useState(null); // diz que método está utilizando, get ou post
  const [callFetch, setCallFetch] = useState(false); // quando adicionar um dado no sistema vai recarregar o useEffect
  const [itemid, setItemId] = useState();

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratamento de erros
  const [erro, setErro] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);

        setLoading(false);
      } catch (erro) {
        console.log(erro.message);
        setErro("Houve algum erro ao carregar os dados!");
      }
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const apagarURL = `${url}/${itemid}`;

        const res = await fetch(apagarURL, config);
        const json = await res.json();
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, erro };
};
