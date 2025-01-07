import { Center } from "@mantine/core";
import React from "react";
import TutorialElement from "../components/TutorialElement";
import Link from "next/link";
import Image from "next/image";

const course = () => {
    return (
        <div className="container mx-auto p-6 grid grid-rows-[auto_1fr_auto] lg:grid-cols-2 gap-4 drop-shadow-lg lg:mt-20">
            {/* 第一行，左右兩個元件 */}
            <div className="col-span-1 flex flex-col p-4 border-2 hover:border-primary bg-base-100">
                <TutorialElement
                    src="/course_l.png"
                    link="https://hahow.in/cr/kookiefunk2"
                    title=""
                    desc=""
                />
            </div>
            <div className="col-span-1 flex flex-col p-4 border-2 hover:border-primary bg-base-100">
                <TutorialElement
                    src="/course_r.png"
                    link="https://hahow.in/cr/kookiefunk"
                    title=""
                    desc=""
                />
            </div>

            {/* 第二行，文字居中 */}
            <div className="col-span-2 flex justify-center pt-6 text-gray-500">
                <p className="text-center text-xs mb-4 tracking-[0.28em] font-sans">
                    {"溫馨提醒："} <br />
                    {
                        "點擊此網頁的連結進入課程頁面後購買課程，可以幫助曲奇拿9成分潤。好人一生平安。"
                    }
                    <br />
                </p>
            </div>
 
            {/* 第三行，第三個元件 */}
            <div className="col-span-2 flex flex-col p-4 border-2 hover:border-primary bg-base-100">
            <Link href={"https://ancient-lentil-a04.notion.site/fcd9bcdd18234450bb7838205eab6fcd?pvs=4"} target="_blank">
            <div className="flex flex-col">
                <Image
                    src={"/guide.png"}
                    alt={""}
                    width="500"
                    height="500"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpeg"
                    className=" object-fill w-full"
                    priority={true}
                ></Image>
            </div>
        </Link>
            </div>
        </div>
    );
};
export default course;
