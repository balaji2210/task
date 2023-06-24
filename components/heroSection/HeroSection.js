import { Button, Typography } from "components/utils";
import {
  BoxShadow,
  BoxShadow1,
  BoxShadow2,
  ButtonWrapper,
  Container,
  ImageContainer,
  LeftImage,
  RightImage,
  SubTextContainer,
  TextContainer,
  TextImageContainer,
  TextWrapper,
  Wrapper,
} from "./HeroSection.styles";
import { hero, item, item1 } from "assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Wrapper>
      <Container>
        <TextImageContainer>
          <TextContainer>
            <TextWrapper>
              <Typography size="Heading3" fontWeight="semiBold">
                Experienced{" "}
                <Typography textColor="primary500"> mobile and web </Typography>{" "}
                applications and website builders measuring.
              </Typography>
            </TextWrapper>
            <SubTextContainer>
              <Typography size="Paragraph2" textColor="neutral400">
                EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.{" "}
              </Typography>
            </SubTextContainer>
            <ButtonWrapper>
              <Button size="md">Contact us</Button>
              <Button variant="outlined" size="md">
                view more
              </Button>
            </ButtonWrapper>
          </TextContainer>
          <ImageContainer>
            <Image src={hero?.src} width="700" height="700" alt="hero" />
          </ImageContainer>
          <RightImage>
            <Image src={item?.src} width="500" height="500" alt="item" />
          </RightImage>
          <LeftImage>
            <Image src={item1?.src} width="300" height="300" alt="item1" />
          </LeftImage>
        </TextImageContainer>
        <BoxShadow1 />
        <BoxShadow2 />
      </Container>
    </Wrapper>
  );
};

export default HeroSection;
