import './style.scss'

import { Link } from 'react-router-dom'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

import Logo from '../../assets/logo.png'

export default function Header(){
    return(
        <header>
            <div className='logo'>
                <Link className='cats' to="/">Cats</Link>
            </div>

            <div className='icons'>
                <a target="_blank" href='https://www.linkedin.com/feed/'><BsLinkedin size={25} color="white"/></a>
                <a target="_blank" href='https://github.com/Yuriferr'><BsGithub size={25} color="white"/></a>
                <a href=''><img src={Logo}/></a>
            </div>
        </header>
    )
}