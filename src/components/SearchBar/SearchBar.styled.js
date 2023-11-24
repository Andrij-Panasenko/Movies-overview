import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  color: black;
  left: 15px;
  top: 15px;
  font-weight: 500;
  font-size: 20px;
  pointer-events: none;
  transition: transform 250ms linear, color 250ms linear;
`;

export const Input = styled.input`
  display: inline-block;
  font: inherit;
  outline: transparent;
  font-size: 20px;
  border-radius: 10px;
  width: 600px;
  height: 50px;
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 105px;
  padding-left: 15px;

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-150%);
    color: #ffffff;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
  width: 100px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  background-color: #ffd466; /* Фіолетовий фон */
  color: #1e1f27; /* Світлий текст */
`;


export const ButtonLabel = styled.span``;
