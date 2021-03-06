import {InView, useInView} from "react-intersection-observer";
import {useCallback, useEffect, useRef} from "react";
import style from "../../styles/effects/fadeTranslateTopWhenVisible.module.scss"

export default function FadeTranslateTopWhenVisible(props) {


    const option = {
        slow: style.slow_entering,
        middle: style.middle_entering,
        fast: style.fast_entering,
        middle_mark_saumon: style.middle_entering_with_saumon_mark,
        middle_mark_bleu: style.middle_entering_with_blue_mark,
        custom_nous_picture: style.custom_nous_picture,
        middle_mark_green: style.middle_entering_with_green_mark

    }




    return (



    <InView threshold={props.tresholdOption || 0} triggerOnce={props.triggerOnceOption || true}>
        {({ inView, ref, entry }) => (
            <div ref={ref} className={` ${props.customStartDistance ? option[props.customStartDistance] : ""}  ${style.beforeEnteringStyle} ${inView ? option[props.animation] : ""}  `}>
                {props.children}
            </div>
        )}
    </InView>



    )
}