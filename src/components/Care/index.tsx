import flower from '/care/flower.png'
import phone from '/care/phone.svg'
import box from '/care/box.svg'
import styles from './index.module.scss'
import StyledButton from '../Common/StyledButton'

export default function Care() {
    return (
        <div className='min-h-[960px] flex bg-[#F8F8F8]'>
            <div className='w-2/4 pt-60' id={styles.container}>
                <div id={styles.container}>
                    <h4 className='text-xl text-grayText font-bold font-secondary'>Light meter</h4>
                    <h2 className='pt-4 font-black text-7xl text-black font-main'>Taking proper care of plants</h2>
                    <p className='pb-10 pt-4 text-lg text-grayText font-secondary'>Would you like to put a plant in a bathroom without windows? Some plants prefer shade and some are sun-lovers. Get to know which plants are suitable in your home based on the different light conditions.</p>
                    <StyledButton title="Get the app"/>            
                </div>
            </div>
            <div className='w-2/4 relative pt-32'>
                <img src={box}  className=" absolute z-20 scale-100" id={styles.box}/>
                <img src={phone} className="absolute z-10 scale-100" id={styles.phone}/>
                <img src={flower} className="absolute z-10 scale-100" id={styles.flower}/>
            </div>
        </div>
    )
}