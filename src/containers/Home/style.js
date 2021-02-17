import styled from "styled-components";
import { colors, mixins } from "theme";

export const HomeContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.pink};
  display: flex;
  justify-content: center;
  .home-section {
    width: 100%;
    &.home-header-section {
      background-color: ${colors.blueLight};
    }
  }
  @media (max-width: ${mixins.md}px) {
  }
  @media (max-width: ${mixins.sm}px) {
  }
`;
