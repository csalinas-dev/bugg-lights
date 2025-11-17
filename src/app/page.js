import Image from "next/image";
import styles from "./page.module.css";
import Splash from "../components/Splash";
import FoodDonationCallout from "../components/FoodDonationCallout";
import PlanYourVisit from "../components/PlanYourVisit";
import Sponsorship from "../components/Sponsorship";
import MiniGallery from "../components/MiniGallery";
import RulesCourtesies from "../components/RulesCourtesies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ padding: '0 16px' }}>
      <Splash />
      <FoodDonationCallout />
      <PlanYourVisit />
      <Sponsorship />
      <MiniGallery />
      <RulesCourtesies />
      <Footer />
    </div>
  );
}
