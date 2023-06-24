import { Typography } from "components/utils";
import { Container, ImageContainer, TextWrapper, Wrapper } from "./Logo.styles";
import Image from "next/image";
import { beneShop, caspio, hyperGrid, leoTrippi } from "assets";

const Logos = () => {
  const imageList = [beneShop, caspio, hyperGrid, leoTrippi];

  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Typography size="Heading6" fontWeight="semiBold">
            You will be in good Company
          </Typography>
        </TextWrapper>
        <ImageContainer>
          {imageList?.map((image, index) => (
            <Image
              key={index}
              src={image?.src}
              width={image?.width}
              height={image?.height}
              alt="company"
            />
          ))}
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default Logos;
