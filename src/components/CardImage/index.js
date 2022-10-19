import React from 'react'

import './styles.css'


export default function CardImage({ image , title, animated }) {
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
            <h3>{title}</h3>
            <button>See more</button>
        </div>
    )
}