import React,{lazy, Suspense} from 'react';
import './app.CSS';
import './index.css';

const DynamicImport = lazy(() => import('./DynamicComp.js'));

export default () => {
    return <div id="mf1">
        Micro-frontend 1 <br/>
        <DynamicImport />
    </div>
};