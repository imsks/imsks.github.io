import { ThemeProvider } from "styled-components";
import GlobalStyle from "style-components/global";
import { lightTheme } from "style-components/theme";
import Navbar from "components/layouts/Navbar";
import "assets/scss/styles.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
