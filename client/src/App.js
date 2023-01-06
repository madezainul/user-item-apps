import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import LearnButton from "./components/LearnButton";
import LearnForms from "./components/LearnForms";

function App() {
  // const NowLoading = () => {
  //   return (
  //     <div>
  //       <h3>Loading data...</h3>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <h1>Belajar React</h1>
      <p>Lorem ipsum is a dummy text</p>
      <hr />
      <div className="container">
        <div className="row">
          <LearnForms />
          <Profile />
        </div>
      </div>

      {/* <LearnButton /> */}
    </div>
  );
}

export default App;
