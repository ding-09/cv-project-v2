import './App.css';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Work from './components/WorkHistory/Work';
import Education from './components/EducationHistory/Education';
import SavePageBtn from './components/SavePageBtn';

function App() {
  return (
    <div className="app">
      <div className="gen-info-section">
        <GeneralInfo />
      </div>
      <div className="work-section">
        <Work />
      </div>
      <div className="education-section">
        <Education />
      </div>
      <div className="save-cv-container">
        <SavePageBtn />
      </div>
    </div>
  );
}

export default App;
