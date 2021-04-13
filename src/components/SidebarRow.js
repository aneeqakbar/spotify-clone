import './css/SidebarRow.css'
import React from 'react'

function SidebarRow({title,Icon}) {
    return (
        <div className='sidebar__row'>
            {Icon ? (
                <>
                    <p>{Icon}</p>
                    <p className='text'>{title}</p>
                </>
            ) : <p className='text'>{title}</p>}
        </div>
    )
}

export default SidebarRow
