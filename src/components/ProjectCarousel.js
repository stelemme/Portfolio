import { Carousel } from "react-bootstrap";
import { useGetProjects } from "../hooks/useGetProjects"

//Deze component toont op de home page 3 random projecten in een carousel

export const ProjectCarousel = () => {

  // De bestaande projecten worden eerst ingelezen via een GET request van de solid server.
  // Vervolgens worden er 3 random projecten gekozen uit deze bestaande projecten (zie useGetProjects).
  const { randomProjects } = useGetProjects()
  
  // Dit is de code die de carousel afbeeldt op de home page via een map functie.
  return (
    <Carousel className="my-3">
      {randomProjects.map((project) => (
        <Carousel.Item key={project.id}>
          <img
            className="d-block w-100"
            src={project.foto1}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
