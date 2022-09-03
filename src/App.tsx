import Header from "./components/Header";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      {/* <Cards /> */}
      <Home />
    </Container>
  );
}
