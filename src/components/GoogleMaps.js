// Deze functie geeft de google maps iframe weer op de contact page.

export const Maps = () => {
  return (
    <div className="google-map-code">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed/v1/place?q=jozef+plateau+22&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="100%"
        height="550"
      ></iframe>
    </div>
  );
};
