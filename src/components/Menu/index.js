import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/Logo.svg'
import './Menu.css'
import Button from '../Button'

// import ButtonLink from './components/ButtonLink'

export default () => {

    
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="logo da rudflix"/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}