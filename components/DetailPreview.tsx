import { Center, Image as MantineImage, Tabs } from "@mantine/core";
import { IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons";
import React from "react";
import { DetailLayout } from "./DetailLayout";
import GalleryImage from "./GalleryImage";
import { useState } from "react";

const DetailPreview = (props: {
    src: string;
    nailSrc: string;
    title: string;
    desc: string;
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const sectionItems = Array(20)
        .fill(0)
        .map((v, i) => i)
        .map((value, index) => {
            return (
                <GalleryImage
                    className={"h-[120px] w-[120px]"}
                    path={props.nailSrc}
                    id={index.toString()}
                />
            );
        });

    return (
        <div>
            <Tabs
                className="mb-8"
                defaultValue="desktop"
                onTabChange={(v) => {
                    const mobile = v == "mobile";
                    setIsMobile(mobile);
                }}
            >
                <Tabs.List>
                    <Tabs.Tab value="desktop">
                        <IconDeviceDesktop size={16} />
                    </Tabs.Tab>
                    <Tabs.Tab value="mobile">
                        <IconDeviceMobile size={16} />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
            {!isMobile && (
                <DetailLayout
                    image={props.src}
                    title={props.title ?? ""}
                    content={props.desc ?? ""}
                    otherSection={sectionItems}
                ></DetailLayout>
            )}
            {isMobile && (
                <Center>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-2 flex">
                                <div className="w-full flex flex-1 overflow-auto ">
                                    <DetailLayout
                                        mediaQuery="superbig"
                                        image={props.src}
                                        title={props.title ?? ""}
                                        content={props.desc ?? ""}
                                        otherSection={sectionItems}
                                    ></DetailLayout>
                                </div>
                            </div>
                        </div>
                    </div>
                </Center>
            )}
        </div>
    );
};

export default DetailPreview;
