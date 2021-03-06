import style from '../../../styles/blocs/about_page/UsPictures.module.scss'
import fred from '../../../public/fred.jpg'
import greg from '../../../public/greg.jpg'
import max from '../../../public/maxence.jpg'
import nono from '../../../public/noemie.jpg'
import olivier from '../../../public/olivier.jpg'
import Image from 'next/image'
import FadeTranslateTopWhenVisible from "../../effects/FadeTranslateTopWhenVisible";

export default function UsPictures() {

    return (
        <div className={style.us_picture__container}>
            <div className={style.us_picture}>
                <h2>Nous</h2>
                <div className={style.us_picture__content}>


                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="fast">

                            <div className={style.item__content}>
                                <div className={style.us_picture__image}>
                                    <Image  lazyBoundary="500px" alt="Olivier Bouzon" height="508" width="425" src="/pokouweb/olivier_dtwddf_vgmi9h.webp"/>
                                </div>

                                <div className={style.us_picture__info}>
                                    <h3>Olivier Bouzon</h3>
                                    <p>Developpeur BackEnd / FrontEnd</p>

                                </div>
                            </div>


                        </FadeTranslateTopWhenVisible>

                    </div>


                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="middle">
                            <div className={style.item__content}>
                                <div className={style.us_picture__image}>
                                    <Image  lazyBoundary="500px" alt="Noémie Fournier" height="508" width="425" src="/pokouweb/noemiev2_thwu9p_bgyiab.webp"/>
                                </div>

                                <div className={style.us_picture__info}>
                                    <h3>Noémie Fournier</h3>
                                    <p>Designeuse - Experte Wordpress</p>

                                </div>
                            </div>

                        </FadeTranslateTopWhenVisible>

                    </div>

                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="slow">
                            <div className={style.item__content}>
                                <div className={style.us_picture__image}>
                                    <Image  lazyBoundary="500px" alt="Grégoire Renaldo" height="508" width="425" src="/pokouweb/greg_df7abe_gfwz9z.webp"/>
                                </div>

                                <div className={style.us_picture__info}>
                                    <h3>Grégoire Rénaldo</h3>
                                    <p>Developpeur BackEnd / FrontEnd</p>

                                </div>
                            </div>

                        </FadeTranslateTopWhenVisible>

                    </div>

                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="middle">
                            <div className={style.item__content}>
                                <div className={style.us_picture__image}>
                                    <Image  lazyBoundary="500px" alt="Frédéric Legrand" height="508" width="425" src="/pokouweb/fred_ler6hf_krfdrj.webp"/>
                                </div>

                                <div className={style.us_picture__info}>
                                    <h3>Frédéric Legrand</h3>
                                    <p>Developpeur - Responsable SEO </p>

                                </div>
                            </div>

                        </FadeTranslateTopWhenVisible>

                    </div>






                    <div className={style.us_picture__items}>
                        <FadeTranslateTopWhenVisible tresholdOption={0} customStartDistance="custom_nous_picture" animation="slow">
                            <div className={style.item__content}>
                                <div className={style.us_picture__image}>
                                    <Image  lazyBoundary="500px" alt="Maxence Pautre" height="508" width="425" src="/pokouweb/maxence_wcuuuf_shdd5g.webp"/>
                                </div>

                                <div className={style.us_picture__info}>
                                    <h3>Maxence Pautre</h3>
                                    <p>Developpeur - Expert Bubble</p>

                                </div>
                            </div>

                        </FadeTranslateTopWhenVisible>

                    </div>


                </div>
            </div>


        </div>
    )
}