"use client";

import Text from "../Text";

const CompanyInfo = () => {
  return (
    <div
      className=""
      style={{
        background: "linear-gradient(to right, #eff2f4 42%, white 42%)",
      }}
    >
      {/* About Us Section */}
      <section className="mb-16  container mx-auto">
        <h2 className="lg:text-4xl sm:text-sm md:text-lg w-[calc(50%-12rem)] pb-3 border-b-2 border-blue-800 text-blue-800 font-bold mb-4 pt-5">
          ABOUT US
        </h2>
        <Text class="text-gray-700 mb-8">
          SUNGJIN is a fully integrated manufacturer of both household and
          industrial hand protection. We work with the very latest in
          technological advancements with a renewed focus on creativity and
          innovation.
        </Text>

        {/* Factory Information Section */}
        <div className="flex gap-6">
          {/* Korea Factory */}
          <div className="flex w-1/2 flex-col ">
            <img
              src="/images/SJ-03.jpg"
              alt="Korea Factory"
              className="rounded-lg mb-4 border-blue-600 border-[1px] h-[200px] md:h-[450px]"
            />
            <h3 className="lg:text2xl sm:text-sm md:text-lg w-[calc(100%-4rem)] font-medium text-blue-600">
              HQ/KOREA FACTORY
            </h3>
            <Text class="text-gray-700 w-[calc(100%-4rem)]">
              149 Chungui-Ro, Uijeongbu-Si, Gyeonggi-Do, 11787, R.Korea
              <br />
              T: +82-31-852-0560/0570
              <br />
              e-mail: nice@niceglove.com
            </Text>
          </div>

          {/* Vietnam Factory */}
          <div className="flex flex-auto flex-col">
            <img
              src="/images/SJ-03.jpg"
              alt="Korea Factory"
              className="rounded-lg mb-4 border-orange-600 border-[1px] h-[200px] md:h-[450px]"
            />
            <h3 className="llg:text2xl sm:text-sm md:text-lg text-orange-600 font-medium">
              VIETNAM FACTORY
            </h3>
            <Text class="text-gray-700">
              Ngoc Son Industrial Zone, Ngoc Son Commune,
              <br />
              Tu Ky District, Hai Duong province, Vietnam
              <br />
              T: +84 (0220) 3624 600
              <br />
              e-mail: sungjin_vina@niceglove.com
            </Text>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto">
        <h2 className="lg:text-4xl sm:text-sm md:text-lg font-bold w-[calc(50%-12rem)] pb-3 border-b-2 border-orange-600 text-orange-600 mb-4">
          PRODUCT
        </h2>
        <Text className="text-gray-700">
          SUNGJIN offers a wide range of hand solutions for each automotive
          manufacturing process. We do protect not only your hands but also your
          products.
        </Text>
        <div className="flex flex-wrap justify-around">
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-01.png"
              alt="Korea Factory"
              className="rounded-[50%] bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">ESD</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-02.png"
              alt="Korea Factory"
              className="rounded-[50%]  bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">NBR COATING</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-09.png"
              alt="Korea Factory"
              className="rounded-[50%] bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">NYLON PU</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-10.png"
              alt="Korea Factory"
              className="rounded-[50%] bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">COTTON</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-10.png"
              alt="Korea Factory"
              className="rounded-[50%] bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">LATEX COATING</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-10.png"
              alt="Korea Factory"
              className="rounded-[50%] bg-white h-32 w-32 mb-4 border-gray-300 border-[1px]"
            />
            <Text class="w-32 text-center">EMBOSSING</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-03.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4 mb-4"
            />
            <Text class="w-32 text-center">CUT RESISTANT</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-04.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">PERFORMANCE</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5  flex flex-col items-center justify-center">
            <img
              src="/images/SJW-05.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">NYLON</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5  flex flex-col items-center justify-center">
            <img
              src="/images/SJW-08.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">CUSTOMER</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-07.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">PRODUCT</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-06.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">PRODUCT</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-08.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text class="w-32 text-center">PRODUCT</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-07.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px]  mb-4"
            />
            <Text>PRODUCT</Text>
          </div>
          <div className="w-full sm:w-[30%] py-2 md:w-1/3 lg:w-1/5 xl:w-1/5 flex flex-col items-center justify-center">
            <img
              src="/images/SJW-06.png"
              alt="Korea Factory"
              className="rounded-[50%] h-32 w-32  border-gray-300 border-[1px] mb-4"
            />
            <Text class="w-32 text-center">PRODUCT</Text>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;
