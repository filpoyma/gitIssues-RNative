import React from 'react';

export const useFetch = url => {
  const cache = React.useRef({});
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (!url) return;

    (async () => {
      setLoading(true);
      console.log('file-ull :', url);
      if (cache.current[url]) {
        console.log('cached data loaded');
        const data = cache.current[url];
        setData(data);
        setLoading(false);
      } else {
        console.log('requesting...');
        const response = await fetch(url);
        let data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
        setLoading(false);
      }
    })();
  }, [url]);

  return {isLoading, data, setData};
};

// by nuber issue - https://api.github.com/repos/vuejs/vue/issues/{number}
// all labels - https://api.github.com/repos/vuejs/vue/labels
// filtered by labels - //'https://api.github.com/repos/vuejs/vue/issues?labels=bug&security'

//Memoizing - https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/
