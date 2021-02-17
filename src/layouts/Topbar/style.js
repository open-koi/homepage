import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { colors } from "theme";

export const TopbarContainer = styled(Navbar)`
  width: 100%;
  background: transparent;
  /* box-shadow: 0px 3px 6px #00000029; */
  .navbar-brand {
    color: ${colors.blue};
  }
  .navbar-toggler {
    border-color: transparent;
    color: ${colors.dark} !important;
  }
  .navbar-collapse {
    .navbar-nav {
      a {
        color: ${colors.blueDark};
        font-weight: 700;
        font-size: 16px;
        align-self: center;
        margin-left: 48px;
        &.btn-download {
          background: ${colors.blueDark};
          border-radius: 48px;
          padding: 2px 16px;
          color: ${colors.white};
        }
      }
    }
  }
  @media (max-width: 767px) {
    .navbar-collapse {
      .navbar-nav {
        a {
          margin-left: 0px;
          align-self: flex-start;
          margin-bottom: 5px;
        }
      }
    }
  }
`;
