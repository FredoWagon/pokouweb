import style from '../../../styles/blocs/service_siteweb/sitewebHeaderBloc.module.scss'
import Image from "next/image";
import test_illu from '../../../public/landing_illu.svg'
import Link from "next/link";
import SpeedFadeIn from "../../effects/SpeedFadeIn";

export default function DeveloppementHeaderBloc() {

    return (

        <div className={`${style.siteweb_header__container} ${style.green_background}`}>
            <SpeedFadeIn customClass="custom_webapp_header">
                <div className={style.siteweb_header}>
                    <div className={style.siteweb_header__left}>
                        <h1>développement web</h1>
                        <p>La conception est la première partie du projet, mais dans la phase de développement, le service en ligne commence à être intégré dans un tout concret.</p>

                        <Link href="/services">
                            <a>
                                <p>Demandez une offre</p>
                            </a>
                        </Link>
                    </div>
                    <div className={style.siteweb_header__right}>
                        <Image src={test_illu}/>

                    </div>


                </div>
            </SpeedFadeIn>
        </div>

    )
}