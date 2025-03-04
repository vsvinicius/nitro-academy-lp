import StepOne from "@/components/StepOne";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StepFour from "@/components/StepFour";
import StepTwo from "@/components/StepTwo";
import StepFive from "@/components/StepFive";

export default function Home() {
  return (
    <>
      {/* <p className="font-gilroy-extrabold"> Transforme tempo livre </p>
      <p className="font-gilroy-light">Transforme tempo livre</p>
      <p className="font-montserrat-black">Transforme tempo livre</p>
      <p className="font-helvetica"> Transforme tempo livre</p>
      <p className="font-montserrat-light">Transforme tempo livre</p>
      <p className="font-montserrat-regular">Transforme tempo livre</p> */}
      <Header />
      <StepOne />
      <StepTwo />
      <StepFour />
      <StepFive />
      <Footer />
    </>
  );
}
