import React from 'react'

export default function MenuItem({href, title, setMenuOpen}) {
    return (
        <li onClick={()=> setMenuOpen(false)}>
            <a href={href}>{title}</a>
        </li>
    )
}
