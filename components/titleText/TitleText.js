import { Typography } from "components/utils";
import { Container, TextWrapper, Wrapper } from "./TitleText.styles";

const TitleText = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Typography size="Heading4" fontWeight="semiBold">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
          <Typography size="Paragraph1" textColor="neutral300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </Typography>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

export default TitleText;
