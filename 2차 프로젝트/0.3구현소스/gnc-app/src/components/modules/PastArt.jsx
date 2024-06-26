import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// CSS 연결
import '../../css/pivot/pwork.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//////////////////////////////////////

export default function PastArt() {
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="SwiperArt"
        >
          <SwiperSlide className='p-art'>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
          <SwiperSlide>Slide 11</SwiperSlide>
          <SwiperSlide>Slide 12</SwiperSlide>
          <SwiperSlide>Slide 13</SwiperSlide>
          <SwiperSlide>Slide 14</SwiperSlide>
          <SwiperSlide>Slide 16</SwiperSlide>
          <SwiperSlide>Slide 17</SwiperSlide>
          <SwiperSlide>Slide 18</SwiperSlide>
          <SwiperSlide>Slide 19</SwiperSlide>
          <SwiperSlide>Slide 20</SwiperSlide>
          <SwiperSlide>Slide 21</SwiperSlide>
          <SwiperSlide>Slide 22</SwiperSlide>
          <SwiperSlide>Slide 23</SwiperSlide>
          <SwiperSlide>Slide 24</SwiperSlide>
          <SwiperSlide>Slide 25</SwiperSlide>
          <SwiperSlide>Slide 26</SwiperSlide>
        </Swiper>
      </>
    );
  }