import "./style/App.css";
import {Header} from "./components/HeaderUI/Header";
import {FirstSection,SecondSection,ThirdSection} from "./components/SectionsUI/Sections";

function App() {
  return (
    <div className="App">
      <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
    </div>
  );
}

export default App;
