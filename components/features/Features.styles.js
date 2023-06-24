import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 85rem;
  width: 85%;
  margin: auto;
  height: 10.56rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HR = styled.hr`
  background-color: ${({ theme }) => theme?.colors?.neutral200};
  opacity: 45%;
`;
