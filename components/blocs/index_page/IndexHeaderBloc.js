import style from "/styles/blocs/index_page/Indexheader.module.scss"
import Image from 'next/image'
import illuTest from '/public/illu_test.png'
import illuArabica from '/public/illu_index_arabica.png'
import mozillaTest from '../../../public/mozilla-labs.jpg'
import tablette_med from '../../../public/tablette_med.png'
import phone_med from '../../../public/phone_medtandem.png'
import landing from '../../../public/landing_illu.svg'


import SpeedFadeIn from "../../effects/SpeedFadeIn";
import Link from 'next/link'


export default function IndexHeaderBloc() {

    return (
        <SpeedFadeIn>
            <div className={style.header_bloc__container}>
                <div className={style.header_bloc}>
                    <div className={style.header_bloc__left}>
                        <h1>Réalisez votre potentiel en ligne</h1>
                        <p>Nous sommes l'agence à guichet unique qui vous aide à attirer les bons utilisateurs sur votre site, à vous assurer qu'ils vivent l'expérience pour laquelle ils sont venus et à les engager après leur visite. Votre entreprise ne peut que récolter les fruits.</p>
                        <Link href="/services">
                            <button>Nos services</button>
                        </Link>
                    </div>
                    <div className={style.header_bloc__right}>
                        <div className={style.image_animation}>
                            <Image src={landing}/>

                            {/*  <div className={style.tablette_image}>
                                <Image  src={tablette_med}/>
                            </div>
                            <div className={style.phone_image}>
                                <Image  src={phone_med}/>
                            </div>*/}



                        </div>

                    </div>
                </div>
            </div>
        </SpeedFadeIn>
    )
}