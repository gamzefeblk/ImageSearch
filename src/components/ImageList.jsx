import React from 'react';
import Image from './Image/Image';


function imageList({ images }) { //destructure
    return <div>
        {
            images.map((image, index) => (
                <Image  image={image} />
               
            ))
        }
    </div>;
}

export default imageList;
