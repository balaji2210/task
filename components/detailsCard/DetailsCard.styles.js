import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 85%;
  max-width: 85rem;
  margin: 1rem auto;
`;

export const Box = styled.div`
  width: 35.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem;
  color: ${({ bgColor }) => (bgColor === "neutral50" ? "inherit" : "white")};
  gap: 2rem;
  border-radius: 1.25rem;
  background-color: ${({ theme, bgColor }) => theme?.colors?.[bgColor]};
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 365px;
  height: 84px;
  line-height: 3rem;
  text-align: center;

  & > * {
    font-weight: 700;
  }
`;

export const BellIcon = styled.div`
  position: absolute;
  top: -80px;
  right: -30px;
`;
