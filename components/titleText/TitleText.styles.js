import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 85%;
  max-width: 85rem;
  margin: 5yrem auto;
  display: flex;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 847px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  & > :nth-child(2) {
    width: 40rem;
  }
`;
