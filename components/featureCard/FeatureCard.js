import React from "react";
import {
  Container,
  IconContainer,
  TextWrapper,
  Wrapper,
} from "./FeatureCard.styles";
import Image from "next/image";
import { Typography } from "components/utils";

const FeatureCard = ({ item }) => {
  return (
    <Wrapper>
      <Container>
        <IconContainer bgColor={item?.bgColor}>
          <Image src={item?.image?.src} height={40} width={40} alt="web" />
        </IconContainer>
        <TextWrapper>
          <Typography fontWeight="semiBold">{item?.text}</Typography>
          <Typography textColor="neutral500">Lorem Ipsum is simply</Typography>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

export default FeatureCard;
