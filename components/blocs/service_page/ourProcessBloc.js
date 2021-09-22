import Image from "next/image";
import conception from '../../../public/conception1.jpg'
import style from '../../../styles/blocs/service_page/ourProcessBloc.module.scss'
import concept from '../../../public/concept.png'
import develop from '../../../public/devellopement.png'
import search from '../../../public/search.png'
import launch from '../../../public/lancement.png'

export default function OurProcessBloc() {

    return (
        <div className={style.our_process__container}>
            <Image src={conception}/>
            <div className={style.our_process}>
                <h2>Notre processus</h2>
                <p>Travailler avec nous se fait sans effort et vous laisse plus de temps pour les choses importantes.</p>
                <div className={style.our_process__content}>

                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image src={search}/>
                        </div>
                        <h3>Recherche</h3>
                        <p>Nous examinons en profondeur votre organisation, votre entreprise et votre marque.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image src={develop}/>
                        </div>
                        <h3>Concept</h3>
                        <p>Nous formons une compréhension globale de votre entreprise et créons un concept mémorable avec vous.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image src={develop}/>
                        </div>
                        <h3>Design et développement</h3>
                        <p>Jouer, dessiner, concevoir et développer - ce sont les phases où les idées se transforment en un résultat final concret.</p>


                    </div>
                    <div className={style.our_process__items}>
                        <div className={style.our_process__image}>
                            <Image src={launch}/>
                        </div>
                        <h3>Lancement et assistance</h3>
                        <p>Après le déploiement du produit, nous suivons également les étapes du produit et vous fournissons une assistance continue.</p>


                    </div>


                </div>

            </div>
        </div>
    )
}