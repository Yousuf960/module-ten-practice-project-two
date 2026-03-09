import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries';

function App() {

  return (
    <>
    
      <Suspense fallback={"Please wait for loading Country."}>
        <Countries />
      </Suspense>
    </>
  )
}

export default App;
