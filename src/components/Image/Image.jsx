import React from 'react';
import "./Image.css"

function Image({ image }) {
    let href = `https://www.instagram.com/${image.user.instagram_username}`
    return ( <div className='container2'>
    <div className='Info'>
    <p className="name">Photographer: {image.user.name} </p>
    <a href={href} target="_blank"><i class="fab fa-instagram">{image.user.instagram_username}</i></a>
    </div>
    <img src={image.urls.regular} key={image.id} />
    </div>
    )
}

export default Image;
