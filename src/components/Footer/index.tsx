import Logo from '/general/logo.svg'
import styles from './index.module.scss'
import facebook from '/footer/facebook.svg'
import instagram from '/footer/instagram.svg'
import tiktok from '/footer/tiktok.svg'
import twitter from '/footer/twitter.svg'

export default function Footer() {
    return (
        <div className="bg-black responsive_wrapper py-10 mt-40">
            <div className="text-white flex flex-wrap justify-between" id={styles.container}>
                <div className="flex flex-col justify-between" id={styles.logo_wrapper}>
                    <div className='flex items-center w-[288px]' id={styles.logo_container}>
                        <img src={Logo} alt="Logo" id={styles.logo}/>
                        <h4 className='text-white font-main text-base font-black pl-2'>Keeper</h4>
                    </div>
                    <div className='flex flex-nowrap' >
                        <img src={facebook} className="pr-5"/>
                        <img src={instagram} className="pr-5"/>
                        <img src={twitter} className="pr-5" />
                        <img src={tiktok} className="pr-5"/>
                    </div>
                </div>
                <div className={`flex flex-col justify-between ${styles.small}`}>
                    <h3 className='font-secondary text-base font-normal pb-6'>Navigation</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>About</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>How it work</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Contact</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Download</h3>
                    <h3 className='font-secondary text-base font-normal'>Get in touch</h3>
                </div>
                <div className={`flex flex-col justify-between ${styles.small}`}>
                    <h3 className='font-secondary text-base font-normal pb-6'>Help center</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Support</h3>
                    <h3 className='font-secondary text-base font-normal'>Send E-mail</h3>
                </div>
                <div className={`flex flex-col justify-between ${styles.small}`}>
                    <h3 className='font-secondary text-base font-normal pb-6'>Follow us</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Facebook</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Instagram</h3>
                    <h3 className='font-secondary text-base font-normal pb-4'>Twitter</h3>
                    <h3 className='font-secondary text-base font-normal'>TikTok</h3>
                </div>
            </div>
            <div className='flex pt-10'>
                <div className='w-2/4' id={styles.half}>

                </div>
                <div className='w-2/4 flex justify-between flex-wrap'  id={styles.footer_line}>
                    <h3 className='text-sm whitespace-nowrap font-regular font-secondary text-grayText'>Copyright © 2022 emote.agency</h3>
                    <div className='flex'>
                        <h3 className='text-sm font-regular font-secondary whitespace-nowrap text-grayText pr-10'>Privacy policy</h3>
                        <h3 className='text-sm font-regular font-secondary whitespace-nowrap text-grayText'>Terms conditions</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}