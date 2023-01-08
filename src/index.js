import React from 'react';
import ReactDOM from 'react-dom/client';

import Head from './Head';
import Foot from './Foot';
import Comp1 from './Comp1';
import Counter, { AutoCounter, AutoCounter2 } from './Counter';


function Button(props){
    console.log(props);

    // function handleClick(){
    //     alert(props.data);
    // }
    return(
        <div>
            <button onClick={props.handleClick}>{props.text}</button>
        </div>
    )
}

function button1Click(){
    console.log('clicked button 1')
}

function button2Click(){
    console.log('clicked button 2')
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <div>
     <Head></Head>
     <Button text ={"click from root"} val ={100} data = {'Button from root. Click to go home'} handleClick={button1Click} ></Button>
     <Button text ={"click from root button 2"} val ={100} data = {'Button from root. Click to go products'} handleClick={button2Click}></Button>
     <Foot></Foot>
     <Comp1></Comp1>
     <Counter/>
    <AutoCounter/>
    <AutoCounter2/>
    </div>
);

