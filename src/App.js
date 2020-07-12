import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Team from './component/Team';
import MembersList from './component/MembersList'

function App() {
  return (
    <React.Fragment>
          <Header />
       <div className="container">
            <Team />
            <MembersList />
        </div>
    </React.Fragment>
  );
}

export default App;
