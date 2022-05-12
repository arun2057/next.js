import { Swiper, SwiperSlide } from "swiper/react";
import LargeAvatar from "../avatar/large/LargeAvatar";
import styles from "./Story.module.css";
import "swiper/css";

const Story = () => {
  return (
    <div className={styles.story__section}>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 5,
            marginLeft: 5,
          },

          768: {
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        spaceBetween={1}

        // slidesPerView={8}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.single__avatar}>
            <LargeAvatar size={"4x"} />
            <span className={styles.avatar__name}>martini rond</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Story;
