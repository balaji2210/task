import Image from "next/image";
import {
  BoxContainer,
  BoxShadow1,
  Container,
  ImageContainer,
  ImageContainer1,
  RoundIcon,
  TextContainer,
  TextIconContainer,
  TextWrapper,
  Wrapper,
} from "./DetailedFeature.styles";
import {} from "assets";
import { Typography } from "components/utils";

const DetailedFeature = ({
  bgColor = "",
  image1 = "",
  image2 = "",
  direction = "",
  name = "",
}) => {
  return (
    <Wrapper>
      <Container direction={direction}>
        <TextContainer>
          <TextIconContainer>
            <RoundIcon bgColor={bgColor}>
              <Image src={image1?.src} height="26" width="26" alt="happy" />
            </RoundIcon>
            <TextWrapper>
              <Typography fontWeight="semiBold">
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography textColor="neutral300">
                Lorem Ipsum is simply dummy text
              </Typography>
            </TextWrapper>
          </TextIconContainer>
          <BoxContainer lineHeight>
            <Typography fontWeight="semiBold" size="Heading5">
              <Typography fontWeight="semiBold" textColor="primary500">
                Lorem Ipsum
              </Typography>{" "}
              is simply dummy text of the printing.
            </Typography>
          </BoxContainer>
          <BoxContainer>
            <Typography textColor="neutral300">
              EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </Typography>
          </BoxContainer>
        </TextContainer>
        {name === "purple" ? (
          <ImageContainer1>
            <Image
              src={image2?.src}
              width={image2.width}
              height={image2?.height}
              alt="largeMobile"
            />
          </ImageContainer1>
        ) : (
          <ImageContainer>
            <Image
              src={image2?.src}
              width="756"
              height="480"
              alt="largeMobile"
            />
          </ImageContainer>
        )}
        {name === "largeMobile" && <BoxShadow1 />}
      </Container>
    </Wrapper>
  );
};

export default DetailedFeature;
