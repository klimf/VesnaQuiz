/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import Slider from 'react-slick';
// import messages from './messages';
import Content from '../../components/Content';
import Space from '../../components/Space';
import Text from '../../components/Text';
import Form from '../../components/Form';

// import { importAll } from '../../utils/helpers';
import placeholder from '../../images/placeholder.png';
import { media, hideOn } from '../../utils/helpers';
import Icon from '../../components/Icon';
import { palette } from '../../utils/constants';
import MenuSwitch from '../../components/MenuSwitch';

function importAll(r) {
  const images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });// eslint-disable-line
  return images;
}
function removeA(arr) {
  let what,// eslint-disable-line
    a = arguments,// eslint-disable-line
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];// eslint-disable-line
    while ((ax = arr.indexOf(what)) !== -1) { // eslint-disable-line
      arr.splice(ax, 1);
    }
  }
  return arr;
}

// const images = importAll(require.context('../../images/Архетипы/Аристократ', false, '/\.jpg/'));// eslint-disable-line
const archetype1 = importAll(require.context('../../images/Архетипы/Заботливый', false, /\.(png|jpe?g|svg)$/));
const archetype2 = importAll(require.context('../../images/Архетипы/Искатель', false, /\.(png|jpe?g|svg)$/));
const archetype3 = importAll(require.context('../../images/Архетипы/Соблазнитель', false, /\.(png|jpe?g|svg)$/));
const archetype4 = importAll(require.context('../../images/Архетипы/Мечтатель', false, /\.(png|jpe?g|svg)$/));
const archetype5 = importAll(require.context('../../images/Архетипы/Маг', false, /\.(png|jpe?g|svg)$/));
const archetype6 = importAll(require.context('../../images/Архетипы/Мудрец', false, /\.(png|jpe?g|svg)$/));
const archetype7 = importAll(require.context('../../images/Архетипы/Герой', false, /\.(png|jpe?g|svg)$/));
const archetype8 = importAll(require.context('../../images/Архетипы/Деловой', false, /\.(png|jpe?g|svg)$/));
const archetype9 = importAll(require.context('../../images/Архетипы/Славный', false, /\.(png|jpe?g|svg)$/));
const archetype10 = importAll(require.context('../../images/Архетипы/Тусовщик', false, /\.(png|jpe?g|svg)$/));
const archetype11 = importAll(require.context('../../images/Архетипы/Аристократ', false, /\.(png|jpe?g|svg)$/));
const archetype12 = importAll(require.context('../../images/Архетипы/Бунтарь', false, /\.(png|jpe?g|svg)$/));

const hairstyle1 = importAll(require.context('../../images/Прически/Заботливый', false, /\.(png|jpe?g|svg)$/));
const hairstyle2 = importAll(require.context('../../images/Прически/Искатель', false, /\.(png|jpe?g|svg)$/));
const hairstyle3 = importAll(require.context('../../images/Прически/Соблазнитель', false, /\.(png|jpe?g|svg)$/));
const hairstyle4 = importAll(require.context('../../images/Прически/Мечтатель', false, /\.(png|jpe?g|svg)$/));
const hairstyle5 = importAll(require.context('../../images/Прически/Маг', false, /\.(png|jpe?g|svg)$/));
const hairstyle6 = importAll(require.context('../../images/Прически/Мудрец', false, /\.(png|jpe?g|svg)$/));
const hairstyle7 = importAll(require.context('../../images/Прически/Герой', false, /\.(png|jpe?g|svg)$/));
const hairstyle8 = importAll(require.context('../../images/Прически/Деловой', false, /\.(png|jpe?g|svg)$/));
const hairstyle9 = importAll(require.context('../../images/Прически/Славный', false, /\.(png|jpe?g|svg)$/));
const hairstyle10 = importAll(require.context('../../images/Прически/Тусовщик', false, /\.(png|jpe?g|svg)$/));
const hairstyle11 = importAll(require.context('../../images/Прически/Аристократ', false, /\.(png|jpe?g|svg)$/));
const hairstyle12 = importAll(require.context('../../images/Прически/Бунтарь', false, /\.(png|jpe?g|svg)$/));


const Checkbox = styled.div`
  display: inline-block;
  margin: 0 10px;
  position: relative;
  top: -4px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 3px solid ${palette.gray};
  /* box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.40), 0 2px 4px 0 rgba(0,0,0,0.40); */
  &>div {
    opacity: 0.0;
  }
  ${(props) => props.selected && `
    margin: -3px 10px;
    top: -7px;
    border: none;
    background: ${palette.gradientAccent};
    &>div {
      opacity: 1.0;
    }
  `}
`;

const Item = styled(Cell)`
  /* background-color: white; */
    /* padding: 14px;
    background: ${palette.gradientAccent}; */
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s ease;
  border: 4px solid transparent;
  
  & img {
    height: ${(props) => props.autoHeight ? 'auto' : '100%'};
    width: 100%;
    transform: scale(1);
    transition: 0.3s ease;
  }
  & .checkbox {
    display: none;
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    &>div {
      display: none;
    }
  }
  ${(props) => props.selected && `
    border: 4px solid ${props.color};
    & .checkbox {
      
      &>div {
        display: block;
      }
    }
    
  `}
  ${(props) => !props.noAction && `
  & .checkbox {
    display: block;
  }
  /*& img:hover {
    transform: scale(1.05);
  }
  &:hover {
    transform: scale(0.9);
  }*/

  `}
  /* background: url(${(props) => props.src ? props.src : placeholder}) center center;
  background-size: cover; */
`;

const ColorItem = styled.div`
  position: relative;
  padding: 10px 0 10px 30px;
  margin: 20px 0;
  & h2, h3 {
    transition: 0.3s ease;
  }
  & div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    background: ${(props) => props.color ? props.color : palette.accent};
    transition: 0.3s ease;
  }
  ${(props) => props.selected && `
    & * {
      color: #FFF !important;
    }
    & div {
      left: -3%;
      width: 106%;
    }
  `}
`;

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1000;
  height: 72px;
  background-color: #fff;
`;
const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  height: 72px;
  background-color: #fff;
  ${hideOn}
`;

const StyledGrid = styled(Grid)`
  margin: 0;
  grid-gap: 0.5vw; 
  ${media.large`
    grid-gap: 10px;
  `}
`;
const Slide = styled.div`
  width: 100%;
  overflow: hidden;
`;
// const SlideHeader = styled.div`
//   position: fixed;
//   z-index: 1001;
// `;

const StyledDiv = styled.div``;

