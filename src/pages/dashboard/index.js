import React, {useEffect, useState} from "react";
import CardImage from "../../components/CardImage";
import { api } from "../../services/api";

import './styles.css'

export default function  Dashboard() {
    const [listGalery, setListGalery] = useState([])

    const handleFindGalerys = () => {
        api.get(`/3/gallery/hot/top/all?showViral=true&mature=true`)
        .then((response) => {
            setListGalery(response.data.data)
            console.log(response.data.data)
        }).catch((err) => {
            console.error("fail", err)
        })
    } 

    useEffect(() => {
        handleFindGalerys()
    },[])

   return (
    <>
      <h1>Galery</h1>
      <div className="container" >
      {listGalery.map((galery) => {
        return (
        <div>
            <CardImage 
                key={galery.id}
                image={galery.images[0].link}
                title={galery.title}
                type={galery.images[0].type}
                animated={galery.images[0].animated}
            />
            <hr/>
        </div>
       )
      })}
    </div>
    </>
   )
}