import React from "react";
import CardImage from "../CardImage";

export default function Galery({images}) {
    return (
        <>
        { console.log(images)}
        {
           
           images && images.map((image) => {
                return (
                    <CardImage 
                        image={image.link}
                        description={image.description}
                        animated={image.animated}
                    />
                )
            })
        }
        </>
    )
}