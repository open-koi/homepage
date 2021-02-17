import styled from "styled-components";
import { colors, mixins } from "theme";

export const HomeContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.pink};
  display: flex;
  justify-content: center;
  padding: 18px 0px 35px;
  @media (max-width: ${mixins.md}px) {
    padding: 24px 15px 56px;
  }
  @media (max-width: ${mixins.sm}px) {
    padding: 24px 15px 56px;
  }
`;