const Button = styled.div`
  color: #fff;
  background: ${(props) => props.disabled ? palette.gray : 'linear-gradient(-150deg, #FE46F4 0%, #723AAA 100%)'};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  padding: 8px 20px;
  margin: 0 20px;
  display: inline-block;
  transform: skew(-21deg);
  &:visited { color: #fff; }
  &:hover { 
    background: ${(props) => props.disabled ? palette.gray : 'linear-gradient(-165deg, #FE46F4 0%, #723AAA 100%)'};
    /* background: linear-gradient(-165deg, #FE46F4 0%, #723AAA 100%);  */
    }
  & > span { display: inline-block; transform: skew(21deg); }
  ${hideOn}
`;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    archetypes: data.archetypes,
    colors: data.colors,
    slideIndex: 0,
    stage: 0,
    selColor: -1,
    selArch: [],
    selItem: [[], [], [], [], [], [], [], [], [], [], [], []],
    selItems: {
      dislikeSwitch: [[], []],
      likeSwitch: [[], []],
    },
    selFromSelItems: {
      hairColor: 0,
      hairCut: 0,
    },
    allowedNext: true,
    // archetypes: [],
    tip: 'Выберите 3 архетипа из 12',
    title: '***',
    dislikeSwitch: [
      { active: true, value: 'Выбор ПЛОХИХ окрасок' },
      { active: false, value: 'Выбор ПЛОХИХ стрижек' },
    ],
    likeSwitch: [
      { active: true, value: 'Выбор ХОРОШИХ окрасок' },
      { active: false, value: 'Выбор ХОРОШИХ стрижек' },
    ],
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);

    // if (this.state.stage !== prevState.stage) {
    //   if (this.state.stage === 1) {
    //     this.slider.slickGoTo(0);
    //   }
    // }
  }
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    beforeChange: (current, next) => {
      // console.log(this.state);
      // const archIndex = this.state.selArch[this.state.slideIndex];
      // console.log(`${archIndex} - ${this.state.slideIndex}`);
      this.setState({ slideIndex: next });
    },
  };


  getButtonText = () => {
    let label = 'Далее';
    // if (this.state.selArch.length > 3) {
    //   label = 'Ошибка(';
    // } else {
    //   label = `${this.state.selArch.includes(this.state.slideIndex) ? 'Убрать' : 'Добавить'} «${data.archetypes[this.state.slideIndex].name}»`;
    // }
    label = `${this.state.selArch.includes(this.state.slideIndex) ? 'Убрать' : 'Добавить'} «${data.archetypes[this.state.slideIndex].name}»`;
    if (this.state.stage === 1) {
      label = (this.state.selArch.length > 0) ? 'Далее' : `Выбрать ${this.state.archetypes[this.state.slideIndex].name}`;
    }
    return label;
  }
  next = () => {
    // this.setState({ slideIndex: 1 });
    this.slider.slickNext();
    // console.log(this.state);
  }
  prev = () => {
    // this.setState({ slideIndex: 1 });
    this.slider.slickPrev();
    // console.log(this.state);
  }
  nextStage = () => {
    const selArch = this.state.selArch;
    if (this.state.allowedNext) {
      if (this.state.stage === 0) {
        this.setState({
          stage: 1,
          tip: 'Выберите 1 архетип из 3',
          allowedNext: false,
          slideIndex: 0,
          archetypes: [data.archetypes[selArch[0]], data.archetypes[selArch[1]], data.archetypes[selArch[2]]],
          selArch: [],
        });
      } else if (this.state.stage === 1) {
        this.setState({
          stage: 2,
          tip: 'Выберите плохие варианты',
          allowedNext: false,
          slideIndex: 0,
        });
      } else if (this.state.stage === 2) {
        this.setState({
          stage: 3,
          tip: 'Выберите хорошие варианты',
          allowedNext: false,
        // archetypes: [data.archetypes[selArch[0]], data.archetypes[selArch[1]], data.archetypes[selArch[2]]],
        });
      } else if (this.state.stage === 3) {
        this.setState({
          stage: 4,
          tip: 'Выберите цвет настроения',
          title: 'Цвет настороения',
          allowedNext: false,
        });
      } else if (this.state.stage === 4) {
        this.setState({
          stage: 5,
          tip: '',
          title: 'Вот ваш образ!',
          allowedNext: false,
        // archetypes: [data.archetypes[selArch[0]], data.archetypes[selArch[1]], data.archetypes[selArch[2]]],
        });
      }
      window.scrollTo(0, 0);
    }
  }
  selArch = () => {
    if (this.state.stage === 0) {
      const selArch = this.state.selArch;
      const slideIndex = this.state.slideIndex;
    // console.log([...selArch]);
    // console.log(slideIndex);
    // console.log(selArch.includes(slideIndex));
      if (selArch.includes(slideIndex)) {
        this.setState({
          selArch: [...removeA(selArch, slideIndex)],
          tip: `Выбрано: ${selArch.length}/3`,
        });
      } else if (selArch.length < 3) {
      // const filteredArch = selArch.filter((value) => value === slideIndex);
        this.setState({
          selArch: [...selArch, slideIndex].sort(),
          tip: `Выбрано: ${selArch.length + 1}/3`,
        });
      }
    } else if (this.state.stage === 1) {
      const selArch = this.state.selArch;
      const slideIndex = this.state.slideIndex;
      if (selArch.includes(slideIndex)) {
        this.setState({
          selArch: [...removeA(selArch, slideIndex)],
          tip: 'Выберите 1 архетип из 3',
          allowedNext: false,
        });
      } else {
        this.setState({
          selArch: [slideIndex],
          tip: `Выбран ${this.state.archetypes[slideIndex].name}`,
          allowedNext: true,
        });
      }
    }
  }
  isSelItem = (itemIndex) => {
    const selItem = this.state.selItem;
    // const countItems = this.state.countItems;
    const slideIndex = this.state.slideIndex;
    const archIndex = this.state.selArch[slideIndex];
    if (selItem[archIndex].includes(itemIndex)) {
      return true;
    }
    return false;
  }
  selItem = (archIndex, itemIndex) => {
    if (this.state.stage === 2) {
      const selItem = this.state.selItem;
      const countItems = this.state.countItems;
      // const slideIndex = this.state.slideIndex;
      // const archIndex = this.state.selArch[archPreIndex];
    // console.log([...selArch]);
    // console.log(slideIndex);
    // console.log(selArch.includes(slideIndex));
      if (selItem[archIndex] && selItem[archIndex].includes(itemIndex)) {
        this.setState({ allowedNext: false });
        selItem[archIndex] = [...removeA(selItem[archIndex], itemIndex)];
        this.setState({
          selItem,
          countItems: countItems - 1,
          tip: `Выбрано: ${countItems - 1}/3`,
        });
      } else if (countItems < 3) {
        if ((countItems + 1) >= 3) {
          this.setState({ allowedNext: true });
        }
        selItem[archIndex] = [...selItem[archIndex], itemIndex];
      // const filteredArch = selArch.filter((value) => value === slideIndex);
        this.setState({
          selItem,
          countItems: countItems + 1,
          tip: `Выбрано: ${countItems + 1}/3`,
        });
      }
    }
  }
  selHairstyle = (menuSwitchName, menuSwitchArray, itemIndex) => {
    console.log('Hairstyle clicked!');
    const selItems = { ...this.state.selItems };
    const selSwitchIndex = menuSwitchArray.findIndex((el) => el.active);
    if (!selItems[menuSwitchName][selSwitchIndex].find((item) => item === itemIndex + 1)) {
      if (selItems[menuSwitchName][selSwitchIndex].length < 3) {
        console.log('Hairstyle will be selected!');
        selItems[menuSwitchName][selSwitchIndex].push(itemIndex + 1);
        const allowedNext = selItems[menuSwitchName].every((el) => el.length === 3);
        this.setState({ selItems, allowedNext, tip: `Выбрано ${selItems[menuSwitchName][selSwitchIndex].length}/3` });
        if (selItems[menuSwitchName][selSwitchIndex].length === 3) {
          if (!allowedNext) {
            console.log('Switcher will be changed!');
            setTimeout(() => {
              this.changeMenuSwitch(menuSwitchName, menuSwitchArray, menuSwitchArray.filter((el) => !el.active)[0]);
            }, 500);
          }
        }
      }
    } else {
      selItems[menuSwitchName][selSwitchIndex] = selItems[menuSwitchName][selSwitchIndex].filter((item) => item !== itemIndex + 1);
      this.setState({ selItems, allowedNext: false, tip: `Выбрано ${selItems[menuSwitchName][selSwitchIndex].length}/3` });
    }
  }
  selFromSelHairstyle = (fieldName, index) => {
    const newSelFromSelItems = { ...this.state.selFromSelItems };
    newSelFromSelItems[fieldName] = index;
    this.setState({ selFromSelItems: newSelFromSelItems });
  }
  // selHairstyle = (archPreIndex, itemIndex) => {
  //   if (this.state.stage === 2) {
  //     const selItem = this.state.selItem;
  //     const countItems = this.state.countItems;
  //     // const slideIndex = this.state.slideIndex;
  //     const archIndex = this.state.selArch[archPreIndex];
  //   // console.log([...selArch]);
  //   // console.log(slideIndex);
  //   // console.log(selArch.includes(slideIndex));
  //     if (selItem[archIndex] && selItem[archIndex].includes(itemIndex)) {
  //       this.setState({ allowedNext: false });
  //       selItem[archIndex] = [...removeA(selItem[archIndex], itemIndex)];
  //       this.setState({
  //         selItem,
  //         countItems: countItems - 1,
  //         tip: `Выбрано: ${countItems - 1}/3`,
  //       });
  //     } else if (countItems < 3) {
  //       if ((countItems + 1) >= 3) {
  //         this.setState({ allowedNext: true });
  //       }
  //       selItem[archIndex] = [...selItem[archIndex], itemIndex];
  //     // const filteredArch = selArch.filter((value) => value === slideIndex);
  //       this.setState({
  //         selItem,
  //         countItems: countItems + 1,
  //         tip: `Выбрано: ${countItems + 1}/3`,
  //       });
  //     }
  //   }
  // }
  selColorItem = (selColor) => {
    if (this.state.stage === 4) {
      this.setState({
        selColor,
        allowedNext: true,
      });
    }
  }
  logState = () => {
    // console.log(this.state);
  }
  changeMenuSwitch = (switchName, switchArray, activeElement) => {
    console.log('Switched');
    if (!activeElement.active) {
      const newSwitchArray = [...switchArray];
      newSwitchArray.find((elem) => elem.active).active = false;
      newSwitchArray.find((elem) => elem === activeElement).active = true;
      let newTip = '';
      if (this.state.selItems[switchName][newSwitchArray.findIndex((el) => el.active)].length === 0) {
        newTip = `Выберите ${this.state.stage === 2 ? 'плохие' : 'хорошие'} варианты`;
      } else {
        newTip = `Выбрано ${this.state.selItems[switchName][newSwitchArray.findIndex((el) => el.active)].length}/3`;
      }
      this.setState({ [switchName]: newSwitchArray, tip: newTip });
    }
  }
  render() {
    return (
      <div>
        <Header onClick={this.logState}>
          {/* it doesn't work inside <Content> */}
          {(this.state.stage === 2) &&
          <MenuSwitch switch={this.state.dislikeSwitch}>
            {this.state.dislikeSwitch.map((elem) =>
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              (<div
                key={elem.value}
                className={elem.active ? 'case active' : 'case'}
                onClick={() => this.changeMenuSwitch('dislikeSwitch', this.state.dislikeSwitch, elem)}
              >{elem.value}</div>))}
            <div className="runner"></div>
          </MenuSwitch>}
          {(this.state.stage === 3) &&
          <MenuSwitch switch={this.state.likeSwitch}>
            {this.state.likeSwitch.map((elem) =>
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              (<div
                key={elem.value}
                className={elem.active ? 'case active' : 'case'}
                onClick={() => this.changeMenuSwitch('likeSwitch', this.state.likeSwitch, elem)}
              >{elem.value}</div>))}
            <div className="runner"></div>
          </MenuSwitch>}
          <Content flex>
            <Icon noAll={this.state.stage >= 2} name="arrowL" padding="20px" color={palette.gray} onClick={this.prev} />
            {(this.state.stage === 0 || this.state.stage === 1) && <StyledDiv onClick={this.selArch}>
              <Checkbox selected={this.state.selArch.includes(this.state.slideIndex)}><Icon name="check" size={22} margin="4px 5px" color={palette.white} /></Checkbox>
              <Text center inline type="title">{
                (this.state.stage === 0 || this.state.stage === 2) &&
                data.archetypes[(this.state.stage === 2 && this.state.selArch[this.state.slideIndex]) ? this.state.selArch[this.state.slideIndex] : this.state.slideIndex].name
                }
                {(this.state.stage === 4 || this.state.stage === 5) &&
                this.state.title
                }
                {(this.state.stage === 1) && this.state.archetypes[this.state.slideIndex].name}
              </Text>
            </StyledDiv>}
            {(this.state.stage !== 0 && this.state.stage !== 1 && this.state.stage !== 2) &&
            <Text center inline type="title" onClick={this.selArch}>{
              (this.state.stage === 0 || this.state.stage === 2) &&
              data.archetypes[(this.state.stage === 2 && this.state.selArch[this.state.slideIndex]) ? this.state.selArch[this.state.slideIndex] : this.state.slideIndex].name
              }
              {(this.state.stage === 4 || this.state.stage === 5) &&
              this.state.title
              }
            </Text>}
            <Icon noAll={this.state.stage >= 2} name="arrowR" padding="20px" color={palette.gray} onClick={this.next} />
          </Content>
        </Header>
        <Space size={6} />
        {(this.state.stage === 0) && <Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
          {this.state.archetypes.filter((item, index) => (this.state.stage === 2 ? this.state.selArch.includes(index) : true)).map((archetype, archetypeIndex) => (
            <Slide key={archetypeIndex.toString()}>
              <Content>
                {/* <SlideHeader>
                  <h1>{archetype.name}</h1>
                </SlideHeader> */}
                <StyledGrid flow="row dense" columns={75} minRowHeight="0">
                  {archetype.items.map((item, archetypeItemIndex) => (
                    // <Item key={index.toString()} width={item.w} height={item.h} src={item.src} />
                    <Item
                      key={archetypeItemIndex.toString()}
                      width={item.w}
                      height={item.h}
                      src={item.src}
                      onClick={() => this.selItem(archetypeItemIndex)}
                      noAction={this.state.stage === 0}
                      selected={this.state.selItem[this.state.selArch[this.state.slideIndex]] && this.state.selItem[this.state.selArch[this.state.slideIndex]].includes(archetypeItemIndex)}
                    >
                      <img src={item.src} alt={archetypeItemIndex} />
                      <div className="checkbox"><Icon name="check" size={22} margin="0 2px" color={palette.white} /></div>
                    </Item>
                  ))}
                </StyledGrid>
              </Content>
            </Slide>
            ))}
        </Slider>}
        {(this.state.stage === 1) && <Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
          {this.state.archetypes.map((archetype, archetypeIndex) => (
            <Slide key={archetypeIndex.toString()}>
              <Content>
                <StyledGrid flow="row dense" columns={75} minRowHeight="0">
                  {archetype.items.map((item, archetypeItemIndex) => (
                    <Item
                      key={archetypeItemIndex.toString()}
                      width={item.w}
                      height={item.h}
                      src={item.src}
                    >
                      <img src={item.src} alt={archetypeItemIndex} />
                    </Item>
                  ))}
                </StyledGrid>
              </Content>
            </Slide>
           ))}
        </Slider>}
        {/* {(this.state.stage === 1) && <Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
          {this.state.archetypes.filter((item, index) => (this.state.stage === 1 ? this.state.selArch.includes(index) : true)).map((archetype, archetypeIndex) => (
            <Slide key={archetypeIndex.toString()}>
              <Content>
                <StyledGrid flow="row dense" columns={75} minRowHeight="0">
                  {archetype.items.map((item, archetypeItemIndex) => (
                    <Item
                      key={archetypeItemIndex.toString()}
                      width={item.w}
                      height={item.h}
                      src={item.src}
                      onClick={() => this.selItem(archetypeIndex, archetypeItemIndex)}
                      noAction={this.state.stage === 0}
                      selected={this.state.selItem[this.state.selArch[archetypeIndex]] && this.state.selItem[this.state.selArch[archetypeIndex]].includes(archetypeItemIndex)}
                    >
                      <img src={item.src} alt={archetypeItemIndex} />
                      <div className="checkbox"><Icon name="check" size={22} margin="0 2px" color={palette.white} /></div>
                    </Item>
                  ))}
                </StyledGrid>
              </Content>
            </Slide>
            ))}
        </Slider>} */}
        {(this.state.stage === 2) && <Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
          {this.state.selArch.map((archetype, archetypeIndex) => (
            <Slide key={archetypeIndex.toString()}>
              <Content>
                {/* <SlideHeader>
                  <h1>{archetype.name}</h1>
                </SlideHeader> */}
                <StyledGrid flow="row dense" columns={6} minRowHeight="0">
                  {Object.keys(this.state.archetypes[archetype].hairstyles).map((key, hairstyleIndex) => (
                    // <Item key={index.toString()} width={item.w} height={item.h} src={item.src} />
                    <Item
                      key={key.toString()}
                      width={1}
                      height={1}
                      onClick={() => this.selHairstyle('dislikeSwitch', this.state.dislikeSwitch, hairstyleIndex)}
                      noAction={this.state.stage === 0}
                      selected={this.state.selItems.dislikeSwitch[this.state.dislikeSwitch.findIndex((el) => el.active)].find((index) => index - 1 === hairstyleIndex)}
                      color="red"
                    >
                      <img src={this.state.archetypes[archetype].hairstyles[`h${(hairstyleIndex + 1)}.jpg`]} alt={key} />
                      <div className="checkbox"><Icon name="dislike" size={40} margin="0 2px" color={palette.white} /></div>
                    </Item>
                  ))}
                </StyledGrid>
              </Content>
            </Slide>
            ))}
        </Slider>}
        {(this.state.stage === 3) && <Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
          {this.state.selArch.map((archetype, archetypeIndex) => (
            <Slide key={archetypeIndex.toString()}>
              <Content>
                {/* <SlideHeader>
                  <h1>{archetype.name}</h1>
                </SlideHeader> */}
                <StyledGrid flow="row dense" columns={6} minRowHeight="0">
                  {Object.keys(this.state.archetypes[archetype].hairstyles).map((key, hairstyleIndex) => (
                    // <Item key={index.toString()} width={item.w} height={item.h} src={item.src} />
                    <Item
                      key={key.toString()}
                      width={1}
                      height={1}
                      onClick={() => this.selHairstyle('likeSwitch', this.state.likeSwitch, hairstyleIndex)}
                      noAction={this.state.stage === 0}
                      selected={this.state.selItems.likeSwitch[this.state.likeSwitch.findIndex((el) => el.active)].find((index) => index - 1 === hairstyleIndex)}
                      color="green"
                    >
                      <img src={this.state.archetypes[archetype].hairstyles[`h${(hairstyleIndex + 1)}.jpg`]} alt={key} />
                      <div className="checkbox"><Icon name="like" size={40} margin="0 2px" color={palette.white} /></div>
                    </Item>
                  ))}
                </StyledGrid>
              </Content>
            </Slide>
            ))}
        </Slider>}
        {(this.state.stage === 4) &&
        <Content>
          {this.state.colors.map((item, index) => (
            <ColorItem
              key={index.toString()}
              color={item.color}
              onClick={() => this.selColorItem(index)}
              selected={this.state.selColor === index}
            >
              <div />
              <Text type="colorTitle">{item.name}</Text>
              <Text type="p" margin="0 0 10px 0">{item.desc}</Text>
            </ColorItem>
          ))}
        </Content>
        }
        {(this.state.stage === 5) &&
          <Content>
            {/* <StyledGrid flow="row dense" columns={75} minRowHeight="0">
              {this.state.archetypes
              .filter((archetype, archetypeIndex) => (this.state.selArch.includes(archetypeIndex)))
              .map((archetype, archetypeIndex) => (archetype.items
                .filter((archetypeItem, archetypeItemIndex) => (this.state.selItem[archetypeIndex].includes(archetypeItemIndex)))
                .map((archetypeItem, archetypeItemIndex) => (

                // <Item key={index.toString()} width={item.w} height={item.h} src={item.src} />
                  <Item
                    key={archetypeItemIndex.toString()}
                    width={25}
                    height={25}
                    autoHeight
                    src={archetypeItem.src}
                    noAction
                  >
                    <img src={archetypeItem.src} alt={archetypeItemIndex} />
                    <div className="checkbox"><Icon name="check" size={22} margin="0 2px" color={palette.white} /></div>
                  </Item>

                  ))
                  ))}
            </StyledGrid> */}
            {/* <StyledGrid flow="row dense" columns={75} minRowHeight="0">
              {this.state.selItem
                .map((archetypeItem, archetypeItemIndex) => (archetypeItem.map((archetypeSubItem, archetypeSubItemIndex) => (
                  <Item
                    key={archetypeSubItemIndex.toString()}
                    width={25}
                    height={25}
                    autoHeight
                    src={this.state.archetypes[archetypeItemIndex].items[archetypeSubItem].src}
                    noAction
                  >
                    <img src={this.state.archetypes[archetypeItemIndex].items[archetypeSubItem].src} alt={`${archetypeItemIndex}-${archetypeSubItem}`} />
                    <div className="checkbox"><Icon name="check" size={22} margin="0 2px" color={palette.white} /></div>
                  </Item>
                  ))
                ))}
            </StyledGrid> */}
            <Text type="colorTitle">Варианты удачных окрасок</Text>
            <StyledGrid flow="row dense" columns={3} minRowHeight="0">
              {this.state.selItems.likeSwitch[0]
                .map((hairstyleIndex) => {
                  const hairColor = this.state.selFromSelItems.hairColor;
                  console.log({ hairColor, hairstyleIndex });
                  return (<Item
                    key={hairstyleIndex.toString()}
                    width={1}
                    height={1}
                    autoHeight
                    selected={hairstyleIndex === this.state.selFromSelItems.hairColor}
                    color="green"
                    onClick={() => this.selFromSelHairstyle('hairColor', hairstyleIndex)}
                  >
                    <img src={this.state.archetypes[this.state.selArch[0]].hairstyles[`h${(hairstyleIndex)}.jpg`]} alt={`${hairstyleIndex}`} />
                    <div className="checkbox"><Icon name="like" size={40} margin="0 2px" color={palette.white} /></div>
                  </Item>)
;
                })
              }
            </StyledGrid>
            <Text type="colorTitle">Варианты удачных стрижек</Text>
            <StyledGrid flow="row dense" columns={3} minRowHeight="0">
              {this.state.selItems.likeSwitch[1]
                .map((hairstyleIndex) => (
                  <Item
                    key={hairstyleIndex.toString()}
                    width={1}
                    height={1}
                    autoHeight
                    selected={this.state.selFromSelItems.hairCut === hairstyleIndex}
                    color="green"
                    onClick={() => this.selFromSelHairstyle('hairCut', hairstyleIndex)}
                  >
                    <img src={this.state.archetypes[this.state.selArch[0]].hairstyles[`h${(hairstyleIndex)}.jpg`]} alt={`${hairstyleIndex}`} />
                    <div className="checkbox"><Icon name="like" size={40} margin="0 2px" color={palette.white} /></div>
                  </Item>))
              }
            </StyledGrid>
            <Text type="colorTitle">Варианты плохих окрасок</Text>
            <StyledGrid flow="row dense" columns={3} minRowHeight="0">
              {this.state.selItems.dislikeSwitch[0]
                .map((hairstyleIndex) => (
                  <Item
                    key={hairstyleIndex.toString()}
                    width={1}
                    height={1}
                    autoHeight
                    noAction
                  >
                    <img src={this.state.archetypes[this.state.selArch[0]].hairstyles[`h${(hairstyleIndex)}.jpg`]} alt={`${hairstyleIndex}`} />
                  </Item>))
              }
            </StyledGrid>
            <Text type="colorTitle">Варианты плохих стрижек</Text>
            <StyledGrid flow="row dense" columns={3} minRowHeight="0">
              {this.state.selItems.dislikeSwitch[1]
                .map((hairstyleIndex) => (
                  <Item
                    key={hairstyleIndex.toString()}
                    width={1}
                    height={1}
                    autoHeight
                    noAction
                  >
                    <img src={this.state.archetypes[this.state.selArch[0]].hairstyles[`h${(hairstyleIndex)}.jpg`]} alt={`${hairstyleIndex}`} />
                  </Item>))
              }
            </StyledGrid>
            <Text type="colorTitle">{this.state.archetypes[this.state.selArch[0]].name}</Text>
            <Text type="p" margin="0 0 10px 0">{this.state.archetypes[this.state.selArch[0]].desc}</Text>
            {/* {this.state.archetypes
              .filter((archetype, archetypeIndex) => (this.state.selItem[archetypeIndex].length > 0 && this.state.selArch.includes(archetypeIndex)))
              .map((archetype, archetypeIndex) => (
                <div key={archetypeIndex.toString()}>
                  <Text type="colorTitle">{archetype.name}</Text>
                  <Text type="p" margin="0 0 10px 0">{archetype.desc}</Text>
                </div>
              ))} */}

            <Form
              // selSources={[].concat.apply([], this.state.selItem // eslint-disable-line
              //   .map((archetypeItem, archetypeItemIndex) => (archetypeItem.map((archetypeSubItem) => (
              //     this.state.archetypes[archetypeItemIndex].items[archetypeSubItem].src
              //   )))))}
              selColor={this.state.selColor}
              selArchetype={this.state.archetypes[this.state.selArch[0]]}
            />
          </Content>
        }
        <Space size={8} />
        <Footer noAll={this.state.stage === 5}>
          <Content flex>
            <div>
              <Text type="subtitle">{this.state.tip}</Text>
              {/* <Text type="p">{this.state.selArch.toString()}</Text> */}
            </div>
            {/* <Text type="subtitle">{this.state.selArch.toString()}</Text> */}
            {(this.state.stage === 0) && <Button title="first button" noAll={this.state.selArch.length >= 3} onClick={this.selArch}><span>{this.getButtonText()}</span></Button>}
            {(this.state.stage === 0) && <Button title="second button" noAll={this.state.selArch.length < 3} disabled={!this.state.allowedNext} onClick={this.nextStage}><span>Далее</span></Button>}
            {(this.state.stage === 1) && <Button title="first button" noAll={this.state.selArch.length >= 1} onClick={this.selArch}><span>{this.getButtonText()}</span></Button>}
            {(this.state.stage === 1) && <Button title="second button" noAll={this.state.selArch.length < 1} disabled={!this.state.allowedNext} onClick={this.nextStage}><span>Далее</span></Button>}
            {(this.state.stage === 2) && <Button title="second button" disabled={!this.state.allowedNext} onClick={this.nextStage}><span>Далее</span></Button>}
            {(this.state.stage === 3) && <Button title="second button" disabled={!this.state.allowedNext} onClick={this.nextStage}><span>Далее</span></Button>}
            {(this.state.stage === 4) && <Button title="second button" disabled={!this.state.allowedNext} onClick={this.nextStage}><span>Далее</span></Button>}
          </Content>
        </Footer>
      </div>
    );
  }
}

