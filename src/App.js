import "./style/App.css";
import {Header} from "./components/HeaderUI/Header";
import {FirstSection,SecondSection,ThirdSection,FourthSection, FifthSection, SixthSection, SeventhSection, EighthSection} from "./components/SectionsUI/Sections";

function App() {
  return (
    <div className="App">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
        <SeventhSection/>
        <EighthSection/>
    </div>
  );
}

export default App;
