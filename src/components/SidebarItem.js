import React from 'react'

const SidebarItem = ({ name, active, handleClick }) => {
    return (
        <button 
            className={`sidebar-item ${active ? 'active' : ''}`} 
            onclick={handleClick}
        >
            {name}
        </button>
    )
}

export default SidebarItem
