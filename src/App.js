import {useState} from 'react'
import {Link} from "react-router-dom";
import TableContent from "./components/Table/Table";
import {Button} from  'react-bootstrap'
import EditModal from './components/Modal/EditModal';
import 'bootstrap/scss/bootstrap.scss'
import './App.css';

function App() {
  const [open,setOpen] = useState(false);
  const [current,setCurrent] = useState(null)
  return (
    <div className="App">
    <EditModal 
      open={open}
      setOpen={setOpen}
      current={current}
    />
      <h1>Hello</h1>
        <Button variant="outline-primary">
          <Link to="/add">Добавить</Link>
        </Button>
        <TableContent
           setOpen={setOpen}
           setCurrent={setCurrent}
        />
    </div>
  );
}

export default App;
