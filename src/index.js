import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { CounterApp } from './useState/CounterApp';
import { CustomCounterHook } from './useState/CustomCounterHook';

ReactDOM.render(
    <CustomCounterHook/>,
    document.getElementById('root')

)