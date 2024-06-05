"use client";
import { CSSProperties } from "react";

import "swiper/css";
import SwiperWrapper from "../components/SwiperWrapper";
import Image from "next/image";

export default function Home() {
  const darkBlueColor = "#104d6c";
  const socialsStyle: CSSProperties = {
    textAlign: "center",
    color: darkBlueColor,
    fontWeight: "600",
  };
  const socialsClassName =
    "flex flex-col items-center max-md:text-[8px] text-[22px]";
  const myWorkImages: string[] = [];
  for (let i = 1; i <= 19; i++) {
    const imageName = `My-Work-${i}.jpg`;
    myWorkImages.push(imageName);
  }
  return (
    <div>
      <div className="relative">
        <img
          alt="image"
          src={`/images/BKG.jpg`}
          style={{
            objectFit: "contain",
          }}
        />
        <div className="absolute" style={{ top: 0 }}>
          <div className="" style={{ width: "100vw" }}>
            <div className="flex justify-center pt-4">
              <Image
                className="max-md:w-[60px] md:w-[200px]"
                src={"/images/TopLogo.png"}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  //
                  objectFit: "contain",
                  maxWidth: "60px",
                }}
              />
            </div>

            <Image
              className="pt-8"
              src="/images/Header.png"
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "75vw",
                height: "100%",
                //
                objectFit: "contain",
              }}
            />
            <div className="flex justify-center">
              <Image
                className="pt-8"
                src="/images/AboutMe.png"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "80vw",
                  height: "100%",
                  //
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="">
              <Image
                className="pt-2"
                src="/images/WhatYK.png"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "30vw",
                  height: "100%",
                  //
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="flex justify-center mt-[-2%]">
              <Image
                className=""
                src="/images/Iceberg.png"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "70vw",
                  height: "100%",
                  //
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="flex justify-end mt-[-20%]">
              <Image
                className=""
                src="/images/WhatYDK.png"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "30vw",
                  height: "100%",
                  //
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="pt-2"
            src="/images/MyWork.png"
            alt="image"
            width={0}
            height={0}
            sizes="80vw"
            priority
            style={{
              width: "80vw",
              height: "100%",
              //
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex mt-[-2%] justify-center">
          <Image
            className=""
            src="/images/Diamonds.png"
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "70vw",
              height: "100%",
              //
              objectFit: "contain",
            }}
          />
        </div>
        {/* swiper goes here */}
        <SwiperWrapper>
          {myWorkImages.map((image) => {
            return (
              <Image
                key={image}
                src={`/images/my-work/${image}`}
                className="swiper-lazy"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "95%",
                  height: "100%",
                  //
                  objectFit: "contain",
                }}
              />
            );
          })}
        </SwiperWrapper>
        <div className="flex justify-center">
          <Image
            className=""
            src="/images/ContactMe.png"
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "80vw",
              height: "100%",
              //
              objectFit: "contain",
            }}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-center">
            <Image
              className="py-2"
              src="/images/Ready.png"
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "30vw",
                height: "100%",
                //
                objectFit: "contain",
              }}
            />
          </div>
          <div className="mx-[10vw]">
            <div className="grid grid-cols-12">
              <div
                className="col-span-4 pr-3 "
                style={{ borderRight: `1px solid ${darkBlueColor}` }}
              >
                <Image
                  className=""
                  src="/images/Map.png"
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    //
                  }}
                />
                <div
                  className="max-md:text-[10px] md:text-[36px] max-md:leading-[11px] md:leading-[36px] pt-1"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: darkBlueColor,
                  }}
                >
                  Beirut , Lebanon
                </div>
              </div>
              <div
                className="col-span-4 flex flex-col items-center justify-between space-y-1"
                style={{ borderRight: `1px solid ${darkBlueColor}` }}
              >
                <div className={socialsClassName}>
                  <Image
                    className=""
                    src="/images/Insta.png"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    style={{
                      width: "18px",
                      height: "100%",
                      //
                    }}
                  />
                  <div style={socialsStyle}>@ramyfch</div>
                </div>

                <div className={socialsClassName}>
                  <Image
                    className=""
                    src="/images/Mail.png"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    style={{
                      width: "18px",
                      height: "100%",
                      //
                    }}
                  />

                  <div className="max-md:leading-[8px] md:leading-[22px]">
                    <div style={socialsStyle}>ramy_f_chrabieh</div>
                    <div style={socialsStyle}>@hotmail.com</div>
                  </div>
                </div>
                <div className={socialsClassName}>
                  <Image
                    className=""
                    src="/images/Phone.png"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    style={{
                      width: "18px",
                      height: "100%",
                      //
                    }}
                  />

                  <div style={socialsStyle}>+961 79 145 441</div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-around mx-2">
                <div
                  style={{
                    fontWeight: "600",
                    color: darkBlueColor,
                  }}
                  className="max-md:text-[12px] md:text-[48px] max-md:leading-[12px] md:leading-[48px]"
                >
                  LIKE WHAT YOU SEE?
                </div>
                <div className="flex items-center">
                  <div
                    className="max-md:text-[12px] md:text-[48px] max-md:leading-[12px] md:leading-[48px]"
                    style={{
                      color: darkBlueColor,
                    }}
                  >
                    Use this Glyph as a sign & email me!
                  </div>
                  <a
                    className="max-md:w-[40px] md:w-[250px]"
                    style={{ aspectRatio: 1 }}
                    href="mailto:ramy_f_chrabieh@hotmail.com"
                  >
                    <Image
                      className=""
                      src="/images/RedirectSquare.png"
                      alt="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority
                      style={{
                        width: "200px",
                        height: "100%",
                        //
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <Image
              className="py-2"
              src="/images/WhenYouAre.png"
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{
                width: "40vw",
                height: "100%",
                //
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
