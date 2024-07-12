import "./style/App.css";
import Router from "./Router";
import Layouts from "./layout/Layout";

function App() {
  return (
    <Layouts>
      <Router />
    </Layouts>
  );
}

export default App;
