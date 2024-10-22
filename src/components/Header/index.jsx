"use client";

import { useEffect, useState } from "react";
import { menu } from "./utils";
import Link from "next/link";
import Flag from "react-world-flags";

const Headers = (props) => {
  const { isMenu = true } = props;
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    if (activeLink) {
      window.addEventListener("scroll", () => {
        setActiveLink(null);
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {
        setActiveLink(null);
      });
    };
  }, [activeLink]);

  return (
    <nav className=" bg-gray-100 h-[70px]">
      <div className="container mx-auto h-full flex justify-between items-center overflow-x-hidden">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Sungjin Glove"
              className="h-full"
            />
          </Link>
        </div>

        {/* Main Navigation Links */}

        {/* Language Section */}
        <div className="flex space-x-4 h-full items-center">
          <ul className="flex space-x-6 h-full text-sm font-medium text-gray-800">
            {menu.map((i) => (
              <li
                key={i.key}
                className="relative content-center cursor-pointer"
                onMouseEnter={() => setActiveLink(i.key)}
                onMouseLeave={() => setActiveLink(null)}
              >
                <Link
                  href={`/${i.key}`}
                  className={i.key === activeLink ? i.text : ""}
                >
                  {i.name}
                </Link>

                {isMenu && (
                  <>
                    {/* Arrow under link */}
                    <div
                      className={`absolute left-1/2 bottom-0 ${
                        i.key === activeLink
                          ? "border-l-8 border-r-8 border-b-8 border-transparent"
                          : ""
                      } transform -translate-x-1/2 w-0 h-0  ${i.bd} mt-1`}
                    ></div>

                    {/* Full-width Horizontal Sub-navigation */}
                    <div
                      className={`fixed top-[70px] ${
                        activeLink === i.key
                          ? "flex transition-opacity"
                          : "hidden"
                      }  h-[50px] items-center left-0 right-0 w-full ${
                        i.bg
                      } text-white z-10`}
                    >
                      <div className="container left-1/2 mx-auto flex justify-end">
                        {i.subMenu.map((r, k) => (
                          <a
                            href="#"
                            key={r}
                            className={`content-center hover:underline px-[9px] m-0 ${
                              !k
                                ? "border-l-[1px] border-r-[1px] "
                                : "border-r-[1px]"
                            }`}
                          >
                            {r}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="flex">
            <span className="text-sm  mr-2 content-center border-l-[1px] pl-2">
              Language
            </span>
            <div className="flex space-x-2 gap-2.5">
              <Flag
                height={35}
                width={35}
                code="VN"
                fallback={<span>Unknown</span>}
              />
              <Flag
                height={35}
                width={35}
                code="KR"
                fallback={<span>Unknown</span>}
              />
              <Flag
                height={35}
                width={35}
                code="US"
                fallback={<span>Unknown</span>}
              />
            </div>
          </div>
          <div className=" text-sm font-medium text-gray-800">
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
