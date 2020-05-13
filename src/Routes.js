import React from 'react';
import {
    Route,
    BrowserRouter
  } from "react-router-dom";

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

const Root = () => (
        <BrowserRouter>
            <Route exact path="/" component={View1}/>
            <Route exact path="/view-1" component={View1}/>
            <Route exact path="/view-2" component={View2}/>
            <Route exact path="/view-3" component={View3}/>
        </BrowserRouter>
);

export default Root;