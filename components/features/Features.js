import FeatureCard from "components/featureCard/FeatureCard";
import { Container, HR, Wrapper } from "./Features.styles";
import { image1, image2, image3, image4 } from "assets";

const Features = () => {
  const list = [
    {
      text: "Web Application",
      image: image3,
      bgColor: "purple100",
    },
    {
      text: "SEO",
      image: image1,
      bgColor: "success50",
    },

    {
      text: "AR/VR Solutions",
      image: image4,
      bgColor: "primary50",
    },
    {
      text: "Mobile Applications",
      image: image2,
      bgColor: "error50",
    },
  ];

  return (
    <Wrapper>
      <Container>
        {list?.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </Container>
      <HR />
    </Wrapper>
  );
};

export default Features;
