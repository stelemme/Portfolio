import { useState, useEffect } from "react";

// Deze hook haalt de vaardigheden van de server wanneer de pagina voor de eerste keer wordt gerenderd.
export const useGetSkills = () => {
  const [skills, setSkills] = useState([]);

  // Dit is de hook die effectief de projecten van de server haalt.
  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
        methode: "GET",
      };
      const data = await fetch(
        "http://localhost:5000/stef/data/skills.json",
        requestOptions
      );
      const body = await data.json();
      setSkills(body);
    }
    fetchData();
  }, []);

  return { skills };
};
