import { Typography } from "components/utils";
import {
  Button,
  Container,
  Input,
  InputButtonWrapper,
  PieChart,
  Start,
  TextWrapper,
  Wrapper,
} from "./Subscribe.styles";
import Image from "next/image";
import { Star, pieChart } from "assets";

const Subscribe = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Typography size="Heading5" fontWeight="semiBold">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
          <PieChart>
            <Image
              src={pieChart?.src}
              width={pieChart?.width}
              height={pieChart?.height}
              alt="PerChart"
            />
          </PieChart>
        </TextWrapper>
        <InputButtonWrapper>
          <Input placeholder="Enter your email" />
          <Button>SUBSCRIBE</Button>
        </InputButtonWrapper>
        <Start>
          <Image
            src={Star?.src}
            width={Star?.width}
            height={Star?.height}
            alt="Star"
          />
        </Start>
      </Container>
    </Wrapper>
  );
};

export default Subscribe;
