import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <PageDefault>
            <h1>Cadatrar Video</h1> 

            <Link to="/cadastro/categoria">
                Cadatrar Categoria
            </Link>
        </PageDefault>
    )
}