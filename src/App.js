import React, { lazy, Suspense } from 'react';
import loadMicroFrontend from './loadMicroFrontend';

const Mf = lazy(() => loadMicroFrontend('http://localhost:13005/main.js', 'mf1'));

export default () => {
    return <Suspense fallback={'loading...'}>
        <div>
            Simple Parent component
            <Mf/>
        </div>
    </Suspense>
};
