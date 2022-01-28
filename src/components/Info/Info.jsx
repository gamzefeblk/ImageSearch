import React from 'react';
import "./Info.css"

function Info({image}) {
  let href=`https://www.instagram.com/${image.user.instagram_username}`
  console.log(href);
  return <div className='Info'>
    <p className="name">Fotografer: {image.user.name} </p>
    <a href={href} target="_blank"><i class="fab fa-instagram">{image.user.instagram_username}</i></a>
  </div>;
}

export default Info;
