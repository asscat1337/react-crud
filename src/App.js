import {Link} from "react-router-dom";
import TableContent from "./components/Table/Table";
import {Button} from  'react-bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Button variant="outline-primary">
          <Link to="/add">Добавить</Link>
        </Button>
        <TableContent/>
    </div>
  );
}

export default App;
