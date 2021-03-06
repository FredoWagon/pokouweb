import style from '../../../styles/blocs/service_ecommerce/mainInfoBloc.module.scss'
import Image from "next/image";
import webAppIllu from '../../../public/webapp_pic.jpg'
import placeholder from '../../../public/testmock.png'
import Link from "next/link";


export default function DeveloppementMainInfo() {

    return (
        <>
            <div className={style.main_info__container}>

                <div className={style.main__info}>
                    <div className={ `${style.text_info__container} ${style.developpement__text_info}`}>

                        <div className={style.text__bloc}>
                            <h2 className={style.developpement__big_title}>Notre politique de développement</h2>
                            <p className={style.developpement__big_text}>La sécurité, la convivialité et la fonctionnalité sont toujours au cœur de nos activités. Nous travaillons en équipe pour créer des services en ligne soignés et stables. Nous avons de l'expérience dans un grand nombre de projets différents, et nous sommes toujours prêts à relever de nouveaux défis.</p>

                        </div>

                        <div className={style.text__bloc}>
                            <h2 className={style.developpement__middle_title}>Au service des besoins de votre entreprise</h2>
                         <p>Vos besoins individuels sont importants pour nous. Notre technologie Everblox exclusive permet aux sites Web d'être personnalisés bien au-delà des systèmes de gestion de contenu traditionnels. La créativité des producteurs de contenu est libérée lorsqu'ils sont libres de personnaliser la plate-forme tout en conservant une cohérence visuelle et des performances stables.</p>
                        </div>
                        <div className={style.text__bloc}>
                            <h2 className={style.developpement__middle_title}>Performances stables</h2>
                            <p>La sécurité et la stabilité du service sont importantes pour nous. Nous créons des sites et des services qui fonctionnent de manière transparente, protégeons vos données et évoluons avec le monde en constante évolution du monde en ligne. Nous évaluons constamment l'état de votre site pour le maintenir stable et fonctionnel.</p>
                        </div>
                    </div>


                </div>



            </div>
            <div className={style.main_info__container__green}>

            </div>

        </>



    )
}