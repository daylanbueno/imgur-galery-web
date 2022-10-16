import React, { useState }  from "react";
import { api } from "./services/api";



function App() {
   const [galery, setGalery] = useState([])
   function findGalery() {
    api.get(`/3/gallery/hot/top/all?showViral=true&mature=true&album_previews=true`)
    .then((response) => {
      setGalery(response.data.data)
      console.log(response.data.data)
    }).catch((err) => {
      console.error("fail", err)
    })
  }


  return (
    <>
      <button onClick={() => findGalery()}>LET'S GO</button>

      <div>
      {
        galery.map((it) => 
        <div> 
          <img key={it.id}  width={200} src={it.link} alt={it.title} />
          <p>{it.link}</p>
        </div>)
      }
      </div>
 
    </>
  );
}

export default App;
