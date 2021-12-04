import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { SimpleForm } from './useEffect/SimpleForm';
import { CounterApp } from './useState/CounterApp';
import { CustomCounterHook } from './useState/CustomCounterHook';

ReactDOM.render(
    /*<CustomCounterHook/>,*/
    <SimpleForm/>,
    document.getElementById('root')

)