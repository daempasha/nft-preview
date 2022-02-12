import styled from "styled-components";

interface iAuthor {
  name: string;
  image: string;
}

const AuthorContainer = styled.div`
  font-size: 14px;
  color: hsl(215, 51%, 70%);
  display: flex;
  align-items: center;

  .author {
    color: #fff;

    :hover {
      color: hsl(178, 100%, 50%);
      cursor: pointer;
    }
  }

  img {
    border-radius: 50% !important;

    border: 2px solid #fff;

    margin-right: 1em;
  }
`;

const Author = ({ name, image }: iAuthor) => {
  return (
    <AuthorContainer>
      <img src={image} style={{ width: "30px" }} />
      <div>
        Creation of <span className="author">{name}</span>{" "}
      </div>
    </AuthorContainer>
  );
};

export default Author;
