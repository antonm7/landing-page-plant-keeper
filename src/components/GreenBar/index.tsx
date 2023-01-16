import styles from './index.module.scss'
import one from '/greenBar/one.png'
import two from '/greenBar/two.png'
import three from '/greenBar/three.png'
import four from '/greenBar/four.png'

export default function GreenBar() {
    return (
        <div id={styles.wrapper} className="py-9 flex justify-center bg-greenBg ">
            <div className='px-16 py-3 text-center flex flex-col items-center'>
                <img src={one} className="h-24"/>
                <h3 className='font-main text-5xl font-black py-2'>350K</h3>
                <p className='font-secondary text-lg text-grayText'>plant species</p>
            </div>
            <div className='px-16 py-3 text-center flex flex-col items-center'>
                <img src={two} className="h-24"/>
                <h3 className='font-main text-5xl font-black py-2'>10k+</h3>
                <p className='font-secondary text-lg text-grayText'>plant recognations</p>
            </div>
            <div className='px-16 py-3 text-center flex flex-col items-center'>
                <img src={three} className="h-24"/>
                <h3 className='font-main text-5xl font-black py-2'>700+</h3>
                <p className='font-secondary text-lg text-grayText'>insect recognition</p>
            </div>
            <div className='px-16 py-3 text-center flex flex-col items-center'>
                <img src={four} className="h-24"/>
                <h3 className='font-main text-5xl font-black py-2'>950k+</h3>
                <p className='font-secondary text-lg text-grayText'>saved plants</p>
            </div>

        </div>
    )
}