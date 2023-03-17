import React from 'react'
import styles from "../style";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";
const items = [
    {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/id/1018/400/300',
    },
    {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
      {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
      {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
      {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
      {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
      {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://picsum.photos/id/1018/400/300',
      },
]

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Users = () => {
  return (
    <div className='md:my-8 my-0 relative pt-[50px] pb-64'>
        <div className={`${styles.paddingX} ${styles.flexStart} relative z-10`}>
            <div className={`${styles.boxWidth}`}>
                <section className={`container mx-auto py-8 md:px-9 h-full font-poppins`}>
                        <div className='text-white text-center pt-24'>
                            <p className='uppercase text-center font-semibold md:text-lg text-base text-[#E1DEF7] pb-4'>DON'T miss out on upcoming events</p>
                            <h2 className='md:text-6xl text-5xl font-bold'><span className='text-[#CD3242]'>ACTIVE</span> USERS</h2>
                            <Carousel 
                                responsive={responsive} className="mt-32 relative"
                                arrows
                                containerClass="container"
                                customLeftArrow={
                                  <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="absolute top-1/2 left-4 max-w-4 cursor-pointer text-primary-400"
                                  />
                                }
                                customRightArrow={
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    size="lg"
                                    className="absolute top-1/2 right-4 max-w-4 cursor-pointer text-primary-400"
                                  />
                                }
                                slidesToSlide={1}
                                swipeable
                            >
                                <div>Item 1</div>
                                <div>Item 2</div>
                                <div>Item 3</div>
                                <div>Item 4</div>
                                <div>Item 5</div>
                                <div>Item 5</div>
                            </Carousel>
                        </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Users