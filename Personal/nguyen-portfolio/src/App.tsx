import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Landing from "./sections/landing";
import Switch from "./sections/switch";
import { Wrapper } from "./styles";

const lightTheme = {
  background: "#fff",
  font: "#444452",
  primary: "#007bff",
};

const darkTheme = {
  background: "#171c28",
  font: "#e7e7e7",
  primary: "#007bff",
};

export type EmotionTheme = typeof lightTheme;

function App() {
  const [isDarkmode, setIsDarkMode] = useState(false);
  const theme = isDarkmode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper theme={theme}>
        <Switch
          value={isDarkmode}
          onChange={() => setIsDarkMode(!isDarkmode)}
        />
        <Landing />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
