import Footer from "@/components/Footer";
import Header from "@/components/Header";

import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import StepSix from "@/components/StepSix";
import StepSeven from "@/components/StepSeven";
import StepEight from "@/components/StepEight";
import StepNine from "@/components/StepNine";
import StepTen from "@/components/StepTen";
import StepEleven from "@/components/StepEleven";
import StepTwelve from "@/components/StepTwelve";

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
      <StepThree />
      <StepFour />
      <StepFive />
      <StepSix />
      <StepSeven />
      <StepEight />
      <StepNine />
      <StepTen />
      <StepEleven />
      <StepTwelve />
      {/* 
      <StepThirteen /> 
      */}
      <Footer />
    </>
  );
}
