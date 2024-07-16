"use client";

import Image from "next/image";

const SlideShow = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <div
          id="default-carousel"
          className="relative my-[20px] mx-[15%]"
          data-carousel="static"
        >
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-black -translate-x-1/2 -translate-y-1/2 sm:text-3xl"></span>
              <Image
                src="https://placehold.co/600x400/png"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded"
                alt="Gambar 1"
                width={600}
                height={400}
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="https://placehold.co/600x400/png"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded"
                alt="Gambar 2"
                width={600}
                height={400}
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                src="https://placehold.co/600x400/png"
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded"
                alt="Gambar 3"
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="flex absolute bottom-12 md:bottom-8  left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Anterior</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 0 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden"></span>
            </span>
          </button>
        </div>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>
    </>
  );
};

export default SlideShow;
