import { Button, Typography } from "components/utils";
import {
  Container,
  GreenBox,
  HomeWrapper,
  LogoContainer,
  NavItemsContainer,
  Wrapper,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <Typography
            textColor="primary500"
            fontWeight="semiBold"
            size="Heading6"
          >
            LOGO
          </Typography>
        </LogoContainer>
        <NavItemsContainer>
          <HomeWrapper>
            <Typography textColor="primary110" size="Paragraph3">
              Home
            </Typography>
            <GreenBox />
          </HomeWrapper>
          <Typography size="Paragraph3">About us</Typography>
          <Typography size="Paragraph3">Services</Typography>
          <Typography size="Paragraph3">Blog</Typography>
          <Button size="md">Contact us</Button>
        </NavItemsContainer>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
