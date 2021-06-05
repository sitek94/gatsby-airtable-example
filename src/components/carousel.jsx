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
      `}
      fillParent
      bullets={false}
      media={images.map(src => ({ source: src }))}
    />
  );
}
