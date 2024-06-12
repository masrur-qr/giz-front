"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <section className="wrapper__page mt-10">
      <Slider {...settings}>
        <div className="h-[450px] child_slider child_slider-1 pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[450px] child_slider pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[450px] child_slider pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[450px] child_slider pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[450px] child_slider pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[450px] child_slider pb-10">
          <div className="flex flex-col justify-end items-start h-full">
            <div>
              <p className="font-medium">Social Development</p>
              <h3 className="font-semibold text-2xl mb-3">Women promote peace</h3>
              <p>
                An information network is supporting women activists <br /> to
                boost their participation in peace processes.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
