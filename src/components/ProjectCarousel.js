import React from 'react';
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";


const ProjectCarousel = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
          methode: "GET"
      }
      const data = await fetch('http://localhost:5000/stef/data/db.json', requestOptions)
      const body = await data.json()
      setProjects(getRandom(body.projects, 3))
    }
    fetchData()
  }, [])
  
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

  return ( 
    <Carousel className="my-3">
      {projects.map((project) => (
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={project.foto}
          alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export {ProjectCarousel}