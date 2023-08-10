import box from '/identification/box.png'
import phone from '/identification/phone.svg'
import styles from './index.module.scss'
import StyledButton from '../Common/StyledButton'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Identification() {
    const wrapper = useRef(null)
    const boxRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:wrapper.current,
                start:"-=400",
                end: "+=900",
                scrub:true,
            }
        })
        tl.fromTo(boxRef.current,
            {scale:0,translateX:'-104%'},
            {scale:1,translateX:'-104%'}
        )
    },[])

    return (
        <div className='min-h-[1000px] flex overflow-hidden' ref={wrapper} id={styles.wrapper}>
            <div className='w-2/4 relative pt-44' id={styles.images_wrapper}>
                <img src={box} ref={boxRef} className=" absolute z-20 scale-100" id={styles.box}/>
                <img src={phone} className="absolute z-10 scale-100" id={styles.phone}/>
            </div>
            <div className='w-2/4 pt-72' id={styles.container_wrapper}>
                <div id={styles.container}>
                    <h4 className='text-xl text-grayText font-bold font-secondary'>Scan your plant</h4>
                    <h2 className='pt-4 font-black text-7xl text-black font-main'>Plant <br /> identification</h2>
                    <p className='pb-10 pt-4 text-lg text-grayText font-secondary'>Maybe you are not sure which plant you have? You can just take a picture of it and we will instantly let you know. With Plans plant scanner you can scan all your house plants to find out the plants name.</p>
                    <StyledButton title="Get the app"/>            
                </div>
            </div>
        </div>
    )
}