import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 85%;
  max-width: 85rem;
  margin: -1rem auto;
  display: flex;
  gap: 2rem;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const TextIconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const RoundIcon = styled.div`
  width: 3.63rem;
  height: 3.63rem;
  border-radius: 50%;
  background-color: ${({ theme, bgColor }) => theme?.colors?.[bgColor]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxContainer = styled.div`
  width: 32.25rem;
  line-height: ${({ lineHeight }) => (lineHeight ? "3.4rem" : "none")};
`;

export const ImageContainer = styled.div``;

export const ImageContainer1 = styled.div`
  width: 25rem;
  position: relative;
  margin-top: -4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BoxShadow1 = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(237, 234, 255) 80px,
    rgba(196, 196, 196, 0) 100%
  );
  position: absolute;
  width: 18.75rem;
  height: 18.75rem;
  bottom: 0;
  right: 0.63rem;
`;
