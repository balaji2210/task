import { ThemeProvider } from "styled-components";

import * as theme from "./styles";

import GlobalStyles from "./global";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
