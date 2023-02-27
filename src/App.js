import "./style/App.css";
import {Header} from "./components/HeaderUI/Header";
import {FirstSection,SecondSection,ThirdSection,FourthSection} from "./components/SectionsUI/Sections";

function App() {
  return (
    <div className="App">
      <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
    </div>
  );
}

export default App;
