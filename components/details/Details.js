import DetailsCard from "components/detailsCard/DetailsCard";
import { Container, Wrapper } from "./Details.styles";

const Details = () => {
  return (
    <Wrapper>
      <Container>
        <DetailsCard bgColor="neutral50" />
        <DetailsCard bgColor="primary950" />
      </Container>
    </Wrapper>
  );
};

export default Details;
