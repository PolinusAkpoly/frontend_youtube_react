import React, { FC, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

    const [openNav, setOpenNav] = useState<boolean>(false)

    // let openNav = false 

    // const setOpenNav = (value: boolean) =>{
    //     openNav = value
    //     console.log(openNav);
        
    // }




    return (
        <header className="sticky">
            <div className="header-top box flex">
                <div className="header-top-left flex-1 flex flex-center-v">
                    <div className="header-icon" id="collapse"
                    onClick={()=>setOpenNav(!openNav)}
                    >
                        <i className="fas fa-bars"></i>
                    </div>
                    <Link to="/" >
                        <div className="logo">
                            <img src="/images/logo/logo-youtube.svg" alt="" />
                            <img src="/images/logo/favicon.svg" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="header-top-center flex-3 flex flex-center-v flex-center-h">
                    <input type="search" placeholder="Rechercher" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="header-top-right flex-1 flex flex-center-v">
                    <Link to="#" className="flex-1 text-center"><i className="fas fa-bell"></i></Link>
                    <Link to="/upload" className="flex-1 text-center"><i className="fas fa-arrow-circle-up"></i></Link>
                    <Link to="/account.html" className="flex-1 text-center"><i className="fas fa-user-circle"></i></Link>
                </div>
            </div>
            {
                openNav ?
                    <nav className="header-left fixed box" id="menu"
                    onClick={()=>setOpenNav(false)}
                    onMouseLeave={()=>setOpenNav(false)}
                    >
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="">Bibliothèque</Link></li>
                            <li><Link to="/lector">Lecteur</Link></li>
                            <li><Link to="">Compte</Link></li>
                            <li><Link to="">Vidéos</Link></li>
                            <li><Link to="">Mettre en ligne</Link></li>
                            <li><Link to="/singin">Se connecter</Link></li>
                            <li><Link to="/singup">S'inscrire</Link></li>
                        </ul>
                    </nav>
                    :
                    null
            }

        </header>
    );
}
export default Header;
