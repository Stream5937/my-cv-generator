import { useState } from 'react'
import './App.css'
import Page_Container from './components/pageContainer.jsx'

function App() {
  const [clearData, setClearData] = useState(false);

  function f_clearData () {
    setClearData(true); 
    window.location.reload(false);
  }

  return (
    <> 
    <div className='outer_container'>
      <div className='container'>
        <Page_Container 
          clearForm= {clearData}/>
        <div className="card">
          <button onClick={() => f_clearData()}>
            Clear all
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
