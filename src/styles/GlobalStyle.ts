import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  *:not(font, i, b) {
    margin: 0;
    padding: 0;
    color: inherit;
    -webkit-font-smoothing: antialiased;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  ::-webkit-scrollbar {
    height: 80%;
    margin-right: 12px;
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 8px;
  }

  html {
    font-size: 62.5%;
    letter-spacing: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul li,
  ol li {
    list-style: none;
  }

  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  input,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    color: inherit;
    font-style: normal;
    font-size: 100%;
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    word-break: inherit;
    word-wrap: inherit;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  input:focus:not(:focus-visible),
  textarea:focus:not(:focus-visible) {
    outline: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }
`;

export default GlobalStyle;
