import * as React from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from '../images/carousel-1.jpg';
import img2 from '../images/carousel-2.jpg';
import img3 from '../images/carousel-3.jpg';
import img4 from '../images/carousel-4.jpg';
import img5 from '../images/carousel-5.jpg';

const images = [img1, img2, img3, img4, img5];

export default function Carousel() {
  return (
    <AwesomeSlider
      css={css`
        --loader-bar-color: transparent;
        --loader-bar-height: 0;

        img {
          opacity: 0.2;
        }
      `}
      fillParent
      bullets={false}
    >
      {images.map((src, i) => (
        <div key={i} data-src={src} className="absolute">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Konstrukcje</span>{' '}
              <span className="block text-gray-200 xl:inline">szklane</span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Realizacje
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Kalkulator
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
}
