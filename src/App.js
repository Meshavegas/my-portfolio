import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { TopBar } from "./Composant/TopBar";
import Sumaryse from "./Composant/Sumaryse";
import { Service } from "./Composant/Service";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Sumaryse />
      <Service />
    </div>
  );
}

export default App;
