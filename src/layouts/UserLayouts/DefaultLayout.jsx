import { Outlet } from "react-router-dom";
import {Header , Footer} from "../../components";
import { Container, Content } from "./styles";

export function DefaultLayout() {
  return (
    <Container>
      <Header />

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Container>
  );
}