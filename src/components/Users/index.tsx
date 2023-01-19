import Carousel from '../Carousel'
import styles from './index.module.scss'

export default function Users() {
    return (
        <div className='pt-44 ' id={styles.wrapper}>
            <h1 className='text-center text-black font-main font-black text-7xl pb-16'>Our users say</h1>
            <div className='relative h-96' style={{paddingLeft:'10vw'}} id={styles.carousel_wrapper}>
                <Carousel />
            </div>
        </div>
    )
}