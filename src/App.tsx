import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Card from "./components/Card/card.component";

import EquilibriumImage from "./assets/image-equilibrium.jpg";
import Avatar from "./assets/image-avatar.png";
const MainContainer = styled.div`
  background-color: hsl(217, 54%, 11%);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Card
          key="3429"
          id="3429"
          image={EquilibriumImage}
          title="Equilibrium"
          cost={"0.041"}
          description="Our Equilibrium collection promotes balance and calm."
          expiryDate="3 days"
          creator="John Doe"
          creatorImage={Avatar}
        />
      </MainContainer>
    </div>
  );
}

export default App;
