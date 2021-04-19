import React from 'react'
import './css/Playlist.css'
import {PlayCircleFilled,FavoriteBorderOutlined,MoreHoriz} from '@material-ui/icons'

function Playlist() {
    return (
        <div className='body__bottom'>
            <div className='body__bottom__icons'>
                <PlayCircleFilled style={{color:'#1db954',backgroundColor:'white'}} className='favouriteIcon'/>
                <FavoriteBorderOutlined />
                <MoreHoriz />
            </div>
            <div>
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Playlist
