import { StaticImage } from 'gatsby-plugin-image';
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

const items = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
].map((src, i) => ({
  id: i,
  src,
  title: `Title ${i + 1}`,
  subtitle: 'SUBTITLE',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus, sequi omnis repudiandae non mollitia laborum molestias tempore laboriosam!',
}));

export default function Gallery() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {items.map(({ id, src, title, subtitle, desc }) => (
              <div key={id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={src}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {subtitle}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {title}
                  </h2>
                  <p className="leading-relaxed text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
