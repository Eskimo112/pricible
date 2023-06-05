import { CSSObject, useTheme } from "@emotion/react";
import { EmotionTheme } from "../../App";
import { Style } from "../../types/style";

const useStyles = (theme: EmotionTheme): Style => ({
  container: {
    padding: "7.5rem 6.25rem",
    fontWeight: 300,
    fontSize: "2.5rem",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-around",
  },
  h1: {},
  h2: {
    maxWidth: "700px",
  },
  name: {
    fontWeight: "bold",
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 400,
  },
  email: {
    margin: "0 1.5rem",
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    boxShadow: `inset 0 -3px 0 ${theme.primary}`,
    display: "inline-block",
    padding: "2px 3px",
    ":hover": {
      boxShadow: `inset 0 -2rem 0 0 ${theme.primary}`,
      color: "#fff",
    },
  },
});

function Landing() {
  const theme = useTheme();
  const styles = useStyles(theme as EmotionTheme);
  return (
    <header css={styles.container} className="section pt-40">
      <h1 css={styles.h1}>Hello</h1>
      <h2 css={styles.h2}>
        I'm <span css={styles.name}>Pham Nguyen</span>, a engineer-minded
        front-end software developer focused on building seemless interfaces &
        experiences
      </h2>
      <h3 css={styles.h3}>
        Get in touch
        <span css={styles.email}>trungnguyengl176@gmail.com</span>
      </h3>
    </header>
  );
}

export default Landing;
