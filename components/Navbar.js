import style from '../styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import {useEffect, useRef, useState} from "react";
import TranslateOnScroll from "./effects/navbarTranslateOnScroll";

export default function Navbar(props) {

    // Stock le nom de la classe à appliquer à la navbar (background color en fonction des pages)
    const [backgroundColor, setBackgroundColor] = useState("")
    // Variable dynamique qui modifie le fontSize du titre du site => Manipulé dans handleFontSize
    const [logoSize, setLogoSize] = useState(null)
    // Variable qui vérifie si l'on est en haut de la page ou non afin d'afficher une ligne grise par l'ajout d'une classe
    const [isNotOnTop, setIsNotOnTop] = useState(false)
    // Variable qui ouvre ou non le burger menu, sur click de l'icone burger
    const [burgerOpen, setBurgerOpen] = useState(false)
    // Ajout ou supression d'une classe en fonction du background, donc de la page > qui rend le burger menu blanc ou noir
    const [burgerBlackVersion, setBurgerBlackVersion] = useState(false)
    // Je stocke ici le titre du site afin de récupérer la valeur fontSize css initiale afin de mettre à jour la valeur étalon
    const titleLogo = useRef(null)
    // La ou est stoké la valeur étalon en fonction de la taille du with, provenant des medias querry du css qu premier chargement et sinon a partir de l'event resize
    const logoSizeValue = useRef(null)
    //Position du bullet
    const [bulletPosition, setBulletPosition] = useState(-10)
    // Desktop navbar
    const desktopNav = useRef(null)
    // La bille (bullet)
    const bullet = useRef(null)
    // Les elements lien
    const serviceLink = useRef(null)
    const travauxLink = useRef(null)
    const nousLink = useRef(null)
    const contactLink = useRef(null)
    // Bullet position
    const [bulletInitialPosition, setBulletInitialPosition] = useState()

    // Changement du background de la navbar et modification de la couleur du navbar burger gestion du bullet
    useEffect( () => {
        // Gérer la position du bullet
        if (props.currentPage) {
            const links = {
                services: serviceLink.current,
                travaux: travauxLink.current,
                nous: nousLink.current,
                contact: contactLink.current
            }

            const currentLink = links[props.currentPage]
            console.log(currentLink)

            const leftNavBarDistance = desktopNav.current.getBoundingClientRect().left
            const currentLinkRect = currentLink.getBoundingClientRect()
            const xCenterOfElement = currentLinkRect.left +  ((currentLinkRect.right - currentLinkRect.left -24) / 2)
            const bulletPosition = xCenterOfElement - leftNavBarDistance
            setBulletPosition(bulletPosition)
            setBulletInitialPosition(bulletPosition)




        }
        setBackgroundColor(props.backgroundColor)
        if (props.backgroundColor === "background--white") {
            setBurgerBlackVersion(true)
        }
        return () => {
        }
    }, [props])

    // Initialisation du composant
    useEffect(() => {
        const title = titleLogo.current
        const titleFontSize = parseInt(window.getComputedStyle(title, null).getPropertyValue('font-size'));
        setLogoSize(titleFontSize)
        logoSizeValue.current = titleFontSize
    }, [])

    // Modification font-size sur resize
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // Movile menu
    useEffect(() => {
        const bodyComponent = document.querySelector('body');
        const scrollBarWith = window.innerWidth - document.body.clientWidth
        if (burgerOpen) {
            bodyComponent.style.paddingRight= `${scrollBarWith}px`
            bodyComponent.classList.add('stop_scrolling')
        } else {
            bodyComponent.removeAttribute('style');
            bodyComponent.classList.remove('stop_scrolling')
        }
    },[burgerOpen])


    // Modification font-size sur scroll
    useEffect( () => {
        window.addEventListener('scroll', handleFontSize, {passive: true})
        return () => {
            window.removeEventListener('scroll', handleFontSize, {passive: true})
        }
    })

    // Animation sur le hover des liens
    const handleHover = (e) => {
        const navBarElement = desktopNav.current
        const bulletElement = bullet.current
        bulletElement.classList.add(`${style.bullet_active}`)
        const leftNavBarDistance = navBarElement.getBoundingClientRect().left
        const element = e.target
        const elementRect = element.getBoundingClientRect()
        const xCenterOfElement = elementRect.left +  ((elementRect.right - elementRect.left -24) / 2)
        console.log(leftNavBarDistance)
        console.log(xCenterOfElement)
        setBulletPosition(xCenterOfElement - leftNavBarDistance )
    }

    //Animation sur le out du hover
    const handleOut = (e) => {
        const bulletElement = bullet.current
        if (!props.currentPage) {
            bulletElement.classList.remove(`${style.bullet_active}`)
        } else {
            setBulletPosition(bulletInitialPosition)
        }


    }

    // Gère la taille de la police en fonction du scroll, aussi utilisé lors de l'event resize
    const handleFontSize = () => {
        const body = window.scrollY
        let value = logoSizeValue.current
        if (body < 20) {
            setLogoSize(value)
            setIsNotOnTop(false)
        } else if (body > 20 && body < 100) {
            setLogoSize(value * 0.8)
        } else if (body > 101 && body < 145 ) {
            setLogoSize(value * 0.6)
        } else if (body > 145 && body < 160) {
            setLogoSize(value * 0.5)

        } else if (body > 160) {
            setIsNotOnTop(true)
            setLogoSize(value * 0.35)

        }
    }

    // Change la taille de la police en fonction du resize, aligner sur les media css
    const handleResize = () => {
        const bodyWith = window.innerWidth

        if (bodyWith > 719) {
            setBurgerOpen(false)
        }

        if (bodyWith < 719) {
            logoSizeValue.current = 38
            handleFontSize()
        } else if (bodyWith < 800) {
            logoSizeValue.current = 80
            handleFontSize()
        } else {
            logoSizeValue.current = 96
            handleFontSize()
        }
    }

    // Ouvre le menu burger
    const openBurgerMenu = () => {
        setBurgerOpen(!burgerOpen)
    }



    return (
        <TranslateOnScroll  isBurgerOpen={burgerOpen}>
            <div  className={`${style.navbar} ${isNotOnTop ? style.navbar__grey_line : ""} ${style[backgroundColor]} ${burgerOpen ? style.menu_opened : "" }`}>
                <div className={style.navbar_container}>

                    <div className={`${style.navbar__top} ${isNotOnTop ? style.is_not_display : ""} ` }>
                        <Link href="/">
                            <a>
                                <h1 style={ logoSize ? {fontSize: logoSize} : null} className={`${isNotOnTop ? style.is_not_visible : ""}`} ref={titleLogo}>POKOÙ WEB</h1>
                            </a>
                        </Link>
                    </div>

                    <div className={style.navbar__bottom}>
                        <div ref={desktopNav} className={style.navbar__bottom__desktop}>
                            <span ref={bullet} style={{left: `${bulletPosition}px`}} className={ `${style.nav__links_bullet}  ${props.currentPage ? style.bullet_active : ""}`}></span>
                            <div className={style.nav__links_left}>
                                <Link  href="/services">
                                    <a ref={serviceLink} onMouseOut={handleOut} onMouseOver={handleHover} >Nos services</a>
                                </Link>
                                <Link href="/">
                                    <a ref={travauxLink} onMouseOut={handleOut} onMouseOver={handleHover}>Travaux</a>
                                </Link>
                                <Link href="/about">
                                    <a ref={nousLink} onMouseOut={handleOut} onMouseOver={handleHover}>A propos de nous</a>
                                </Link>
                            </div>
                            <div className={style.nav__links_right}>

                                <Link  href="/contact">
                                    <a ref={contactLink} onMouseOut={handleOut} onMouseOver={handleHover}>Contactez-nous</a>
                                </Link>
                            </div>
                        </div>
                        <div className={style.navbar__bottom__mobile}>
                            <h1 className={`${ isNotOnTop ? style.is_visible : ""}`}>Poukoù web</h1>
                            <div  onClick={openBurgerMenu} className={ `${style.burger__icon} ${burgerBlackVersion ? style.black_version : ""} ${burgerOpen ? style.is_open : ""}` }>
                                <div className={style.icon__span}></div>
                                <svg x="0" y="0"  width="54px" height="54px" viewBox="0 0 54 54">
                                    <path d="M16.500,27.000 C16.500,27.000 24.939,27.000 38.500,27.000 C52.061,27.000 49.945,15.648 46.510,11.367 C41.928,5.656 34.891,2.000 27.000,2.000 C13.193,2.000 2.000,13.193 2.000,27.000 C2.000,40.807 13.193,52.000 27.000,52.000 C40.807,52.000 52.000,40.807 52.000,27.000 C52.000,13.000 40.837,2.000 27.000,2.000"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.burger__menu} ${burgerOpen ? style.burger__menu__open : ""}`}>
                <div className={style.burger__menu__container}>
                    <Link href="/"><a className={`${props.currentPage === "index" ? style.active_link : ""}`}>Home</a></Link>
                    <Link href="/services"><a className={`${props.currentPage === "services" ? style.active_link : ""}`}>Services</a></Link>
                </div>
            </div>
        </TranslateOnScroll>
    )
}