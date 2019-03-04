import { injectGlobal } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    min-width: 435px;
  }

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  img {
    width: 100%;
  }

  h1 {
    font-weight: 400;
  }

  p,
  label {
    /* font-family: Georgia, Times, 'Times New Roman', serif; */
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
  .slick-dots {
    bottom: -19px;
  }
  .slick-prev, .slick-next {
    display: none !important;
  }
`;
