import leftStar from '/header/leftStar.png'
import rightStar from '/header/rightStar.png'
import one from '/header/one.png'
import two from '/header/two.png'
import tabs from '/header/tabs.svg'
import phone from '/header/phone.svg'
import styles from './index.module.scss'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
export default function Header() {
    // const comp = useRef(null); // create a ref for the root level element (we'll use it later)

    // useLayoutEffect(() => {
        
    //     gsap.fromTo(comp.current,{
    //         x:'-10rem'
    //     },{
    //         x:'2rem'
    //     })
    
  
  
    // }, []); //
    return (
        <div className="text-center pt-16">
            <h1 className="font-main font-black text-black text-7xl ">Keep your plants alive</h1>
            <p className=" font-secondary text-grayText font-normal text-base max-w-[23rem] m-auto pt-4">Individual care schedule and reminders for your plants, recommendations, step by step guides, identification, light meter and more.</p>
            <div className="relative" id={styles.images_wrapper}>
                <img src={phone} id={styles.phone}/>
                <img src={tabs} id={styles.tabs} />
                <img src={two} id={styles.two}/>
                <img src={one} id={styles.one}/>
                <img src={rightStar} id={styles.rightStar}/>
                <img src={leftStar} id={styles.leftStar}/>
            </div>
        </div>
    )
}