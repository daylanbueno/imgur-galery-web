import React from "react";
import CardImage from "../cardImage";

export default function Galery({images}) {
    return (
        <>
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