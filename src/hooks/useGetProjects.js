import { useState, useEffect } from "react";

// Deze hook haalt de projecten van de server wanneer de pagina voor de eerste keer wordt gerenderd.
export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const [randomProjects, setRandomProjects] = useState([]);

  // Deze functie haalt een bepaald aantal random elementen uit een array.
  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  // Dit is de hook die effectief de projecten van de server haalt.
  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
        methode: "GET",
      };
      const data = await fetch(
        "http://localhost:5000/stef/data/projects.json",
        requestOptions
      );
      const body = await data.json();
      setProjects(body);
      setRandomProjects(getRandom(body, 3));
    }
    fetchData();
  }, []);

  return { projects, randomProjects };
};

