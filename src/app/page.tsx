import Header from "../components/Header";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <main>
      <Header />
      <Product />
      <Clients />
      <Functions />
    </main>
  );
}
