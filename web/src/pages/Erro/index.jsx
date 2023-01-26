import { Link } from 'react-router-dom'

import './style.scss'

export default function Erro(){
    return(
        <div className='Erro'>
            <h1>404</h1>
            <h3>Page not found</h3>
            <Link to="/">Back</Link>
        </div>
    )
}