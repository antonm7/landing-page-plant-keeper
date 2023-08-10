import flower from '/care/flower.png'
import phone from '/care/phone.svg'
import box from '/care/box.svg'
import styles from './index.module.scss'
import StyledButton from '../Common/StyledButton'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Care() {
    const wrapper = useRef(null)
    const boxRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:wrapper.current,
                start:"-=500",
                end: "+=900",
                scrub:true
            }
        })
        tl.fromTo(boxRef.current,
            {scale:0,transform:'translateX(15%)'},
            {scale:1,transform:'translateX(15%)'}
        )
    },[])

    return (
        <div className='min-h-[960px] flex bg-[#F8F8F8] overflow-hidden' ref={wrapper} id={styles.wrapper}>
            <div className='w-2/4 pt-60' id={styles.container_wrapper}>
                <div id={styles.container}>
                    <h4 className='text-xl text-grayText font-bold font-secondary'>Light meter</h4>
                    <h2 className='pt-4 font-black text-7xl text-black font-main'>Taking proper care of plants</h2>
                    <p className='pb-10 pt-4 text-lg text-grayText font-secondary'>Would you like to put a plant in a bathroom without windows? Some plants prefer shade and some are sun-lovers. Get to know which plants are suitable in your home based on the different light conditions.</p>
                    <StyledButton title="Get the app"/>            
                </div>
            </div>
            <div className='w-2/4 relative pt-32' id={styles.images_wrapper}>
                <img src={box}  className=" absolute z-20" ref={boxRef} id={styles.box}/>
                <img src={phone} className="absolute z-10 scale-100" id={styles.phone}/>
                <img src={flower} className="absolute z-10 scale-100" id={styles.flower}/>
            </div>
        </div>
    )
}