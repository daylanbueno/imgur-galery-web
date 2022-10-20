import React, {useEffect, useState} from "react";
import Galery from "../../components/galery";
import { api } from "../../services/api";

import './styles.css'

export default function  Dashboard() {
    const [galleries, setGalleries] = useState([])
    const [section, setSection] = useState('hot')
    const [sort, setSort] = useState('viral')
    const [window, setWindow] = useState('day')

    const handleFindGalerys = () => {
        api.get(`/3/gallery/${section}/${sort}/${window}`)
        .then((response) => {
            setGalleries(response.data.data)
        }).catch((err) => {
            console.error("fail", err)
        })
    } 
    
    useEffect(() => {
        handleFindGalerys()
    },[section])

    useEffect(() => {
        handleFindGalerys()
    },[sort])

    useEffect(() => {
        handleFindGalerys()
    },[window])

    useEffect(() => {
        handleFindGalerys()
    },[])

   return (
    <>
    <header>
        <h1>Imgur image gallery</h1>
        
        <div className="select-section">
            <div className="select-card">
                <label>Select section</label>
                <select value={section} onChange={e => setSection(e.target.value)} name="section">
                    <option value="hot">Hot</option>
                    <option value="top">Top</option>
                    <option value="user">User</option>
                </select>
            </div>
            <div className="select-card">
                <label>Select sort</label>
                <select value={sort} onChange={e => setSort(e.target.value)} name="sort">
                    <option value="viral">viral</option>
                    <option value="top">top</option>
                    <option value="user">rising</option>
                </select>
            </div>

            <div className="select-card">
                <label>Select window</label>
                <select value={window} onChange={e => setWindow(e.target.value)} name="window">
                    <option value="day">day</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                    <option value="year">year</option>
                    <option value="all">all</option>
                </select>
            </div>
        </div>
    </header>
    
      <main>
        <div className="container-images">
            {galleries.map((galery) => {
                return (
                    <Galery 
                        key={galery.id}
                        title={galery.title}
                        images={galery.images}
                    />
            )
            })}
        </div>
      </main>

      
    </>
   )
}