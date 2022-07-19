// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
// import NxWelcome from './nx-welcome';

// export function App() {
//   return (
//     <>
//       <NxWelcome title="reactapp" />
//       <div />
//     </>
//   );
// }

// export default App;



import React, { useState, useRef, useEffect } from 'react';
import LoadApp from "./loadApp"
import {mount} from 'angularappmfe/loadApp'
// import './app.css';

const divStyle = {
  width: '400px'
};


interface MyState {
  counter: number;
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const buttonRef:any = useRef(null);
  const handleEvent = () => setCounter(counter + 1);
  useEffect(() => {
    mount();  
  }, []);   
  useEffect(() => {
    
    if (buttonRef.current){
    buttonRef.current.addEventListener('addToCart', handleEvent);
  }
    return () => {
      buttonRef.current.removeEventListener('addToCart', handleEvent);
    };
  }, [counter]);

  return (
    <>
      <LoadApp type="React"  clickHandler={handleEvent} />
      <header className="flex-row">
        <div style={divStyle}>
          <a href="http://localhost:4200">
            <img
              src="../assets/angular.png"
              alt="Angular"
              width="40"
              height="40"
            />
          </a>
          <img src="../assets/react.png" alt="React" width="40" height="40" />
        </div>
        <shopping-cart counter={counter} />
      </header>
      <div className="flex-row">
        <img src="../assets/react.png" alt="Avatar" width="150" />
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>Library</td>
                <td>JSX, Hooks</td>
              </tr>
            </tbody>
          </table>
          <add-to-cart-button type="React" ref={buttonRef} />
        </div>
      </div>
    </>
  );
};

export default App;
