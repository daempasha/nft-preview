import styled from "styled-components";
import EthereumIcon from "../../assets/icon-ethereum.svg";

const EthereumContainer = styled.div`
  color: hsl(178, 100%, 50%);
  font-weight: 600;
  font-size: 16px;

  display: flex;
  img {
    align-self: center;
    margin-right: 5px;
  }
`;

interface iEthereumCostDisplay {
  value: string;
}

const EthereumCostDisplay = ({ value }: iEthereumCostDisplay) => {
  return (
    <EthereumContainer>
      <img src={EthereumIcon} style={{ width: "10px" }} />
      <span>{value} ETH</span>
    </EthereumContainer>
  );
};

export default EthereumCostDisplay;
