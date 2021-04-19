import React from 'react'
import './css/Body.css'
import Header from './Header'
import Playlist from './Playlist'
import Palette, { usePalette } from 'react-palette'

function Body() {
    const IMAGE_URL = 'https://avatars.githubusercontent.com/u/75623135?v=4';
    const {data, error, loading} = usePalette(IMAGE_URL);
    const colors = Object.values(data);

    return (
        <>
        <div className='main_body' style={{background: `linear-gradient(${colors[0]},${colors[1]})`}}>
            {/* Header */}
            <Header/>
            {/* playlist */}
            <Playlist/>



            {/* {colors.map((_color)=>(
                <div style={{ background: _color }}>
                    hello
                </div>
            ))} */}
        </div>
        </>
    )
}

export default Body

