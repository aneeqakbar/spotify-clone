import React from 'react'
import './css/Body.css'
import Header from './Header'
import Palette, { usePalette } from 'react-palette'

function Body() {
    // const IMAGE_URL = 'https://www.irn.no/wp-content/uploads/2020/04/zahid-lilani-bnjHJO3c5uM-unsplash-scaled.jpg'
    // const { data, error, loading } = usePalette(IMAGE_URL)
    // const colors = Object.values(data);

    return (
        <div className='main_body'>
            {/* Header */}
            <Header/>
            {/* playlist */}



            {/* {colors.map((_color)=>(
                <div style={{ background: _color }}>
                    hello
                </div>
            ))} */}
        </div>
    )
}

export default Body

