"use client";
import ScrollTimeline from "@/components/ScrollTimeline";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Headers from "@/components/Header";
import CopyRight from "@/components/Footer/copyRight";
import MenuFooter from "@/components/Footer/menuFooter";
import CompanyInfo from "@/components/HomeContent";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Headers isMenu={false} />
      <div className="h-[500px] mt-3">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="">
            <iframe
              id="myvideo"
              // frameBorder="0"
              // allowfullscreen="full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="1"
              width="120%"
              height="120%"
              src="https://www.youtube.com/embed/ALNnp_EAmCI?autoplay=1&amp;vq=720&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;mute=1&amp;fs=1&amp;cc_load_policy=0&amp;iv_load_policy=3&amp;start=9&amp;end=39&amp;autohide=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fsungjininc.com&amp;widgetid=1"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600">
            <img
              src={`/images/SJW-17.jpg`}
              className="h-full w-full "
              alt="detail-product"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600">
            <img
              src={`/images/SJW-18.jpg`}
              className="h-full w-full "
              alt="detail-product"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600">
            <img
              src={`/images/SJW-19.jpg`}
              className="h-full w-full "
              alt="detail-product"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600">
            <img
              src={`/images/SJW-20.jpg`}
              className="h-full w-full "
              alt="detail-product"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-lime-600">
            <img
              src={`/images/SJW-21.jpg`}
              className="h-full w-full "
              alt="detail-product"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        // width={180}
        // height={38}
        priority
        fill
      /> */}

      <div className="my-5">
        <CompanyInfo />
      </div>
      {/*       
      <div className="flex flex-wrap py-8 gap-4 mx-auto container">
        <div className="flex flex-auto justify-center items-center bg-orange-500 text-white text-2xl font-bold w-[30%] h-48">
          BEST GLOVE
        </div>

        <div className="flex flex-auto flex-col border-2 border-gray-300 p-4 w-[30%] h-48">
          <p className="text-orange-500 font-bold">No: SJ300</p>
          <p className="text-sm">
            CARBON PU PALM
            <br />
            ESD GLOVE
          </p>
        </div>

        <div className="flex flex-auto flex-col border-2 border-gray-300 p-4 w-[30%] h-48">
          <p className="text-orange-500 font-bold">No: SJ301</p>
          <p className="text-sm">
            CARBON PU PALM
            <br />
            ESD GLOVE
          </p>
        </div>

        <div className="flex flex-auto justify-center items-center border-2 border-gray-300 w-[30%] h-48">
          <div className="text-center">
            <div className="text-blue-500 text-4xl mb-2">&#128100;</div>
            <p>CEO MESSAGE</p>
          </div>
        </div>

        <div className="flex flex-auto justify-center items-center border-2 border-gray-300 w-[30%] h-48">
          <div className="text-center">
            <div className="text-blue-500 text-4xl mb-2">&#128339;</div>
            <p>HISTORY</p>
          </div>
        </div>

        <div className="flex flex-auto justify-center items-center bg-blue-800 text-white text-xl font-bold w-[30%] h-48">
          COMPANY INFO
        </div>
      </div> */}

      <footer className="w-full">
        <MenuFooter />
        <CopyRight />
      </footer>
    </Layout>
  );
}
