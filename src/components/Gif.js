import React from 'react'

export const Gif = ({ title, url, id }) => {
    return (
        <div>
            <img
                src={url}
                alt={''}
            ></img>
            <h3>{title}</h3>
        </div>
    )
}
