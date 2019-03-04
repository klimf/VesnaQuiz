import { css } from 'styled-components';
import config from './config';
import placeholder from '../images/placeholder.png';
// const sizes = {
//   extra: 1920,
//   large: 1280,
//   medium: 1024,
//   small: 640,
// };
export const mapToObj = ((aMap) => {
  const obj = {};
  if (aMap instanceof Map) {
    aMap.forEach((v, k) => { obj[k] = v; });
  }
  return obj;
});
export function importAll(r) {
  const images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); }); // eslint-disable-line
  return images;
}

export function formatMoney(value) {
  const number = parseFloat(value);
  if (number) {
    return number.toFixed().replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? ` ${c}` : c));
  }
  return '0';
}

export function resolveStatic(path, nullable) {
  if (!path && !nullable) {
    return placeholder;
  }
  return `${config.API_ADRESS}/${path}`;
}

export function resolveLink(path) {
  if (path.split('/').includes('http:')) {
    return path;
  }
  return `/p/${path}`;
}


export function parseMoney(money) {
  return parseFloat(money.trim());
}

export const media = {
  small: (...args) => css`
    @media (max-width: 39.999em) {
      ${css(...args)}
    }`,
  medium: (...args) => css`
    @media (min-width: 40em) and (max-width: 63.999em) {
      ${css(...args)}
    }`,
  large: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)}
    }`,
};


export const hideOn = css`
  ${(props) => props.noAll && 'display: none !important;'};
  ${media.small`
     ${(props) => props.noSmall && 'display: none !important;'};
  `}
  ${media.medium`
     ${(props) => props.noMedium && 'display: none !important;'};
  `}
  ${media.large`
     ${(props) => props.noLarge && 'display: none !important;'};
  `}
`;

export const padding = css`
  padding: ${(props) => props.padding ? props.padding : 0};
  ${(props) => props.paddingSmall && media.small`
      padding: ${props.paddingSmall};
  `}
  ${(props) => props.paddingMedium && media.medium`
      padding: ${props.paddingSmall};
  `}
  ${(props) => props.paddingLarge && media.large`
      padding: ${props.paddingSmall};
  `}
`;

export const margin = css`
  margin: ${(props) => props.margin ? props.margin : 0};
  ${(props) => props.marginSmall && media.small`
    margin: ${props.marginSmall};
  `}
  ${(props) => props.marginMedium && media.medium`
    margin: ${props.marginSmall};
  `}
  ${(props) => props.marginLarge && media.large`
    margin: ${props.marginSmall};
  `}
`;

export function formatDateWithMonth(date) {
  if (!date) {
    return null;
  }
  const d = new Date();
  d.setTime(Date.parse(date));
  const month = [];

  month[0] = 'Января';
  month[1] = 'Февраля';
  month[2] = 'Марта';
  month[3] = 'Апреля';
  month[4] = 'Мая';
  month[5] = 'Июня';
  month[6] = 'Июля';
  month[7] = 'Августа';
  month[8] = 'Сентября';
  month[9] = 'Октября';
  month[10] = 'Ноября';
  month[11] = 'Декабря';

  return {
    day: d.getDate(),
    month: month[d.getMonth()],
    year: d.getFullYear(),
    old: d.getTime() < new Date().getTime(),
  };
}

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16;
//   // eslint-disable-next-line no-param-reassign
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `;
//   return accumulator;
// }, {});
