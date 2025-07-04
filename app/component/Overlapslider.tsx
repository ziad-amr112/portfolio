"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MaxWidthWrapper from "./MaxWidthWrapper";
import InfinteTitle from "./InfinteTitle";
import { useEffect, useState } from "react";
import { Project } from "../constants";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { TypographyH2 } from "./TypoGraphy";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type SwiperType from "swiper";
import ProjectDescription from "./ProjectDescription";

export const Slider = ({
  title,
  types,
  height = "h-96",
  slidesPerView = 3,
  spaceBetween = 50,
  autoplay = 2000,
  loop = true,
}: {
  title: React.ReactNode;
  types: {
    category: string;
    items: Project[];
  }[];
  height?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: number;
  loop?: boolean;
}) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".appear", { opacity: 0 }, { opacity: 1, duration: 1 });
    });
    return () => ctx.revert();
  }, [currentTab]);

  return (
    <section id="projects">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <InfinteTitle className="text-3xl sm:text-4xl lg:text-6xl !text-main font-semibold" text={title} />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-3">
            <div className="flex gap-2 sm:gap-4 items-center flex-wrap">
              {types.map((t, i) => (
                <div
                  onClick={() => {
                    setCurrentProject(null);
                    setCurrentTab(i);
                  }}
                  className={`${
                    currentTab === i
                      ? "text-black dark:text-white border-main"
                      : "text-gray-400 opacity-80 border-gray-400"
                  } cursor-pointer hover:opacity-60 duration-200 py-2 px-4 text-xs rounded-full border`}
                  key={i}
                >
                  {t.category}
                </div>
              ))}
            </div>
            {!currentProject && (
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <Button onClick={() => swiper?.slidePrev()} variant={"outline"} className="rounded-full p-2">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button onClick={() => swiper?.slideNext()} variant={"outline"} className="rounded-full p-2">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
        {currentProject !== null ? (
          <ProjectDescription
            moveback={() => setCurrentProject(null)}
            project={types[currentTab].items[currentProject]}
          />
        ) : (
         <Swiper
  onSwiper={(swiper) => setSwiper(swiper)}
  modules={[Autoplay]}
  autoplay={autoplay !== 0 ? { delay: autoplay } : false}
  loop={loop}
  spaceBetween={spaceBetween}
  className="appear mt-8"
  slidesPerView={2} 
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2, 
      spaceBetween: spaceBetween,
    },
  }}
> 
            {types[currentTab].items.map((item, i) => (
              <SwiperSlide onClick={() => setCurrentProject(i)} key={i}>
<div
  className="
    w-full block relative rounded-xl overflow-hidden shadow-md
    h-[38vh] sm:h-[48vh] md:h-[56vh] lg:h-[60vh] xl:h-[60vh]">
        {Array.isArray(item.img) ? (
                    <ImageSlider images={item.img} isActive={true} />
                  ) : (
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  )}
                </div>
                <TypographyH2 className="lg:text-lg text-sm mt-2 text-muted-foreground text-center">
                  {item.title}
                </TypographyH2>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </MaxWidthWrapper>
    </section>
  );
};
export default Slider;