import Header from "../components/Header";
import Features from "../components/Features";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <main>
      <Header />
      <Product />
      <Features />
      <Clients />
      <Functions />
    </main>
  );
}
