"use client";

import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import type SwiperType from "swiper";

import MaxWidthWrapper from "./MaxWidthWrapper";
import InfinteTitle from "./InfinteTitle";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { TypographyH2 } from "./TypoGraphy";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectDescription from "./ProjectDescription";

import { Project } from "../constants";

interface SliderProps {
  title: React.ReactNode;
  types: {
    category: string;
    items: Project[];
  }[];
  spaceBetween?: number;
  autoplay?: number;
  loop?: boolean;
}

/**
 * Slider component to display a list of projects with categories and descriptions.
 * 
 * @param {React.ReactNode} title - The title of the slider.
 * @param {Array} types - An array of project categories with their items.
 * @param {number} spaceBetween - Space between slides in the swiper.
 * @param {number} autoplay - Autoplay delay for the swiper in milliseconds.
 * @param {boolean} loop - Determines if the swiper should loop.
 */
const Slider = ({
  title,
  types,
  spaceBetween = 50,
  autoplay = 2000,
  loop = true,
}: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState(0);

  /**
   * Handles tab click to change project category.
   * 
   * @param {number} index - The index of the tab.
   */
  const handleTabClick = useCallback(
    (index: number) => {
      setCurrentProject(null);
      setCurrentTab(index);
    },
    []
  );

  // GSAP animation effect for opacity transition on tab change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".appear", { opacity: 0 }, { opacity: 1, duration: 1 });
    });

    return () => {
      ctx.revert();
    };
  }, [currentTab]);

  // Function to navigate to the previous slide
  const slidePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  // Function to navigate to the next slide
  const slideNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  return (
    <section id="projects">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <InfinteTitle
            className="text-3xl sm:text-4xl lg:text-6xl !text-main font-semibold"
            text={title}
          />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-3">
            <div className="flex gap-2 sm:gap-4 items-center flex-wrap">
              {types.map((t, i) => (
                <div
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`cursor-pointer hover:opacity-60 duration-200 py-2 px-4 text-xs rounded-full border ${
                    currentTab === i
                      ? "text-black dark:text-white border-main"
                      : "text-gray-400 opacity-80 border-gray-400"
                  }`}
                >
                  {t.category}
                </div>
              ))}
            </div>
            {!currentProject && (
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <Button
                  onClick={slidePrev}
                  variant="outline"
                  className="rounded-full p-2"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={slideNext}
                  variant="outline"
                  className="rounded-full p-2"
                  aria-label="Next Slide"
                >
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
            onSwiper={setSwiper}
            modules={[Autoplay]}
            autoplay={autoplay !== 0 ? { delay: autoplay, disableOnInteraction: false } : false}
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
              <SwiperSlide
                key={i}
                onClick={() => setCurrentProject(i)}
                className="cursor-pointer"
              >
                <div
                  className="
                    w-full block relative rounded-xl overflow-hidden shadow-md
                    h-[38vh] sm:h-[48vh] md:h-[56vh] lg:h-[60vh] xl:h-[60vh]"
                >
                  {Array.isArray(item.img) ? (
                    <ImageSlider images={item.img} isActive={true} />
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={i === 0} 
                      placeholder="blur" 
                    />
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

