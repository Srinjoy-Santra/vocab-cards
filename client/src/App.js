import React, { Fragment } from 'react';
import { Route , BrowserRouter, Switch } from 'react-router-dom';

import Home from './views/pages/Home';
import Learn from './views/pages/Learn';
import Detail from './views/pages/Detail';

function App(){
    return(
        <Fragment className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/learn' component={Learn}/>
                    <Route exact path='/learn/:word' component={Detail}/>
                    {/* <Route path='*' component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}
export default App;