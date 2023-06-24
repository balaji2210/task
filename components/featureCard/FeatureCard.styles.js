import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 5.19rem;
  height: 5.13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, bgColor }) => theme?.colors?.[bgColor]};
  border-radius: 1.25rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
