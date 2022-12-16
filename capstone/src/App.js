import Register from './Register';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <main className="App">
     <BrowserRouter>
  {/* <AppContainer> */}

      <Routes>
       
        <Route path="/" element={<Login/>} />
        <Route path="/name" element={ <Register/>} />

      </Routes>

      
    </BrowserRouter>

    </main>
  );
}

export default App;
