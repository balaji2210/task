import Image from "next/image";
import { Container, VectorImage, Wrapper } from "./DetailsWrapper.styles";

import DetailedFeature from "components/detailedFeature/DetailedFeature";

import { happy, largeMobile, mobileScreen, vector, vrImage } from "assets";

const DetailsWrapper = () => {
  return (
    <Wrapper>
      <Container>
        <DetailedFeature
          bgColor="success300"
          image1={happy}
          image2={largeMobile}
          direction="row"
          name="largeMobile"
        />
        <div />
        <div />

        <DetailedFeature
          bgColor="primary110"
          image1={happy}
          image2={mobileScreen}
          direction="row-reverse"
        />
        <div />
        <div />
        <div />
        <div />
        <div />

        <DetailedFeature
          bgColor="purple200"
          image1={happy}
          image2={vrImage}
          direction="row"
          name="purple"
        />
        <VectorImage>
          <Image src={vector?.src} width="870" height="1300" alt="vector" />
        </VectorImage>
      </Container>
    </Wrapper>
  );
};

export default DetailsWrapper;
