import { Typography } from "components/utils";
import {
  About,
  Container,
  FooterText,
  HR,
  IconContainer,
  IconWrapper,
  LogoWrapper,
  TextWrapper,
  Wrapper,
} from "./Footer.styles";
import { faceBook, insta, linkedIn, twitter } from "assets";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Typography
            size="Paragraph1"
            fontWeight="bold"
            textColor="primary700"
          >
            LOGO
          </Typography>
          <TextWrapper>
            <Typography size="Paragraph1" textColor="neutral600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </TextWrapper>
          <Typography textColor="neutral600" size="Paragraph1">
            @Lorem
          </Typography>
        </LogoWrapper>
        <About>
          <Typography size="Paragraph1" fontWeight="semiBold">
            About us
          </Typography>
          {["Lorem", "Portfolio", "Careers", "Contact us"]?.map(
            (item, index) => (
              <Typography textColor="neutral600" key={index}>
                {item}
              </Typography>
            )
          )}
        </About>
        <LogoWrapper>
          <Typography size="Paragraph1" fontWeight="bold">
            Contact us
          </Typography>
          <TextWrapper>
            <Typography size="Paragraph1" textColor="neutral600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </TextWrapper>
          <Typography textColor="neutral600" size="Paragraph1">
            +908 89097 890
          </Typography>
        </LogoWrapper>
        <IconWrapper>
          {[faceBook, insta, twitter, linkedIn]?.map((image, index) => (
            <IconContainer key={index}>
              <Image
                src={image?.src}
                width={image?.width}
                height={image?.height}
                alt="socials"
              />
            </IconContainer>
          ))}
        </IconWrapper>
      </Container>
      <HR />
      <FooterText>
        <Typography textColor="neutral500">
          Copyright ® 2021 Lorem All rights Rcerved
        </Typography>
      </FooterText>
    </Wrapper>
  );
};

export default Footer;
