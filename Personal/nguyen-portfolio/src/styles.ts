import styled from "@emotion/styled";
import { EmotionTheme } from "./App";

export const Wrapper = styled.div(({ theme }: { theme: EmotionTheme }) => ({
  color: theme.font,
  background: theme.background,
}));
