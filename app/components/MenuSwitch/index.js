import styled from 'styled-components';

const MenuSwitch = styled.div`
    display: flex;
    position: relative;
    margin: 15px auto;
    width: ${(props) => props.switch.length * 250}px;
    background: #eee;
    z-index: -2;
    border-radius: 4px;
    & .case {
        width: ${(props) => 100 / props.switch.length}%;
        color: black;
        text-align: center;
        transition: color .2s ease-in-out;
        padding: 5px 0;
    }
    & .active {
        color: white;
    }
    & .runner {
        background: linear-gradient(-150deg, #FE46F4 0%, #723AAA 100%);
        position: absolute;
        height: 100%;
        width: ${(props) => 100 / props.switch.length}%;
        left: 0;
        transition: transform .2s ease-in-out;
        transform: ${(props) => `translateX(${props.switch.findIndex((elem) => elem.active) * 100}%)`};
        z-index: -1;
        border-radius: 4px;
    }
`;

export default MenuSwitch;
