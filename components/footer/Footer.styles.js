import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 85%;
  max-width: 85rem;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) > span:nth-child(1) {
    font-weight: 900 !important;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  width: 23.25rem;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
  flex-direction: column-reverse;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);
`;

export const HR = styled.hr`
  background-color: ${({ theme }) => theme?.colors?.neutral200};
  opacity: 45%;
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