// Array.prototype.remove = function (from, to) { // eslint-disable-line
//   const rest = this.slice((to || from) + 1 || this.length);
//   this.length = from < 0 ? this.length + from : from;
//   return this.push.apply(this, rest);// eslint-disable-line
// };
const data = {
  colors: [
    {
      name: 'Сиреневый',
      color: '#bd43ff',
      desc: 'Выбор цвета говорит о противоречии между внутренними ощущениями и их внешними проявлениями. Со стороны ты выглядишь спокойной, невозмутимой. Однако глубоко внутри кипит насыщенная жизнь.',
    },
    {
      name: 'Салатовый',
      color: '#86CE38',
      desc: 'Выбор цвета говорит о противоречии между внутренними ощущениями и их внешними проявлениями. Со стороны ты выглядишь спокойной, невозмутимой. Однако глубоко внутри кипит насыщенная жизнь.',
    },
    {
      name: 'Цитрусовый',
      color: '#FF9E00',
      desc: 'Выбор цвета говорит о противоречии между внутренними ощущениями и их внешними проявлениями. Со стороны ты выглядишь спокойной, невозмутимой. Однако глубоко внутри кипит насыщенная жизнь.',
    },
    {
      name: 'Персиковый',
      color: '#F44258',
      desc: 'Выбор цвета говорит о противоречии между внутренними ощущениями и их внешними проявлениями. Со стороны ты выглядишь спокойной, невозмутимой. Однако глубоко внутри кипит насыщенная жизнь.',
    },
  ],
  archetypes: [
    {
      name: 'Заботливый',
      desc: 'Пастельная гамма оттенков, натуральные ткани, сдержанный силуэт. Образ подобран согласно времени года и отражает традиционные взгляды на гардероб. Одежду выбирает комфортную, свободного кроя и мягкую на ощупь. Старается создать образ порядочного человека.',
      items: [
        { w: 29, h: 25, src: archetype1['1.jpg'] },
        { w: 29, h: 41, src: archetype1['4.jpg'] },
        { w: 17, h: 25, src: archetype1['5.jpg'] },
        { w: 17, h: 16, src: archetype1['2.jpg'] },
        { w: 12, h: 16, src: archetype1['3.jpg'] },
        { w: 17, h: 16, src: archetype1['6.jpg'] },
        { w: 29, h: 34, src: archetype1['7.jpg'] },
        { w: 46, h: 34, src: archetype1['8.jpg'] },
        { w: 46, h: 34, src: archetype1['9.jpg'] },
        { w: 29, h: 34, src: archetype1['10.jpg'] },
        { w: 17, h: 25, src: archetype1['11.jpg'] },
        { w: 29, h: 25, src: archetype1['12.jpg'] },
        { w: 29, h: 25, src: archetype1['13.jpg'] },
        { w: 46, h: 42, src: archetype1['14.jpg'] },
        { w: 29, h: 16, src: archetype1['15.jpg'] },
        { w: 29, h: 26, src: archetype1['16.jpg'] },
        { w: 11, h: 16, src: archetype1['17.jpg'] },
        { w: 18, h: 16, src: archetype1['18.jpg'] },
        { w: 17, h: 42, src: archetype1['20.jpg'] },
        { w: 29, h: 42, src: archetype1['21.jpg'] },
        { w: 29, h: 26, src: archetype1['19.jpg'] },
      ],
      hairstyles: hairstyle1,
    },
    {
      name: 'Искатель',
      desc: 'Городской путешественник, удобная всепогодная обувь и одежда, при взгляде на искателя создаётся впечатление, что он в любой момент готов сорваться в дальнее странствие. Насыщенные оттенки в одежде, в том числе народные орнаменты, иногда создающие впечатление аляповатости. Множество карманов как на одежде, так и сумке, но чаще конечно рюкзак - вместительный удобный и яркий.',
      items: [
        { w: 29, h: 21, src: archetype2['1.jpg'] },
        { w: 46, h: 42, src: archetype2['3.jpg'] },
        { w: 29, h: 21, src: archetype2['2.jpg'] },
        { w: 29, h: 25, src: archetype2['4.jpg'] },
        { w: 29, h: 41, src: archetype2['6.jpg'] },
        { w: 17, h: 25, src: archetype2['7.jpg'] },
        { w: 29, h: 16, src: archetype2['5.jpg'] },
        { w: 17, h: 16, src: archetype2['8.jpg'] },
        { w: 46, h: 26, src: archetype2['9.jpg'] },
        { w: 29, h: 26, src: archetype2['10.jpg'] },
        { w: 17, h: 25, src: archetype2['11.jpg'] },
        { w: 29, h: 25, src: archetype2['12.jpg'] },
        { w: 29, h: 25, src: archetype2['13.jpg'] },
        { w: 17, h: 16, src: archetype2['14.jpg'] },
        { w: 58, h: 42, src: archetype2['16.jpg'] },
        { w: 17, h: 26, src: archetype2['15.jpg'] },
        { w: 46, h: 42, src: archetype2['17.jpg'] },
        { w: 12, h: 16, src: archetype2['18.jpg'] },
        { w: 17, h: 16, src: archetype2['19.jpg'] },
        { w: 29, h: 26, src: archetype2['20.jpg'] },
      ],
      hairstyles: hairstyle2,
    },
    {
      name: 'Соблазнитель',
      desc: 'Облегающий тело силуэт, блестящие ткани, нарочитая дороговизна. Лозунг костюма соблазнителя - нельзя быть слишком сексуальным. Низкое декольте, ткань броская, имитирующая блеск драгоценных металлов и животных принтов. Оттенки красного, золотого, металлический отблеск. Кружевная ткань, полупрозрачная, с акцентом на сексуальность тела. Яркий показатель соблазнителя - несоответствие одежды и времени года.',
      items: [
        { w: 21, h: 16, src: archetype3['1.jpg'] },
        { w: 54, h: 32, src: archetype3['3.jpg'] },
        { w: 21, h: 16, src: archetype3['2.jpg'] },
        { w: 21, h: 35, src: archetype3['4.jpg'] },
        { w: 25, h: 35, src: archetype3['5.jpg'] },
        { w: 29, h: 35, src: archetype3['6.jpg'] },
        { w: 21, h: 42, src: archetype3['7.jpg'] },
        { w: 25, h: 16, src: archetype3['8.jpg'] },
        { w: 29, h: 42, src: archetype3['10.jpg'] },
        { w: 25, h: 26, src: archetype3['9.jpg'] },
        { w: 46, h: 47, src: archetype3['11.jpg'] },
        { w: 29, h: 47, src: archetype3['12.jpg'] },
        { w: 17, h: 20, src: archetype3['13.jpg'] },
        { w: 29, h: 20, src: archetype3['14.jpg'] },
        { w: 29, h: 20, src: archetype3['15.jpg'] },
        { w: 17, h: 12, src: archetype3['16.jpg'] },
        { w: 12, h: 12, src: archetype3['17.jpg'] },
        { w: 17, h: 42, src: archetype3['19.jpg'] },
        { w: 29, h: 42, src: archetype3['20.jpg'] },
        { w: 29, h: 30, src: archetype3['18.jpg'] },
      ],
      hairstyles: hairstyle3,
    },
    {
      name: 'Мечтатель',
      desc: 'Многообразие ярких пастельных оттенков и различных текстур. Инфантильный стиль, создающий впечатление умиления и легкой несерьезности, детской игривости. Розовый, бирюзовый, голубой, персиковый, лиловый, коралловый - излюбленные цвета мечтателей.',
      items: [
        { w: 46, h: 42, src: archetype4['1.jpg'] },
        { w: 29, h: 42, src: archetype4['2.jpg'] },
        { w: 29, h: 26, src: archetype4['3.jpg'] },
        { w: 17, h: 26, src: archetype4['4.jpg'] },
        { w: 29, h: 26, src: archetype4['5.jpg'] },
        { w: 29, h: 15, src: archetype4['6.jpg'] },
        { w: 17, h: 15, src: archetype4['8.jpg'] },
        { w: 29, h: 41, src: archetype4['10.jpg'] },
        { w: 29, h: 26, src: archetype4['7.jpg'] },
        { w: 17, h: 26, src: archetype4['9.jpg'] },
        { w: 46, h: 42, src: archetype4['11.jpg'] },
        { w: 29, h: 26, src: archetype4['12.jpg'] },
        { w: 29, h: 16, src: archetype4['13.jpg'] },
        { w: 29, h: 26, src: archetype4['14.jpg'] },
        { w: 17, h: 42, src: archetype4['17.jpg'] },
        { w: 29, h: 25, src: archetype4['19.jpg'] },
        { w: 29, h: 42, src: archetype4['20.jpg'] },
        { w: 29, h: 16, src: archetype4['15.jpg'] },
        { w: 29, h: 25, src: archetype4['16.jpg'] },
        { w: 17, h: 25, src: archetype4['18.jpg'] },
      ],
      hairstyles: hairstyle4,
    },
    {
      name: 'Маг',
      desc: 'Маг выражается в двух разных вариантах одежды: геометричные необычные формы гладких глянцевых тканей и матовые многослойные одежды наподобие балахонов. Все необычное, меняющее  визуально форму тела, максимально закрыта одежда, ритмические рисунки и многослойные принты, - все это отличает Мага. Преимущество отдается глубоким холодным оттенкам, супер-современным тканям. Маг являет собой сверх-модный аутентичный образ.',
      items: [
        { w: 29, h: 26, src: archetype5['1.jpg'] },
        { w: 17, h: 42, src: archetype5['3.jpg'] },
        { w: 29, h: 42, src: archetype5['4.jpg'] },
        { w: 29, h: 16, src: archetype5['2.jpg'] },
        { w: 46, h: 35, src: archetype5['5.jpg'] },
        { w: 29, h: 25, src: archetype5['6.jpg'] },
        { w: 29, h: 10, src: archetype5['7.jpg'] },
        { w: 29, h: 32, src: archetype5['8.jpg'] },
        { w: 17, h: 32, src: archetype5['9.jpg'] },
        { w: 29, h: 32, src: archetype5['10.jpg'] },
        { w: 29, h: 32, src: archetype5['11.jpg'] },
        { w: 46, h: 32, src: archetype5['12.jpg'] },
        { w: 29, h: 36, src: archetype5['13.jpg'] },
        { w: 29, h: 36, src: archetype5['14.jpg'] },
        { w: 17, h: 36, src: archetype5['15.jpg'] },
        { w: 29, h: 41, src: archetype5['16.jpg'] },
        { w: 17, h: 41, src: archetype5['17.jpg'] },
        { w: 29, h: 15, src: archetype5['18.jpg'] },
        { w: 11, h: 26, src: archetype5['19.jpg'] },
        { w: 18, h: 26, src: archetype5['20.jpg'] },
      ],
      hairstyles: hairstyle5,
    },
    {
      name: 'Мудрец',
      desc: 'Спокойный классический но неоднозначный силуэт. Любят многослойность в одежде, натуральные ткани, цвета глубокие насыщенные, часто с орнаментами и рисунками этнического направления, не яркие и не привлекающие к себе много внимания. Очень ценят комфорт в одежде - она должна быть приятна на ощупь и удобна в движении, очень важно качество ткани и фурнитуры.',
      items: [
        { w: 29, h: 26, src: archetype6['1.jpg'] },
        { w: 17, h: 42, src: archetype6['4.jpg'] },
        { w: 29, h: 42, src: archetype6['5.jpg'] },
        { w: 18, h: 16, src: archetype6['2.jpg'] },
        { w: 11, h: 16, src: archetype6['3.jpg'] },
        { w: 46, h: 26, src: archetype6['6.jpg'] },
        { w: 29, h: 26, src: archetype6['7.jpg'] },
        { w: 29, h: 41, src: archetype6['8.jpg'] },
        { w: 17, h: 41, src: archetype6['9.jpg'] },
        { w: 29, h: 41, src: archetype6['10.jpg'] },
        { w: 29, h: 26, src: archetype6['11.jpg'] },
        { w: 17, h: 42, src: archetype6['14.jpg'] },
        { w: 29, h: 42, src: archetype6['15.jpg'] },
        { w: 18, h: 16, src: archetype6['12.jpg'] },
        { w: 11, h: 16, src: archetype6['13.jpg'] },
        { w: 29, h: 42, src: archetype6['16.jpg'] },
        { w: 46, h: 42, src: archetype6['17.jpg'] },
        { w: 29, h: 25, src: archetype6['18.jpg'] },
        { w: 17, h: 25, src: archetype6['19.jpg'] },
        { w: 29, h: 25, src: archetype6['20.jpg'] },
      ],
      hairstyles: hairstyle6,
    },
    {
      name: 'Герой',
      desc: 'Спортивный стиль, элементы униформы, гладкие, блестящие ткани и материалы. Одежда строгая, минималистичная и удобная на уровне удобства олимпийских спортсменов. Цвета чаще монохромные - серый, синий, чёрный, пепельный, хаки, темно-зелёный, металлик.',
      items: [
        { w: 29, h: 26, src: archetype7['1.jpg'] },
        { w: 17, h: 42, src: archetype7['3.jpg'] },
        { w: 29, h: 42, src: archetype7['4.jpg'] },
        { w: 29, h: 16, src: archetype7['2.jpg'] },
        { w: 29, h: 26, src: archetype7['5.jpg'] },
        { w: 46, h: 26, src: archetype7['6.jpg'] },
        { w: 29, h: 41, src: archetype7['7.jpg'] },
        { w: 17, h: 16, src: archetype7['8.jpg'] },
        { w: 29, h: 16, src: archetype7['9.jpg'] },
        { w: 46, h: 25, src: archetype7['10.jpg'] },
        { w: 29, h: 42, src: archetype7['11.jpg'] },
        { w: 17, h: 42, src: archetype7['12.jpg'] },
        { w: 29, h: 42, src: archetype7['13.jpg'] },
        { w: 46, h: 26, src: archetype7['14.jpg'] },
        { w: 29, h: 26, src: archetype7['15.jpg'] },
        { w: 29, h: 25, src: archetype7['16.jpg'] },
        { w: 17, h: 41, src: archetype7['19.jpg'] },
        { w: 29, h: 41, src: archetype7['20.jpg'] },
        { w: 11, h: 16, src: archetype7['17.jpg'] },
        { w: 18, h: 16, src: archetype7['18.jpg'] },
      ],
      hairstyles: hairstyle7,
    },
    {
      name: 'Деловой',
      desc: 'Строгий и классический силуэт, предпочитает сдержанную гамму цветов. Максимально закрытое тело и четкие линии. Ценит понятие дресс-кодов и правил, даже если их нет, то создает их сам. У представителей архетипа Деловой есть четкое представление о том, как должны выглядеть люди, согласно их возрасту, статусу и положению в обществе. Цветовая палитра в одежде – за основу, как правило, взяты цвета: синий, черный, серый, темно-коричневый, минимальные контрасты, стремление выглядеть официально и неброско. ',
      items: [
        { w: 29, h: 26, src: archetype8['1.jpg'] },
        { w: 17, h: 42, src: archetype8['3.jpg'] },
        { w: 29, h: 42, src: archetype8['4.jpg'] },
        { w: 29, h: 16, src: archetype8['2.jpg'] },
        { w: 29, h: 26, src: archetype8['5.jpg'] },
        { w: 17, h: 26, src: archetype8['7.jpg'] },
        { w: 29, h: 41, src: archetype8['9.jpg'] },
        { w: 29, h: 41, src: archetype8['6.jpg'] },
        { w: 17, h: 41, src: archetype8['8.jpg'] },
        { w: 29, h: 26, src: archetype8['10.jpg'] },
        { w: 17, h: 26, src: archetype8['11.jpg'] },
        { w: 29, h: 42, src: archetype8['13.jpg'] },
        { w: 29, h: 42, src: archetype8['14.jpg'] },
        { w: 17, h: 16, src: archetype8['12.jpg'] },
        { w: 18, h: 26, src: archetype8['15.jpg'] },
        { w: 39, h: 26, src: archetype8['16.jpg'] },
        { w: 18, h: 26, src: archetype8['17.jpg'] },
        { w: 29, h: 41, src: archetype8['18.jpg'] },
        { w: 17, h: 41, src: archetype8['19.jpg'] },
        { w: 29, h: 41, src: archetype8['20.jpg'] },
      ],
      hairstyles: hairstyle8,
    },
    {
      name: 'Славный',
      desc: 'Актуальная мода большинства. Важно быть в тренде, но не выделяться из общей массы. Славный малый - везде свой, приятный и не отталкивающий. Для того, чтобы понять внешний облик Славного Малого в грядущем сезоне можно посмотреть каталоги ZARA и H&M. Пастельные оттенки, простые силуэты и чаще всего натуральные ткани.',
      items: [
        { w: 29, h: 42, src: archetype9['1.jpg'] },
        { w: 17, h: 42, src: archetype9['3.jpg'] },
        { w: 29, h: 26, src: archetype9['5.jpg'] },
        { w: 29, h: 42, src: archetype9['6.jpg'] },
        { w: 29, h: 26, src: archetype9['2.jpg'] },
        { w: 17, h: 26, src: archetype9['4.jpg'] },
        { w: 46, h: 41, src: archetype9['7.jpg'] },
        { w: 11, h: 16, src: archetype9['8.jpg'] },
        { w: 18, h: 16, src: archetype9['9.jpg'] },
        { w: 29, h: 25, src: archetype9['10.jpg'] },
        { w: 29, h: 26, src: archetype9['11.jpg'] },
        { w: 17, h: 42, src: archetype9['13.jpg'] },
        { w: 29, h: 42, src: archetype9['14.jpg'] },
        { w: 29, h: 16, src: archetype9['12.jpg'] },
        { w: 46, h: 26, src: archetype9['15.jpg'] },
        { w: 29, h: 26, src: archetype9['16.jpg'] },
        { w: 46, h: 41, src: archetype9['17.jpg'] },
        { w: 11, h: 16, src: archetype9['18.jpg'] },
        { w: 18, h: 16, src: archetype9['19.jpg'] },
        { w: 29, h: 25, src: archetype9['20.jpg'] },
      ],
      hairstyles: hairstyle9,
    },
    {
      name: 'Тусовщик',
      desc: 'Яркие цвета и принты, разнообразие тканей, их фактур и сочетаний. Все, чтобы привлечь и удержать внимание. Тусовщик любит яркость и эпатаж, и он также является ярким приверженцем модных тенденций. Это тот самый двигатель моды, способный носить всё самое передовое, буквально взятое с показов дизайнеров. Основное правило - цветов в одном костюме должно быть минимум 3. Не отдает предпочтения натуральным или искусственным тканям - всё зависит от модных тенденций актуального сезона.',
      items: [
        { w: 29, h: 26, src: archetype10['1.jpg'] },
        { w: 17, h: 42, src: archetype10['4.jpg'] },
        { w: 29, h: 42, src: archetype10['5.jpg'] },
        { w: 18, h: 16, src: archetype10['2.jpg'] },
        { w: 11, h: 16, src: archetype10['3.jpg'] },
        { w: 46, h: 26, src: archetype10['6.jpg'] },
        { w: 29, h: 26, src: archetype10['7.jpg'] },
        { w: 29, h: 41, src: archetype10['8.jpg'] },
        { w: 46, h: 41, src: archetype10['9.jpg'] },
        { w: 29, h: 26, src: archetype10['10.jpg'] },
        { w: 46, h: 42, src: archetype10['13.jpg'] },
        { w: 18, h: 16, src: archetype10['11.jpg'] },
        { w: 11, h: 16, src: archetype10['12.jpg'] },
        { w: 46, h: 26, src: archetype10['14.jpg'] },
        { w: 29, h: 26, src: archetype10['15.jpg'] },
        { w: 29, h: 41, src: archetype10['16.jpg'] },
        { w: 17, h: 41, src: archetype10['17.jpg'] },
        { w: 18, h: 16, src: archetype10['18.jpg'] },
        { w: 11, h: 16, src: archetype10['19.jpg'] },
        { w: 29, h: 25, src: archetype10['20.jpg'] },
      ],
      hairstyles: hairstyle10,
    },
    {
      name: 'Аристократ',
      desc: 'Современное прочтение классики. Максимально закрытое тело, строгий стройный силуэт, глянцевые ткани. Предпочтение натуральным дорогим тканям, в идеале - сшитое на заказ платье или костюм. Аристократу важно показать свою элитарность, и в этом ему помогают костюмы из таких тканей, как бархат, атлас, кашемир, насыщенных оттенков - изумрудный, бордовый, золотой, темно-коричневый, фиолетовый, черный. Классика черно-белого также приветствуется. Любят высокие воротники и сложную отделку при пошиве.',
      items: [
        { w: 29, h: 42, src: archetype11['1.jpg'] },
        { w: 17, h: 42, src: archetype11['2.jpg'] },
        { w: 29, h: 32, src: archetype11['3.jpg'] },
        { w: 11, h: 10, src: archetype11['4.jpg'] },
        { w: 18, h: 10, src: archetype11['5.jpg'] },
        { w: 29, h: 42, src: archetype11['6.jpg'] },
        { w: 17, h: 26, src: archetype11['8.jpg'] },
        { w: 29, h: 26, src: archetype11['9.jpg'] },
        { w: 46, h: 41, src: archetype11['10.jpg'] },
        { w: 29, h: 25, src: archetype11['7.jpg'] },
        { w: 46, h: 42, src: archetype11['11.jpg'] },
        { w: 29, h: 42, src: archetype11['12.jpg'] },
        { w: 29, h: 26, src: archetype11['13.jpg'] },
        { w: 46, h: 42, src: archetype11['16.jpg'] },
        { w: 18, h: 16, src: archetype11['14.jpg'] },
        { w: 11, h: 16, src: archetype11['15.jpg'] },
        { w: 29, h: 25, src: archetype11['17.jpg'] },
        { w: 29, h: 25, src: archetype11['18.jpg'] },
        { w: 17, h: 25, src: archetype11['19.jpg'] },
      ],
      hairstyles: hairstyle11,
    },
    {
      name: 'Бунтарь',
      desc: 'Всегда яркий, нарочитый, всегда - против общих правил. В наше время бунтарь не обязательно будет выглядеть как панк, вообще сложно в современном обществе выразить откровенный бунт, как было раньше. Рваные джинсы давно уже стали частью повседневного гардероба многих людей. Если в моде зеленый, бунтарь наденет красный, если все вокруг в белом - он будет в черном. Бунт может так же быть направлен и на гендерные стереотипы - девочки носят элементы откровенно мужского гардероба и наоборот. Задача бунтаря через одежду показать Искреннее несогласие с правилами и нормами, сложившимися в обществе, где он живет.',
      items: [
        { w: 29, h: 26, src: archetype12['1.jpg'] },
        { w: 17, h: 26, src: archetype12['2.jpg'] },
        { w: 29, h: 26, src: archetype12['3.jpg'] },
        { w: 46, h: 42, src: archetype12['4.jpg'] },
        { w: 29, h: 42, src: archetype12['5.jpg'] },
        { w: 29, h: 41, src: archetype12['6.jpg'] },
        { w: 17, h: 41, src: archetype12['7.jpg'] },
        { w: 11, h: 16, src: archetype12['8.jpg'] },
        { w: 18, h: 16, src: archetype12['9.jpg'] },
        { w: 29, h: 25, src: archetype12['10.jpg'] },
        { w: 29, h: 26, src: archetype12['11.jpg'] },
        { w: 46, h: 42, src: archetype12['14.jpg'] },
        { w: 18, h: 16, src: archetype12['12.jpg'] },
        { w: 11, h: 16, src: archetype12['13.jpg'] },
        { w: 29, h: 26, src: archetype12['15.jpg'] },
        { w: 29, h: 42, src: archetype12['17.jpg'] },
        { w: 17, h: 42, src: archetype12['18.jpg'] },
        { w: 29, h: 41, src: archetype12['16.jpg'] },
        { w: 46, h: 25, src: archetype12['19.jpg'] },
      ],
      hairstyles: hairstyle12,
    },
  ],
};
