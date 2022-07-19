import React, { useEffect, useRef } from "react";
// import {mount} from 'angularappmfe/loadApp'

const LoadApp = (props: {type:string, clickHandler: any}) => {
  const ref:any = useRef(null);
  useEffect(() => {
  if (ref.current){
    ref.current.addEventListener('addToCart', props.clickHandler);
  }
},)
  // useEffect(() => {
  //   mount();  
  // }, []);   
  return <div className="left-sidebar-module">
    <add-to-cart-button type={props.type} ref={ref}></add-to-cart-button>
    </div>;
};


export default LoadApp;