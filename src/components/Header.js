import React, { useRef } from 'react'
import './css/Header.css'
import { Avatar } from '@material-ui/core'

function Header() {
    const name = useRef('Aneeq Akbar Khan');
    name.current = name.current.split('',13).join('')+'...';

    return (
        <>
        <div className='main__header'>
            <div className="header__top">
                <div className="profileTab">
                    <Avatar className='profilePic'>Ak</Avatar>
                    <p>{name.current}</p>
                </div>
            </div>
            <div className="header__bottom">
                <img className="img" src="https://avatars.githubusercontent.com/u/75623135?v=4" alt="Thumbnail"/>
                {/* <div className="img">Thumbnail</div> */}
                <div className="playlist__Info">
                    <p>PlayList</p>
                    <h2 className='heading'>Title</h2>
                    <p className='sub__heading'>Dont listen to them, they are maniac and will also make you!</p>
                    <p className='more__info'>Aneeq Akbar Khan</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
