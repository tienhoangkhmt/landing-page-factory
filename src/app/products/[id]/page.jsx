"use client";
import { useState } from "react";
import Headers from "@/components/Header";
import Layout from "@/components/Layout";
import Text from "@/components/Text";
import MenuFooter from "@/components/Footer/menuFooter";
import CopyRight from "@/components/Footer/copyRight";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Page = () => {
  const mapPath = ["SJW-18.jpg", "SJW-19.jpg", "SJW-20.jpg"];

  const [selectImages, setSelectImage] = useState({
    key: 0,
    nameFile: mapPath[0],
  });

  return (
    <Layout>
      <Headers isMenu={false} />
      <div className="container gap-2 mx-auto flex">
        <div className="w-full h-[500px]">
          <img
            src={`/images/${selectImages.nameFile}`}
            className="h-full w-full "
            alt="detail-product"
          />
        </div>
        <div className=" h-[500px] flex flex-col gap-2">
          {mapPath.map((r, k) => (
            <div
              className="h-1/3 cursor-pointer"
              onClick={() => {
                setSelectImage((prev) => ({
                  ...prev,
                  key: k,
                  nameFile: r,
                }));
              }}
            >
              <img
                src={`/images/${r}`}
                className={`h-full ${
                  selectImages.key === k ? "" : "opacity-50"
                } `}
                alt="detail product"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full"
        style={{
          background: "linear-gradient(to right, #eff2f4 42%, white 42%)",
        }}
      >
        <div className="container mx-auto flex gap-20">
          <section className="w-[calc(40%)]">
            <h2 className="lg:text-4xl h-[84px] content-center sm:text-sm md:text-lg  pb-3 border-b-2 border-orange-600 text-orange-600 font-bold mb-4 pt-5">
              SANDY NBR
            </h2>
            <Text class="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </Text>
            <Text class="text-gray-700 mb-8">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </Text>
            <button>
              <img
                src="/images/SWJ-63.jpg"
                alt="download"
                className="rounded-3xl"
              />
            </button>
          </section>
          <section className="flex-auto max-w-[55%]">
            <article className="flex items-center justify-between lg:text-4xl sm:text-sm md:text-lg  pb-3 border-b-2 border-gray-300 text-orange-600 font-bold mb-4 pt-5">
              <h2>SJ990SD</h2>
              <div className="flex gap-3">
                <div>
                  <img
                    src="/images/SJW-21.jpg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/SJW-22.jpg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/SJW-23.jpg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/SJW-24.jpg"
                    className="h-[50px] w-[50px]"
                    alt=""
                  />
                </div>
              </div>
            </article>
            <article className="pb-4 border-b-2 border-gray-300">
              <h4>Product Code</h4>
              <Text>SJ301. SJ310</Text>
            </article>
            <div className="relative border-b-2 border-gray-300 overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs text-black uppercase dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      SIZE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      COLOR
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LENGTH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LENGTH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LENGTH
                    </th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-[#f2f2f2] [&>*:nth-child(even)]:bg-white">
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      6 / S
                    </th>
                    <td className="px-6 py-4">white</td>
                    <td className="px-6 py-4">21cm</td>
                    <td className="px-6 py-4">17cm</td>
                    <td className="px-6 py-4">7.2cm</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      7 / M
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">22cm</td>
                    <td className="px-6 py-4">19.5cm</td>
                    <td className="px-6 py-4">7.6cm</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      8 / L
                    </th>
                    <td className="px-6 py-4">white</td>
                    <td className="px-6 py-4">23cm</td>
                    <td className="px-6 py-4">20cm</td>
                    <td className="px-6 py-4">7.8cm</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      9 / XL
                    </th>
                    <td className="px-6 py-4">white</td>
                    <td className="px-6 py-4">25cm</td>
                    <td className="px-6 py-4">22cm</td>
                    <td className="px-6 py-4">8.5cm</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      10 / XXL
                    </th>
                    <td className="px-6 py-4">white</td>
                    <td className="px-6 py-4">26cm</td>
                    <td className="px-6 py-4">23cm</td>
                    <td className="px-6 py-4">9.2cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <article className="py-4 border-t-2 mt-3 border-b-2 border-gray-300">
              <h4>Product description</h4>
              <Text>
                A product with polyurethane coating on the fingertips of a glove
                knitted with carbon fiber. It has excellent anti-static effect,
                so it is a very suitable glove for semiconductor assembly work,
                LCD assembly, electronic product assembly, clean room, electric
                circuit work, and compact disk work. Since only the fingertips
                are coated, it is a product suitable for places that require
                precise and detailed work and work that requires protection of
                the human body and product from static electricity. It has
                excellent breathability, so it does not generate sweat, and it
                is comfortable to wear, so your hands do not get tired even if
                you wear it for a long time, and it is advantageous for
                precision work.
              </Text>
            </article>
            <article className="py-4 border-b-2 border-gray-300">
              <h4>Recommend Industries</h4>
              <Text>
                Automotive; Machinery & Equipment; Electronics; Construction;
                Transportation & Warehousing
              </Text>
            </article>
            <article className="py-4 border-b-2 border-gray-300">
              <h4>Material</h4>
              <Text>Liner: Nylon, Polyester, Polyurethane</Text>
              <Text>Coating: Polyurethane</Text>
            </article>
            <article className="py-4 border-b-2 border-gray-300">
              <h4>Product Features</h4>
              <ul>
                <li>Antistatic (Surface electrical resistance: 106Ω ~ 108Ω</li>
                <li>
                  Semiconductor assembly, LCD assembly, electronic poduct
                  assembly, clean room electrical circuit work, compact disk
                  work
                </li>
                <li>Precise and detailed work</li>
                <li>Excellent breathability, excellent wearing comfort</li>
              </ul>
            </article>
            <article className="py-4 border-b-2 border-gray-300">
              <h4>Care Instruction</h4>
              <ul>
                <li>
                  Do not use where there are chemical, electrical, thermal or
                  entanglement risks.
                </li>
                <li>
                  The performance levels apply to the coated surface only.
                </li>
                <li>Wash at 400C max.</li>
                <li>No change in performance after 3 wash cycles.</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <div className="min-h-72 mt-5 py-5 bg-[#eff2f4] ">
        <div className="w-2/3 mx-auto ">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper h-full bg-[#eff2f4]"
          >
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border  rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg  border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg  border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border  rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg  border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg shadow-lg">
              <div className="w-full bg-white border rounded-lg  border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <h4 className="lg:text-xl sm:text-sm md:text-lg ml-5 pb-3  text-orange-600 font-bold mb-4 pt-5">
                  No: SJ300
                </h4>
                <a href="#">
                  <img
                    className="rounded-t-lg h-[150px] w-[150px] mx-auto"
                    src="/images/SJW-28.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 border-t-[1px] border-gray-500 mt-3">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Carbon Pu Palm Esd Glove
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer className="w-full">
        <MenuFooter />
        <CopyRight />
      </footer>
    </Layout>
  );
};

export default Page;
