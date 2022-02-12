import styled from "styled-components";
import Clock from "../../assets/icon-clock.svg";

const TimeContainer = styled.div`
  font-size: 16px;
  color: hsl(215, 51%, 70%);
  display: flex;
  vertical-align: middle;

  img {
    align-self: center;
    margin-right: 5px;
  }
`;

interface iTime {
  value: string;
}

const Time = ({ value }: iTime) => {
  return (
    <TimeContainer>
      <img src={Clock} style={{ width: "15px" }} />
      <span>{value} left</span>
    </TimeContainer>
  );
};

export default Time;
