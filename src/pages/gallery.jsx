import * as React from 'react';
import Layout from '../components/layout';

import img1 from '../images/fake-1.jpg';
import img2 from '../images/fake-2.jpg';
import img3 from '../images/fake-3.jpg';
import img4 from '../images/fake-4.jpg';
import img5 from '../images/fake-5.jpg';
import img6 from '../images/fake-6.jpg';
import img7 from '../images/fake-7.jpg';
import img8 from '../images/fake-8.jpg';
import img9 from '../images/fake-9.jpg';
import img10 from '../images/fake-10.jpg';
import img11 from '../images/fake-11.jpg';
import img12 from '../images/fake-1.jpg';

const itemsLeft = [
  {
    src: img1,
    size: 'big',
  },
  {
    src: img2,
    size: 'small',
  },
  {
    src: img3,
    size: 'small',
  },
  {
    src: img4,
    size: 'big',
  },
  {
    src: img5,
    size: 'small',
  },
  {
    src: img6,
    size: 'small',
  },
];

const itemsRight = [
  {
    src: img8,
    size: 'small',
  },
  {
    src: img9,
    size: 'small',
  },
  {
    src: img7,
    size: 'big',
  },
  {
    src: img11,
    size: 'small',
  },
  {
    src: img12,
    size: 'small',
  },
  {
    src: img10,
    size: 'big',
  },
];

export default function Gallery() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="pt-20 flex flex-wrap">
          <div className="flex flex-wrap mx-1">
            <div className="flex flex-wrap w-1/2">
              {itemsLeft.map(({ src, size }, i) => (
                <div
                  key={i}
                  className={`md:p-2 p-1 w-${size === 'big' ? 'full' : '1/2'}`}
                >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={src}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap w-1/2">
              {itemsRight.map(({ src, size }, i) => (
                <div
                  key={i}
                  className={`md:p-2 p-1 w-${size === 'big' ? 'full' : '1/2'}`}
                >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
