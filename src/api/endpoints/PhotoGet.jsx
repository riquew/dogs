import React from "react";

const PhotoGet = () => {
  function handleSubmit() {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/photo")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" />
      <button>ENVIAR</button>
    </form>
  );
};

export default PhotoGet;
