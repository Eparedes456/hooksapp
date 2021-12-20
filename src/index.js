import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { SimpleForm } from './useEffect/SimpleForm';
import { CounterApp } from './useState/CounterApp';
import { CustomCounterHook } from './useState/CustomCounterHook';
import { FormWithCustomHooks } from './useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
import { FocusScreen } from './useRef/FocusScreen';
import { RealExampleRef } from './useRef/RealExampleRef';
import { Memorize } from './useMemo/Memorize';
import {MemoHook } from './useMemo/MemoHook';

ReactDOM.render(
    /*<CustomCounterHook/>,*/
    <MemoHook />,
    document.getElementById('root')

)