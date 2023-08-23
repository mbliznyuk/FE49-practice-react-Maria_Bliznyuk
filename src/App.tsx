import './App.css';
import { Button } from './ui/button/button';
import { Title } from './ui/button/title/title';
import { Bar } from './ui/button/bar/bar';

function App() {
  const onButtonClick = () => {
    console.log(1);
  };
  return (
    <>
    <div>
        <Button onClick={onButtonClick}>OK</Button>
    </div>
      <Title>Sign In</Title>
      <Bar></Bar>
    </>
  );
}

export default App;
