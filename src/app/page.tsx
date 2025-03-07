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
import Script from "next/script";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=14c243f1-7516-4bf0-bb6f-b40034ac1926" />
      <Header />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
      <StepSix />
      <StepSeven />
      <StepEight />
      <div className="bg-theme-orange">
        <StepNine />
        <StepTen />
      </div>
      <StepEleven />
      <StepTwelve />
      <Footer />
    </div>
  );
}
