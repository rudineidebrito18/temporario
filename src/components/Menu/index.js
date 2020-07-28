import React from 'react'
import Logo from '../../assets/image/Logo.svg'
import './Menu.css'
import Button from '../Button'

// import ButtonLink from './components/ButtonLink'

export default () => {

    
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo da rudflix"/>
            </a>
            <Button as="a" href="#" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}