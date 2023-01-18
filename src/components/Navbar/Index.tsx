import Logo from '/general/logo.svg'
import AppStore from '/general/app_store.png'
import GooglePlay from '/general/google_play.png'
import styles from './index.module.scss'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between pt-5 responsive_wrapper' id={styles.wrapper}>
            <div className='flex items-center w-[288px]'>
                <img src={Logo} alt="Logo" />
                <h4 className='text-black font-main text-base font-black pl-2'>Keeper</h4>
            </div>
            <div className='items-center whitespace-nowrap flex' id={styles.links}>
                <p className='text-black font-secondary text-sm font-normal'>About</p>
                <p className='text-black font-secondary text-sm font-normal px-10'>How it works</p>
                <p className='text-black font-secondary text-sm font-normal pr-10'>Download</p>
                <p className='text-black font-secondary text-sm font-normal'>Get in touch</p>
            </div>
            <p className='text-black font-secondary text-sm font-normal hidden' id={styles.menu}>Menu</p>
            <div className='flex items-center w-[288px]' id={styles.images_wrapper}>
                <img alt="App Store" className='mr-6' src={AppStore}/>
                <img alt="Google Play" src={GooglePlay}/>
            </div>
        </div>
    )
}