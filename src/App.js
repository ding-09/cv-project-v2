import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      <div className="gen-info-section">
        <GeneralInfo />
      </div>
      <div className="work-section">
        <Work />
      </div>
    </div>
  );
}

export default App;
