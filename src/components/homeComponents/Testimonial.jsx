import { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
const Testimonial = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const [Testi, setTesti] = useState([]);
  const [playingVideos, setPlayingVideos] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/testiData.json")
      .then((response) => response.json())
      .then((data) => {
        {
          setTesti(data);
          setPlayingVideos(new Array(data.length).fill(false));
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    if (Testi.length > 0 && sliderRef.current) {
      if (keenSliderInstance.current) {
        keenSliderInstance.current.destroy();
      }
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 32,
            },
          },
        },
      });

      return () => {
        keenSliderInstance.current.destroy();
      };
    }
  }, [Testi]);

  // Handle play button click
  const handlePlay = (index) => {
    const updatedPlayingVideos = new Array(Testi.length).fill(false);
    updatedPlayingVideos[index] = true; // Only set the current video to playing
    setPlayingVideos(updatedPlayingVideos);
  };

  return (
    <div>
      <div className="lg:p-12 p-6 bg-white relative">
        <div className="max-w-6xl max-md:max-w-lg mx-auto">
          <div className="grid md:grid-cols-3 gap-4 lg:justify-center lg:items-center">
            {/* text */}
            <div className="col-span-2">
              <div className="flex justify-start items-center gap-4">
                <span className="bg-[#fc2e2e] block w-[10px] h-[10px] "></span>
                <h4 className="my-2 text-[#BD1F17] font-bold font-roboto">
                  Crispy, Every Bite Taste
                </h4>
              </div>
              <h2 className="text-black font-bebasNeue mb-10 mt-4 text-[2.5rem] w-[14rem] md:w-[22rem] lg:w-[27rem] lg:text-5xl font-bold uppercase">
                What our happy client say
              </h2>
            </div>

            {/* arrow button - Only visible on md screens and up */}
            <div className="hidden md:flex space-x-4 items-end justify-start md:justify-end md:items-center md:mt-6 ">
              <div
                onClick={() => keenSliderInstance.current.prev()}
                className="bg-gray-100 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer hover:bg-[#d8c6c6]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#070000] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => keenSliderInstance.current.next()}
                className="bg-gray-100 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer hover:bg-[#d8c6c6]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#df0b0b] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="my-4 ">
            <div className="max-w-6xl mx-auto ">
              <div ref={sliderRef} className="keen-slider">
                {Testi.map((item, index) => (
                  <div
                    key={index}
                    className=" keen-slider__slide border-e-red-600"
                  >
                    <div className="grid md:grid-cols-2 items-center flex-col-reverse md:flex-row ">
                      <div className="order-2 md:order-1 bg-[#FEBF00] py-[2.6rem] md:pb-[2rem] lg:pb-[4.3rem] lg:pt-[1.8rem] px-4 relative ">
                        <div className="max-w-[26rem]  mx-auto">
                          <div className="flex items-center mx-auto py-[3.7rem] md:pt-[1.1rem] max-w-md">
                            <p className="font-normal text-base font-roboto">
                              <img
                                src="/image/test.png"
                                alt="test"
                                className="my-2"
                              />
                              {item.description}
                            </p>
                          </div>
                          <div className="flex items-center rounded-3xl max-w-md my-7 gap-5">
                            <div className="mr-4">
                              <h4 className="text-gray-800 text-base font-bold">
                                {item.name}
                              </h4>
                              <p className="text-sm text-black mt-2">
                                {item.title}
                              </p>
                            </div>
                            <img
                              src="https://i.ibb.co.com/jDCdnQz/Img1.png"
                              className="w-10 h-10 rounded-full ml-auto"
                            />
                          </div>
                          <div className="relative">
                            <span className="bg-[#e02929ef] block w-[44px] h-[4px] absolute right-0 bottom-0"></span>
                            <div className="border-b-2 w-full border-black"></div>
                          </div>
                        </div>
                        <img
                          className="absolute left-0 bottom-4  h-10 lg:w-20 lg:h-20 lg:-left-[1.1rem]"
                          src="/image/slider2.svg"
                          alt=""
                        />
                      </div>
                      <div className="order-1 md:order-2">
                        <div
                          className="relative w-full h-[24rem] bg-cover bg-center"
                          style={{
                            backgroundImage: `url('/image/Video.png')`,
                          }}
                        >
                          {!playingVideos[index] ? (
                            <button
                              onClick={() => handlePlay(index)}
                              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
                            >
                              <img src="/image/Play.png" alt="play" />
                            </button>
                          ) : (
                            <video
                              src={item.video}
                              autoPlay
                              controls
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side image */}
          <div className=" absolute bottom-0 left-0 top-24 lg:top-[10rem] hidden lg:block">
            <img
              src="/image/test1.png"
              alt=""
              className=" h-30 2xl:w-[13rem] xl:w-[5rem] lg:w-[3.5rem]"
            />
          </div>
          <div className="absolute right-0 top-[22rem] 2xl:top-[18rem] hidden lg:block">
            <img
              src="/image/test2.png"
              alt=""
              className="w-32 h-30 2xl:w-[15rem] xl:w-[5rem] lg:w-[3.9rem]"
            />
          </div>

          {/* arrow button for sm screens - Only visible on sm screens */}
          <div className="flex space-x-4 items-center justify-center md:hidden mt-4">
            <div
              onClick={() => keenSliderInstance.current.prev()}
              className="bg-gray-100 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer hover:bg-[#d8c6c6]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#070000] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            <div
              onClick={() => keenSliderInstance.current.next()}
              className="bg-gray-100 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer hover:bg-[#d8c6c6]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#df0b0b] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
