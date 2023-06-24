import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.primary1000};
  margin: 1rem auto;
`;

export const Container = styled.div`
  width: 75%;
  max-width: 65rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33.94rem;
  flex-direction: column;
  gap: 5rem;
  position: relative;
`;

export const TextWrapper = styled.div`
  width: 32.25rem;
  line-height: 3.13rem;
  text-align: center;
  position: relative;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 38.25rem;
  height: 0.3rem;
  outline: none;
  border: none;
  border-radius: 0.63rem;
  padding: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0rem 0.25rem 5.25rem 0rem rgba(0, 0, 0, 0.07);

  &::placeholder {
    font-size: 1.2rem !important;
    font-family: "Poppins";
  }
`;

export const Button = styled.button`
  width: 11.81rem;
  height: 4.5rem;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  font-family: "Poppins";
  font-size: 1rem;
  letter-spacing: 0.1rem;
`;

export const PieChart = styled.div`
  position: absolute;
  right: -3.13rem;
  top: -4.06rem;
`;

export const Start = styled.div`
  position: absolute;
  top: -2.69rem;
  left: 0;
`;
