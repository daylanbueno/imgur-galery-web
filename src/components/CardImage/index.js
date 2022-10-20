import React from 'react'
import _ from 'lodash'
import './styles.css'


export default function CardImage({ image , description, animated}) {
    return (
        <div className='card-image'>
            {
               animated ? (
                <video muted draggable={false} autoPlay className='image' controls>
                   <source type="video/mp4" src={image} alt={description}/>
                </video>
               ) 
               : <img className='image' src={image} alt={description} />
            }
            <p too className='description' >{_.truncate(description, { 'length':100  }) || 'there is no description'}</p>
        </div>
    )
}