import React from 'react';

type imageType = {
    imageUrl: string,
    borderColor: string
}
const PulsatingProfilePic = (props: imageType) => {
    return (
            <div className={`relative w-32 h-32 overflow-hidden rounded-full outline outline-offset-2 outline-3 outline-${props.borderColor}-500`}>
                <img
                    src={props.imageUrl}
                    alt="Profile Pic"
                    className="absolute w-full h-full object-cover rounded-full"
                />
                <div className="absolute w-full h-full rounded-full gradient-border"></div>
            </div>

    );
};

export default PulsatingProfilePic;
