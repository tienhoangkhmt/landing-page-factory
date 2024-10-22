"use client";
import Layout from "@/components/Layout";
import Headers from "@/components/Header";
import Text from "@/components/Text";
import MenuFooter from "@/components/Footer/menuFooter";
import CopyRight from "@/components/Footer/copyRight";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  const value = id ?? "Overview";
  const array = Array.from("fooaewrwerwe");

  return (
    <Layout>
      <Headers />
      <div className="container mt-3 h-[30rem] mx-auto">
        <img src="/images/SJ-03.jpg" className="h-full w-full" />
      </div>
      <div
        className="py-5 w-full"
        style={{
          background: "linear-gradient(to right, #eff2f4 42%, white 42%)",
        }}
      >
        <div className="container  mx-auto  flex">
          <section className="w-[40%]">
            <h2 className="lg:text-4xl h-[74px] capitalize sm:text-sm md:text-lg  pb-3 border-b-2 border-blue-800 text-blue-800 font-bold mb-4 pt-5">
              {value}
            </h2>
            <div className="mb-10">
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </Text>
              <Text>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.{" "}
              </Text>
            </div>
            <div className=" flex-wrap justify-between flex gap-10">
              <div className=" bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-32 sm:h-52 md:h-60 lg:h-72 xl:h-80"
                    src="/images/no-image.png"
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#f3f4f6]">
                  <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Image for illustration purposes only
                  </Text>
                </div>
              </div>
              <div className=" bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-32 sm:h-52 md:h-60 lg:h-72 xl:h-80"
                    src="/images/no-image.png"
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#f3f4f6]">
                  <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Image for illustration purposes only
                  </Text>
                </div>
              </div>
              <div className=" bg-white border w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-32 sm:h-52 md:h-60 lg:h-72 xl:h-80"
                    src="/images/no-image.png"
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#f3f4f6]">
                  <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Image for illustration purposes only
                  </Text>
                </div>
              </div>
            </div>
          </section>
          <section className="flex-auto">
            <h2 className="lg:text-4xl h-[73px] capitalize sm:text-sm md:text-lg font-bold "></h2>
            {array.map((_, k) => {
              return (
                <div
                  className={` ${
                    !k ? "border-t-[1px] border-b-[1px] " : "border-b-[1px]"
                  } py-5 ml-16  border-black`}
                >
                  <div>1991</div>
                  <Text>Established Brothers Gloves (Jongam-dong, Seoul)</Text>
                </div>
              );
            })}
          </section>
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
