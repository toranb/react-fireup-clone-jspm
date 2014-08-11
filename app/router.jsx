import React from 'react';
import ReactRouter from 'react-nested-router';

import Table from './table';
import Tables from './tables';
import PreReports from './prereports';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var foo = Router(
    <Route handler={Tables}>
        <Route name="table" path="/table/:table_id" handler={Table}/>
        <Route name="prereports" handler={PreReports}/>
    </Route>
)

export default foo;
