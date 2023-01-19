import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './index.module.scss'

import one from '/users/one.svg'
import two from '/users/two.svg'
import three from '/users/three.svg'
import four from '/users/four.svg'
import five from '/users/one.svg'
import stars from '/users/stars.svg'
import Comment from "../Common/Comment";

const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1.7
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1
          }
        }
    ]
  };

export default function Carousel() {
    return (
        <Slider {...settings} className={styles.slider}>
            <Comment img={one} title={'Best plant app for plant lovers!'} paragraph={"I love the watering reminders. Plant notification is thorough and extensive! Me and my plant bbs are very happy!!!!"} name={"Jenny Wilson"} stars={stars} />
            <Comment img={two} title={'This is the ULTIMATE plant care app'} paragraph={"It's the ideal plant tracker, especially for new plant parents. It helps me by providing a basic plant care schedule for each..."} name={"Kristin Watson"} stars={stars} />
            <Comment img={three} title={'Wow, this is cool and easy!'} paragraph={"I am a new gardener. I've been hoping to find an app like this where I can find all the details to care for specific plants."} name={"Savannah Nguyen"} stars={stars} />
            <Comment img={four} title={'Totally amazing'} paragraph={'I have not used this app for long but my plants are looking much better and I am not stressing about when to water and feed them'} name={"Esther Howard"} stars={stars} />
            <Comment img={five} title={'Really cute and helpful so far!!!'} paragraph={"I love the interface and the aesthetic of this app. It's so calming and easy to use, really makes me feel like a proper Plant Mom."} name={"Dianne Russell"} stars={stars} />
        </Slider>
    );
}