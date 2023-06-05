import { useTheme } from "@emotion/react";
import { EmotionTheme } from "../../App";
import { MoonIcon } from "../../assets/icons/Moon";
import { SunIcon } from "../../assets/icons/Sun";
import { Style } from "../../types/style";

const useStyles = (theme: EmotionTheme): Style => ({
  container: {
    position: "absolute",
    right: "3.2rem",
    top: "1.75rem",
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
  },
  label: {
    position: "relative",
    display: "inline-block",
    width: "2.8rem",
    height: "1.6rem",
  },

  input: {
    opacity: 0,
    width: 0,
    height: 0,
    ":checked + span": {
      backgroundColor: theme.primary,
    },
    ":focus + .slider": {
      boxShadow: `0 0 1px ${theme.primary}`,
    },
    ":checked + span:before": {
      transform: "translateX(1.2rem)",
    },
  },

  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "grey",
    transition: ".4s",
    borderRadius: "2rem",
    ":before": {
      position: "absolute",
      content: "''",
      height: "1.2rem",
      width: "1.2rem",
      left: "3px",
      bottom: "3px",
      backgroundColor: "white",
      transition: ".4s",
      borderRadius: "2rem",
    },
  },
});

function Switch({ onChange, value }: { onChange: () => void; value: boolean }) {
  const theme = useTheme() as EmotionTheme;
  const styles = useStyles(theme);
  return (
    <div css={styles.container}>
      {SunIcon(theme.font, 18)}
      <label css={styles.label}>
        <input
          css={styles.input}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span css={styles.slider}></span>
      </label>
      {MoonIcon(theme.font, 18)}
    </div>
  );
}

export default Switch;
