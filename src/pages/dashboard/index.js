import React, {useEffect, useState} from "react";
import CardImage from "../../components/CardImage";
import { api } from "../../services/api";

import './styles.css'

export default function  Dashboard() {
    const [listGalery, setListGalery] = useState([])
    const [section, setSection] = useState('hot')

    const handleFindGalerys = () => {
        api.get(`/3/gallery/hot/top/all?showViral=true&mature=true`)
        .then((response) => {
            setListGalery(response.data.data)
            console.log(response.data.data)
        }).catch((err) => {
            console.error("fail", err)
        })
    } 
    

    function handle(e) {
        console.log(e, 'asdfasdf')
    }
    useEffect(() => {
        handleFindGalerys()
    },[])

   return (
    <>
      <h1>Galery</h1>
      {section}
      <div>
        <select value={section} onChange={e => handle(e.target.value)} name="section">
            <option value="hot">Hot</option>
            <option value="top">Top</option>
            <option value="user">User</option>
        </select>
        <button>Search</button>
      </div>
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
        </div>
       )
      })}
    </div>
    </>
   )
}