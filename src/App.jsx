import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import StudyGoalSelector from "./components/StudyGoalSelector";
import ExplorePrograms from "./components/ExplorePrograms";
import TopColleges from "./components/TopColleges";
import CollegeRanking from "./components/CollegeRanking";
import StudyPlacesAndCourses from "./components/StudyPlacesAndCourses";
import CTANewsFooter from "./components/CTANewsFooter";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <StudyGoalSelector />
      <ExplorePrograms />
      <TopColleges />
      <CollegeRanking />
      <StudyPlacesAndCourses />
      <CTANewsFooter />
    </>
  );
}

export default App;
