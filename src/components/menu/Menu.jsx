import React from 'react'
import "./Menu.scss"
import MenuItem from './MenuItem'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <MenuItem 
                    href="#intro"
                    title="Home"
                    setMenuOpen
                />
                <MenuItem 
                    href="#portfolio"
                    title="Portfolio"
                    setMenuOpen
                />
                <MenuItem 
                    href="#works"
                    title="Projects"
                    setMenuOpen
                />
                <MenuItem 
                    href="#contact"
                    title="Contact Me"
                    setMenuOpen
                />
            </ul>
        </div>
    )
}
