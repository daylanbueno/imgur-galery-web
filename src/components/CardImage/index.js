import React from 'react'

import './styles.css'


export default function CardImage({ image , title, animated, type }) {
    return (
        <div className='card'>
            {
               animated ? (
                <video muted draggable={false} autoplay className='image' controls>
                   <source type="video/mp4" src={image}/>
                </video>
               ) 
               : <img className='image' src={image} alt={title} />
            }
            <h1>OLA MUNDO</h1>
        </div>
    )
}