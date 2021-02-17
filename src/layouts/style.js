import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh);
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  .page-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
