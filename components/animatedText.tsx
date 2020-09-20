import style from '../styles/animatedText.module.scss'

export default function AnimatedText() {
    return (
        <section className={style['anim']}>
            <div className={style['anim__step1Container']}>
                <div className={style['anim__textContainer']}>
                    <h1 className={style['anim__text']}> Excel.</h1>
                    <div className={style['anim__text--overlay']}>Excel.</div>
                </div>
            </div>
            <div className={style['anim__step2Container']}>
                <div className={style['anim__textContainer']}>
                    <h1 className={style['anim__text']}>Dominate.</h1>
                    <div className={style['anim__text--overlay']}>Dominate.</div>
                </div>
            </div>
            <div className={style['anim__step3Container']}>
                <div className={style['anim__textContainer']}>
                    <h1 className={style['anim__text']}>Undetected.</h1>
                    <div className={style['anim__text--overlay']}>Undetected.</div>
                </div>
            </div>
        </section>
    );
}