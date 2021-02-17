import { createGlobalStyle } from 'styled-components';
import { fonts } from 'theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.main};
    margin: 0;
    height: 100%;
  }
  .App {
    height: 100vh;
  }
  .cursor {
    cursor: pointer;
  }
  h1 {
    font-size: 48px;
    font-family: ${fonts.main};
    font-weight: 700;
  }
  h2 {
    font-size: 32px;
    font-family: ${fonts.main};
    font-weight: 700;
  }
  h3 {
    font-size: 24px;
    font-family: ${fonts.main};
  }
  h6 {
    font-size: 18px;
    font-family: ${fonts.main};
  }
  p {
    font-size: 15px;
    font-family: ${fonts.main};
  }
  button, .button {
    font-size: 16px;
    font-family: ${fonts.main};
    font-weight: 700;
    border: none;
    transition: opacity .45s cubic-bezier(0.25, 1, 0.33, 1), transform .45s cubic-bezier(0.25, 1, 0.33, 1), border-color .45s cubic-bezier(0.25, 1, 0.33, 1), color .45s cubic-bezier(0.25, 1, 0.33, 1), background-color .45s cubic-bezier(0.25, 1, 0.33, 1), box-shadow .45s cubic-bezier(0.25, 1, 0.33, 1);
    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.16);
      transform: translateY(-3px);
    }
    &.disabled:hover {
      transform: unset;
    }
  }
`;

export default GlobalStyle;