import "./App.css";
import ColorChange from "./ColorChange";
import DidMount from "./DidMount";
// import Loggin from "./Login";
import Member from "./Member";

function App() {
function memberData(){
  alert('Ok I am from App');
}
  return (
    <div className="App">
      {/* <Loggin /> */}

      <Member data={memberData} />
      <ColorChange />
      <DidMount />
    </div>
    
  );
}

export default App;
