import React, { Component } from 'react';
import styled from 'styled-components';
import { IMaskMixin } from 'react-imask';

import PropTypes from 'prop-types';
import axios from 'axios';

import Text from '../Text';
import { palette } from '../../utils/constants';

const StyledForm = styled.form`
  max-width: 300px;
  min-height: 310px;
  padding: 30px;
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.20);
  margin: 50px auto;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: baseline;
  justify-content: center;
  max-width: 300px;
  min-height: 310px;
  padding: 30px;
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.20);
  margin: 50px auto;
`;

const StyledInput = styled.input`
  border: 4px solid ${palette.gray};
  width: 100%;
  padding: 8px 10px;
  outline: none;
  transition: border .2s;
  &:hover {
    border: 4px solid ${palette.halfDark};
  }
  &:focus {
    border: 4px solid ${palette.accent};
  }
`;

const StyledButton = styled.button`
  color: #fff;
  background: linear-gradient(-150deg, #FE46F4 0%, #723AAA 100%);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  padding: 8px 20px;
  margin: 20px auto 0 auto;
  display: table;
  line-height: 24px;
  transform: skew(-21deg);
  &:visited { color: #fff; }
  &:hover {
    background: linear-gradient(-165deg, #FE46F4 0%, #723AAA 100%);
    }
  & > span { display: inline-block; transform: skew(21deg); }
`;

const ErrorSpan = styled.span`
  color: red;
`;

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => (
  <StyledInput
    {...props}
    innerRef={inputRef}  // bind internal input (if you use styled-components V4, use "ref" instead "innerRef")
  />
));

class FormComponent extends Component {

  state = {
    values: {
      email: '',
      phone: '',
    },
    isValid: {
      email: false,
      phone: false,
    },
    isTouched: {
      email: false,
      phone: false,
    },
    isSent: false,
    error: false,
  }

  isEmail = (input) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(input);
  }

  isPhone = (input) => {
    const pattern = '';
    return pattern.test(input);
  }

  changeHandler = (event, name) => {
    const value = event.target.value;

    const isTouched = { ...this.state.isTouched };
    isTouched[name] = true;

    const isValid = { ...this.state.isValid };
    isValid[name] = (name === 'email') ? this.isEmail(value) : this.isPhone(value);

    const values = { ...this.state.values };
    values[name] = value;

    this.setState({ values, isTouched, isValid });
  }

  restart = () => {
    this.setState({
      isValid: {
        email: true,
        phone: true,
      },
      isTouched: {
        email: true,
        phone: true,
      },
      isSent: false,
      error: false,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.isValid) {
      // console.log(this.props.selArchetypes);
      const newArch = delete this.props.selArchetype[items]; // eslint-disable-line
      console.log(newArch);
      const data = {
        archetype: this.props.selArchetype,
        color: this.props.selColor,
        mail: this.state.values.email,
        phone: this.state.values.phone,
      };
      axios.post('http://vesna.klim.me/api.php', data)// https://react-my-burger-ee430.firebaseio.com/vesna.json
      .then((response) => {
        console.log(response);
        this.setState({ isSent: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isSent: true, error: true });
      });
      axios.get(`http://instnakrutka.ru/new/bot/notification.php?text=${JSON.stringify(data)}`);
      // .then((response) => {
      //   console.log(response);
      //   this.setState({ isSent: true });
      // })
      // .catch((err) => {
      //   console.log(err);
      //   this.setState({ isSent: true, error: true });
      // });
    }
  }

  render() {
    // console.log(this.props.selArchetypes.forEach((arch) => delete arch.items));
    let form = (
      <StyledForm onSubmit={this.submitHandler} >
        <Text type="subtitle" margin="0 0 6px 0">Оставьте почту</Text>
        <Text margin="0 0 10px 0">Мы вышлем туда результат и описания ваших архетипов</Text>
        <label htmlFor>
          <Text margin="0 0 6px 0">E-mail:</Text>
          <StyledInput
            placeholder="mail@mail.ru"
            name="email"
            value={this.state.values.email}
            onChange={(event) => this.changeHandler(event, 'email')}
          />
          {!this.state.isValid.email && this.state.isTouched.email ? <ErrorSpan>Введите правильную почту</ErrorSpan> : null}
        </label>
        <label htmlFor>
          <Text margin="0 0 6px 0">Телефон</Text>
          <MaskedStyledInput
            mask="+7 000 000 00 00"
            placeholder="+7 000 000 00 00"
            name="phone"
            value={this.state.values.phone}
            onChange={(event) => this.changeHandler(event, 'phone')}
          />
          {!this.state.isValid.phone && this.state.isTouched.phone ? <ErrorSpan>Введите правильный телефон</ErrorSpan> : null}
        </label>
        <StyledButton><span>Отправить!</span></StyledButton>
      </StyledForm>
    );
    // let form = null;
    if (this.state.isSent) {
      if (this.state.error) {
        form = (
          <InfoBlock>
            <Text type="subtitle" margin="0 0 6px 0">Ошибка</Text>
            <Text type="mailTitle">Что-то пошло не так( Попробуйте еще раз</Text>
            <StyledButton onClick={this.restart}><span>Попробовать еще раз</span></StyledButton>
          </InfoBlock>
        );
      } else {
        form = (
          <InfoBlock>
            <Text type="subtitle" margin="0 0 6px 0">Успех</Text>
            <Text type="mailTitle">Спасибо! Письмо успешно отправлено</Text>
          </InfoBlock>
        );
      }
    }
    return form;
  }
}
FormComponent.propTypes = {
  selArchetype: PropTypes.any,
  selColor: PropTypes.any,
};

export default FormComponent;
