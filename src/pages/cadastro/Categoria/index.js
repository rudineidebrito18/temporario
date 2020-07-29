import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <PageDefault>
            <h1>Cadatrar Categoria</h1>
            
            <Link to="/">
                ir para home
            </Link>
        </PageDefault>
    )
}