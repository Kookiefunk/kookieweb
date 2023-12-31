import React from "react";
import useSWR from "swr";
import { WorksData } from "./api/get/works";
import GalleryImage from "../components/GalleryImage";
import Error from "next/error";
import createFetcher from "../helper/Fetcher";
import { Center, Loader } from "@mantine/core";
import Link from "next/link";

const works = () => {
    const { data, error, isLoading } = useSWR("/api/get/works", (url) =>
        createFetcher(url)
    );

    if (error)
        return <Error statusCode={404} title="Something going wrong here :(" />;
    if (isLoading)
        return (
            <Center className=" min-h-full">
                <Loader size={"xl"}></Loader>
            </Center>
        );

    const emptyView = (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">There's nothing here</h1>
                    <p className="py-6">
                        已乃僧忽他出，數日不返，探其篋笥，空空如也。
                    </p>
                    <Link href={"../"} className="btn btn-primary">
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );

    if (data instanceof Array) if (data.length <= 0) return emptyView;

    const compoment =
        data instanceof Array &&
        data.map((workData: WorksData) => {
            return (
                <div className="mx-auto px-4 mb-10" key={workData.section_name}>
                    <div className="pb-4 text-xs font-economica text-gray-500">
                        <h1>{workData.section_name}</h1>
                    </div>
                    <div className="p-2">
                        <div className="gap-y-2 gap-x-2 grid grid-cols-4 md:grid-cols-7 lg:flex lg:flex-wrap  p-2">
                            {workData.imgs.map((value) => {
                                return (
                                    <GalleryImage
                                        key={value.id}
                                        path={value.img}
                                        id={value.id.toString()}
                                        className="w-[100%] aspect-1 lg:w-[15%] lg:max-w-[90px] overflow-hidden"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        });

    return compoment ? <div className="mt-14 lg:ml-12">{compoment}</div> : emptyView;
};

export default works;
