import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { SimpleForm } from './useEffect/SimpleForm';
import { CounterApp } from './useState/CounterApp';
import { CustomCounterHook } from './useState/CustomCounterHook';
import { FormWithCustomHooks } from './useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';

ReactDOM.render(
    /*<CustomCounterHook/>,*/
    <MultipleCustomHooks />,
    document.getElementById('root')

)