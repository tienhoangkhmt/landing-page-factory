"use client";

import CopyRight from "@/components/Footer/copyRight";
import MenuFooter from "@/components/Footer/menuFooter";
import Headers from "@/components/Header";
import Layout from "@/components/Layout";
import Text from "@/components/Text";
import { useRouter, useSearchParams } from "next/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";

function Page() {
  const [modules, setModules] = useState([Pagination]);
  const params = useSearchParams();
  const value = params.get("product-menu") ?? "Overview";

  const router = useRouter();

  const detailProduct = () => {
    router.push(`/products/1`);
  };

  return (
    <Layout>
      <Headers />
      <div className="h-[500px] mt-3">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full"
          mousewheel
        >
          <SwiperSlide className="">
            <video
              width="320"
              height="240"
              autoPlay
              muted
              loop
              className="h-full w-full"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
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

      <div className="mx-auto w-full ">
        <div>
          <div
            className="py-5 w-full"
            style={{
              background: "linear-gradient(to right, #eff2f4 42%, white 42%)",
            }}
          >
            <section className="mb-16 mx-auto container ">
              <h2 className="lg:text-4xl sm:text-sm md:text-lg w-[calc(42%)] pb-3 border-b-2 border-orange-600 text-orange-600 font-bold mb-4 pt-5">
                1 - ACTION
              </h2>
              <Text class="text-gray-700 mb-8">
                SUNGJIN is a fully integrated manufacturer of both household and
                industrial hand protection. We work with the very latest in
                technological advancements with a renewed focus on creativity
                and innovation.
              </Text>

              {/* Factory Information Section */}
              <div
                className="grid gap-8"
                style={{
                  gridTemplateColumns: "1fr 0.8fr",
                }}
              >
                {/* Korea Factory */}
                <div className="flex flex-col ">
                  <img
                    src="/images/SJ-03.jpg"
                    alt="Korea Factory"
                    className="rounded-lg  mb-4 border-orange-600 border-[1px]"
                  />
                </div>

                {/* Vietnam Factory */}
                <div className="flex justify-start flex-wrap items-start ">
                  <div
                    onClick={detailProduct}
                    className="w-full cursor-pointer sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className="py-5 mt-5 w-full"
            style={{
              background: "linear-gradient(to right, white 70%, #eff2f4 30%)",
            }}
          >
            <div className="flex container justify-between mx-auto">
              <div className="flex justify-start flex-wrap items-start">
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center">
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
                <div
                  onClick={detailProduct}
                  className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/SJW-01.png"
                    alt="Korea Factory"
                    className=" bg-white h-32 w-32 mb-4"
                  />
                  <Text>ESD</Text>
                </div>
              </div>
              <div className="flex flex-col w-[30%]">
                <h2 className="lg:text-4xl text-right sm:text-sm md:text-lg w-[calc(84%)] ml-auto pb-3 border-b-2 border-orange-600 text-orange-600 font-bold mb-4 pt-5">
                  2 - ACTION
                </h2>
                <Text class="text-gray-700 mb-8 w-[calc(84%)] ml-auto p-3 text-right">
                  Even though the stamping process and welding process are
                  mainly done by machines, humans do inspections after each
                  process.
                </Text>
                <img
                  src="/images/SJ-03.jpg"
                  alt="Korea Factory"
                  className="rounded-lg  mb-4 border-orange-600 border-[1px]"
                />
              </div>
            </div>
          </div>
          <div
            className="py-5 w-full"
            style={{
              background: "linear-gradient(to right, #eff2f4 42%, white 42%)",
            }}
          >
            <section className="mb-16 mx-auto container pl-6">
              <h2 className="lg:text-4xl sm:text-sm md:text-lg w-[calc(50%-0.75rem)] pb-3 border-b-2 border-orange-600 text-orange-600 font-bold mb-4 pt-5">
                3- ACTION
              </h2>
              <Text class="text-gray-700 mb-8 ">
                For better products, we will do our best!
              </Text>

              {/* Factory Information Section */}
              <div
                className="grid gap-8"
                style={{
                  gridTemplateColumns: "1fr 0.8fr",
                }}
              >
                {/* Korea Factory */}
                <div className="flex flex-col ">
                  <img
                    src="/images/SJ-03.jpg"
                    alt="Korea Factory"
                    className="rounded-lg  mb-4 border-orange-600 border-[1px]"
                  />
                </div>

                {/* Vietnam Factory */}
                <div className="flex justify-start flex-wrap items-start">
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div
                    onClick={detailProduct}
                    className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center">
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center">
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center">
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                  <div className="w-full sm:w-[30%] md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center justify-center">
                    <img
                      src="/images/SJW-01.png"
                      alt="Korea Factory"
                      className=" bg-white h-32 w-32 mb-4"
                    />
                    <Text>ESD</Text>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="w-full">
        <MenuFooter />
        <CopyRight />
      </footer>
    </Layout>
  );
}

export default Page;
