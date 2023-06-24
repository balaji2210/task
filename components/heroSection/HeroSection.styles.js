import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  background: rgba(16, 144, 203, 0.1);
`;

export const TextImageContainer = styled.div`
  display: flex;
  max-width: 85rem;
  width: 85%;
  margin: auto;
  height: 100vh;
  padding: 10rem 0;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  width: 42.38rem;
  line-height: 4rem;
`;

export const SubTextContainer = styled.div`
  width: 40.38rem;
  line-height: 2.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export const ImageContainer = styled.div`
  margin-top: -16.88rem;
`;

export const RightImage = styled.div`
  position: absolute;
  right: -14.38rem;
`;

export const LeftImage = styled.div`
  position: absolute;
  left: -7.5rem;
  bottom: -2.81rem;
`;

export const BoxShadow1 = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #edeaff 50%,
    hsla(0, 0%, 77%, 0) 100%
  );
  position: absolute;
  top: 0;
  width: 31.25rem;
  height: 31.25rem;
  z-index: -1;
`;

export const BoxShadow2 = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #edeaff 50%,
    hsla(0, 0%, 77%, 0) 100%
  );
  position: absolute;
  top: 0;
  right: 0.63rem;
  width: 31.25rem;
  height: 31.25rem;
  z-index: -1;
`;
