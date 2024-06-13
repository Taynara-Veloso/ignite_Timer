import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariantes = {
  primary: 'purple',
  secondary: 'bluelight',
  warning: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 10rem;
  height: 2rem;

  ${props => {
    return css` 
      background-color: ${buttonVariantes[props.variant]}
    `
  }}
`
