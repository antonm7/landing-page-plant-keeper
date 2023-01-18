import box from '/grow/box.svg'
import phone from '/grow/phone.svg'
import calendar from '/grow/calendar.png'
import styles from './index.module.scss'
import StyledButton from '../Common/StyledButton'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Grow() {
    const wrapper = useRef(null)
    const boxRef = useRef(null)
    const calendarRef = useRef(null)
    
    // gsap.registerPlugin(ScrollTrigger)
    
    // useEffect(() => {

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //          trigger:wrapper.current,
    //          start:"-=600",
    //          end: "+=900",
    //          scrub:true
    //      }
    //     })
    //     tl.fromTo(boxRef.current,
    //         {scale:0,translateX:'-104%'},
    //         {scale:1,translateX:'-104%'}
    //     )
    // },[])

    return (
        <div className='min-h-[1000px] flex' ref={wrapper}>
            <div className='w-2/4 relative pt-44'>
                <img src={box} ref={boxRef} className=" absolute z-20 scale-100" id={styles.box}/>
                <img src={phone} className="absolute z-10 scale-100" id={styles.phone}/>
                <img src={calendar} className="absolute z-10 scale-100" id={styles.calendar}/>
            </div>
            <div className='w-2/4 pt-72 '>
                <div id={styles.container}>
                    <h4 className='text-xl text-grayText font-bold font-secondary'>Gardening schedule</h4>
                    <h2 className='pt-4 font-black text-7xl text-black font-main'>Grow organic edible plants</h2>
                    <p className='pb-10 pt-4 text-lg text-grayText font-secondary'>Plan your seeding season with a personalized planting schedule, and get additional care reminders for your edible garden. Keep track of your green friends.</p>
                    <StyledButton title="Get the app"/>            
                </div>
            </div>
        </div>
    )
}