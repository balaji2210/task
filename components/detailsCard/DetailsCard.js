import { Button, Typography } from "components/utils";
import {
  BellIcon,
  Box,
  Container,
  TextWrapper,
  Wrapper,
} from "./DetailsCard.styles";
import Image from "next/image";
import { Bell } from "assets";

const DetailsCard = ({ bgColor = "" }) => {
  return (
    <Wrapper>
      <Container>
        <Box bgColor={bgColor}>
          <TextWrapper>
            <Typography textAlign="center" size="Heading5">
              Lorem Ipsum is simply dummy text.
            </Typography>
          </TextWrapper>
          <Typography>
            EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </Typography>
          <Button size="md">View More</Button>
          {bgColor === "primary950" && (
            <BellIcon>
              <Image src={Bell?.src} width="150" height="150" alt="bell" />
            </BellIcon>
          )}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default DetailsCard;
