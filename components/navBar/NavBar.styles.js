import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${({ theme }) => theme?.shadows?.shadow2};
  position: sticky;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100rem;

  padding: 1.5rem 2.31rem;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  cursor: pointer;
`;

export const HomeWrapper = styled.div`
  position: relative;
`;

export const GreenBox = styled.div`
  width: 0.5rem;
  position: absolute;
  height: 0.5rem;
  border-radius: 50%;
  top: -0.53rem;
  background-color: ${({ theme }) => theme?.colors?.success300};
`;
