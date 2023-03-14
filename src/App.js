import "./style/App.css";
import {Header} from "./components/HeaderUI/Header";
import {FirstSection,SecondSection,ThirdSection,FourthSection, FifthSection, SixthSection} from "./components/SectionsUI/Sections";

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </div>
  );
}

export default App;
