import BreadCrambs from "./components/BreadCrambs";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import FooterMini from "./components/FooterMini";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import SliderList from "./components/SliderList";


function App() {
  return (
    <>
      <section className="bg-[#202024]">
        <Footer />
      </section>
      <section className=" bg-[#000] mb-[100px]">
        <Header />
        <BreadCrambs />
        <Contacts />
        <FooterMini/>
        <ProductDetail/>
         <SliderList/>
      </section>
    </>
  );
}

export default App;
