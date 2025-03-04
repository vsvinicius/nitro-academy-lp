import StepOne from "./components/StepOne";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <p className="font-gilroy-extrabold"> Transforme tempo livre </p>
      <p className="font-gilroy-light">Transforme tempo livre</p>
      <p className="font-montserrat-black">Transforme tempo livre</p>
      <p className="font-helvetica"> Transforme tempo livre</p>
      <p className="font-montserrat-light">Transforme tempo livre</p>
      <p className="font-montserrat-regular">Transforme tempo livre</p>
      <StepOne />
      <Header/>
      <Footer/>
    </div>
  );
}
