import './App.css';
import { Button } from './ui/button/button';

function App() {
  const onClick = () => {
    console.log(1);
  }
  return <Button  onClick={onClick}>OK</Button>;
}

export default App;
