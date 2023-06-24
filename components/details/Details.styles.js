import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 85%;
  max-width: 85rem;
  margin: 12rem auto;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) {
    & .MuiButtonBase-root {
      background-color: white !important;
      color: ${({ theme }) => theme?.colors?.primary950} !important;
    }
  }
`;
