import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'

import ClassComponentState from './Hooks/components/ClassComponentState'
import FunctionalComponentHooks from './Hooks/components/FunctionalComponentHooks'
import ClassComponentStateWithContext from './Contexts/components/ClassComponentStateWithContext'
import { MyProvider } from "./Contexts/contexts/MyProvider"

import Nav from "./Contexts/components/Nav"

function App() {
  const DEMO = "jest"
  
  if (DEMO === "jest") return <Dashboard />

  return (
    <MyProvider>
      <div className="App">
        <Nav />
        <div className="body">
          <h1>Hooks</h1>
          <h2>Class Component</h2>
          <ClassComponentState defaultName={"Joe"} />


          <div>_______________________________</div>

          <h2>Functional Component with Hooks</h2>
          <FunctionalComponentHooks defaultName={"Joe"} />

          <div>_______________________________</div>
          <div>_______________________________</div>
          <div>_______________________________</div>

          <h1>Context + Providers</h1>
          <h2>Class Component with Context</h2>

          <ClassComponentStateWithContext />
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
