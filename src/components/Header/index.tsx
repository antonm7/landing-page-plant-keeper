import leftStar from '/header/leftStar.png'
import rightStar from '/header/rightStar.png'
import one from '/header/one.png'
import two from '/header/two.png'
import tabs from '/header/tabs.png'
import phone from '/header/phone.png'
import bottom from '/header/bottom.jpg'
import styles from './index.module.scss'
import { useRef, useLayoutEffect, useState } from 'react'

import gsap from 'gsap'

export default function Header() {
    const leftFlower = useRef(null)
    const rightFlower = useRef(null); 
    const tabsRef = useRef(null); 
    const phoneRef = useRef(null); 

    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleImagesLoaded = () => {
        setImagesLoaded(true);
    };

    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.fromTo(leftFlower.current,{
            x:'-165%',
            rotation:25
        },{
            x:'-174%',
            rotation:0,
            duration:0.8
        },0)

        tl.fromTo(rightFlower.current,{
            x:'0%',
            rotation:-25

        },{
            x:'22%',
            rotation:0,
            duration:0.8
        },0)

        tl.fromTo(tabsRef.current,{
           y:'20rem',
           translateX:'-114%',
        },{
            y:'17.6rem',
            translateX:'-114%',
            duration:0.8
        },0)
        tl.fromTo(phoneRef.current,{
            y:'6rem',
            translateX:'-50%',
         },{
             y:'4rem',
             translateX:'-50%',
             duration:0.8
         },0)
    }, []);
    
    return (
        <div className="text-center pt-16 overflow-hidden">
            <h1 className="font-main font-black text-black text-7xl px-8">Keep your plants alive</h1>
            <p className=" font-secondary text-grayText font-normal text-base max-w-[23rem] m-auto pt-4">Individual care schedule and reminders for your plants, recommendations, step by step guides, identification, light meter and more.</p>
            
            <div className={`relative ${!imagesLoaded ? 'opacity-0' : 'opacity-100'}`} id={styles.images_wrapper}>
                <img
                    src={bottom}
                    id={styles.bottom}
                    onLoad={handleImagesLoaded}
                />
                <img
                    src={phone}
                    id={styles.phone}
                    ref={phoneRef}
                    onLoad={handleImagesLoaded}
                />
                <img
                    src={tabs}
                    ref={tabsRef}
                    id={styles.tabs}
                    onLoad={handleImagesLoaded}
                />
                <img
                    src={two}
                    ref={rightFlower}
                    id={styles.two}
                    onLoad={handleImagesLoaded}
                />
                <img
                    src={one}
                    ref={leftFlower}
                    id={styles.one}
                    onLoad={handleImagesLoaded}
                />
                <img src={rightStar} id={styles.rightStar} onLoad={handleImagesLoaded} />
                <img src={leftStar} id={styles.leftStar} onLoad={handleImagesLoaded} />

       
            </div>
            
        </div>
    )
}