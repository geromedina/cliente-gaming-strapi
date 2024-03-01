import { Container } from "semantic-ui-react";
import { HeaderCart } from "@/components/Layout";
import { Footer } from "@/components/Layout";
import { Separator } from "@/components/Shared";

export function CartLayout(props) {
  const { children } = props;

  return (
    <>
      <HeaderCart />
      <Separator height={150} />
      <Container>{children}</Container>
      <Separator height={70} />
      <Footer />
    </>
  );
}
