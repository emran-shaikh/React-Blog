import "./App.css";
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
    </div>
    
  );
}

export default App;
