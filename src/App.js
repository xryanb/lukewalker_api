import {Link,Routes,Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Link to='/form'>Forms</Link>
      

<Routes>
<Route path='/form' element={<Form/>}/>
  <Route path='/:name/:num' element={<Results/>}/>
  <Route path='/error' element={<Error/>}/>
</Routes>





    </div>
  );
}

export default App;
