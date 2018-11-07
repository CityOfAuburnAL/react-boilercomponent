import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';

const App = () => (
    <MyComponent />
);
render(<App />, document.getElementById("root"));

//only needed in dev, for hot-reloading
if (module.hot) {
    module.hot.accept();

    window.addEventListener('message', e => {
        if ('production' !== process.env.NODE_ENV && e && e.data && e.data.type === "webpackInvalid") {
            console.clear();
        }
    });
}