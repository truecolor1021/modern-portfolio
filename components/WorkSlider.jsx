import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/5.png",
          link: "https://github.com/truecolor1021/nextjs-finalchapter-monster",
        },
        {
          title: "title",
          path: "/6.png",
          link: "https://github.com/truecolor1021/animation-todoapp",
        },
        {
          title: "title",
          path: "/2.png",
          link: "https://splashsports.com/#availability",
        },
        {
          title: "title",
          path: "/Screenshot 2024-10-09 090246.png",
          link: "https://www.foodondeal.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/screencapture-thestonecollection-2019-01-30-09_40_58.png",
          link: "https://www.thestonecollection.com",
        },
        {
          title: "title",
          path: "/Screenshot 2024-10-09 091116.png",
          link: "https://www.seabreezechios.com",
        },
        {
          title: "title",
          path: "/Screenshot 2024-10-09 091411.png",
          link: "https://www.nhsmun.nyc",
        },
        {
          title: "title",
          path: "/Screenshot 2024-10-09 091611.png",
          link: "http://",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
