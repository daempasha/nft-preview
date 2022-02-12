import styled from "styled-components";
import Author from "../Author/author.component";
import EthereumCostDisplay from "../EthereumCostDisplay/ethereumcostdisplay.component";
import Time from "../Time/time.component";

const CardContainer = styled.div`
  background-color: hsl(216, 50%, 16%);
  color: hsl(0, 0%, 100%);
  padding: 1em;
  border-radius: 1em;
  width: 300px;
  font-size: 18px;

  img {
    width: 300px;
    border-radius: 0.5em;
  }

  .text {
    text-align: left;
  }

  .description {
    color: hsl(215, 51%, 70%);
  }

  hr {
    margin: 1em 0;
    border: 1px solid hsl(215, 32%, 27%);
  }
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const Title = styled.h1`
  font-size: 22px;

  :hover {
    color: hsl(178, 100%, 50%);
    cursor: pointer;
  }
`;

interface iCard {
  id: string;
  image: string;
  title: string;
  description: string;
  cost: string;
  expiryDate: string;
  creator: string;
  creatorImage: string;
}

const Card = ({
  id,
  image,
  title,
  description,
  cost,
  expiryDate,
  creator,
  creatorImage,
}: iCard) => {
  return (
    <CardContainer>
      <img src={image} />
      <main className="text">
        <Title>
          {title} #{id}
        </Title>
        <div className="description">{description}</div>
      </main>
      <MetaContainer>
        <EthereumCostDisplay value={cost} />
        <Time value={expiryDate} />
      </MetaContainer>

      <hr></hr>

      <Author name={creator} image={creatorImage} />
    </CardContainer>
  );
};

export default Card;
