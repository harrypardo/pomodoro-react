import React from "react";
import { Container } from '@material-ui/core';
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Container fixed>
      <Counter />
    </Container>
  );
}

export default App;
