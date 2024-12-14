import React from 'react';
import { useState } from 'react';
import ListGroup from './components/ListGroup.tsx';
import Alert from './components/Alert.tsx';
import Button from './components/Button.tsx';

function App() {
  let items = [
    'Kathmandu',
    'Bhaktapur',
    'Lalitpur',
    'Pokhara',
    'Dharan',
  ]
  const [alertVisibility, setAlertVisibility] = useState(false);
  const handleItem = (item: string) => {
    console.log(item);
  }
  const handleClick = () => {
    console.log('Clicked')
  }
  return (
    <>
      <div><ListGroup items={items} heading="Districts" onSelection={handleItem} /></div>
      <div>
        {alertVisibility&&<Alert onCLose={()=>setAlertVisibility(false)} children=''>Alert is Activated</Alert>}
        <Button color='danger' onClick={()=>setAlertVisibility(true)} children=''>Send Alert</Button>
      </div>
    </>
  );
}

export default App;
