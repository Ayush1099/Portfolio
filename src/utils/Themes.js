import styled from "styled-components";

export const darkTheme = {
  bg: "#1C1C27", // Dark background
  bgLight: "#1C1E27", // Slightly lighter background
  primary: "#FF6B6B", // Primary color (red)
  text_primary: "#F2F3F4", // Primary text color
  text_secondary: "#b1b2b3", // Secondary text color
  card: "#171721", // Dark card background
  card_light: "#191924", // Slightly lighter card background
  button: "#FF6B6B", // Button color (matching primary)
  white: "#FFFFFF",
  black: "#000000",
}

export const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

export const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`