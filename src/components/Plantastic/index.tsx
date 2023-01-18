import plant from '/plantastic/plant.svg'
import AppStore from '/general/app_store.png'
import GooglePlay from '/general/google_play.png'
import styles from './index.module.scss'

export default function Plantastic() {
    return (
        <div className="responsive_wrapper w-full pt-44">
            <div className='flex justify-between px-32 bg-[#C7F54D]' id={styles.green_wrapper} style={{borderRadius:'40px'}}>
                <div className='py-20' id={styles.container}>
                    <h1 className='text-black font-main font-black text-6xl'>
                        Make your leafy <br />
                        friends feel PLANTastic
                    </h1>
                    <p className='text-grayText font-secondary text-xl font-normal pt-4 pb-8'>Grow your plant care skills with Plant: identify plants and learn how <br />to care for them with ease!</p>
                    <div className='flex items-center w-[288px]' id={styles.images_wrapper}>
                        <img alt="App Store" className='mr-6' src={AppStore}/>
                        <img alt="Google Play" src={GooglePlay}/>
                    </div>
                </div>
                <div id={styles.plant_img_wrapper}>
                    <img src={plant} id={styles.plant_img}/>
                </div>
            </div>
        </div>
    )
}