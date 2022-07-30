import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [slide, setSlide] = useState(0);

  const handlePrev = (e) => {
    setSlide(slide - 1);
  };
  const handleNext = (e) => {
    setSlide(slide + 1);
  };
  return (
    <div className="App">
      <h1 data-testid="header">Slides </h1>

      <Slide title={data[slide].title} description={data[slide].description} />

      <button disabled={slide === 0} onClick={handlePrev} data-testid="prev">
        Prev
      </button>
      <button disabled={slide === 2} onClick={handleNext} data-testid="next">
        Next
      </button>
    </div>
  );
}
