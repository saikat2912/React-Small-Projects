import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import EmployeeList from './components/employeeList';
import { Provider } from 'react-redux';
import DataList from './components/DataList';
import DataTable from './components/DataTable';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import CheckBox from './components/CheckBox';
import Login from './components/Login';
import Login2 from './components/Login2';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DataList/>}/>
          <Route path="/" element={<UseReducer/>}/>
          <Route path="/tablePage" element={<DataTable/>}/>
          <Route path="/count" element={<UseRef/>}/>
          <Route path="/checkbox" element={<CheckBox/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/LoginForm" element={<Login2/>}/>
        </Routes>
      </Router>
   
    </div>

  );
}

export default App;
