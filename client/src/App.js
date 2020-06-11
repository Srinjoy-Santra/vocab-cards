import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';



import Home from './views/pages/Home';
import Learn from './views/pages/Learn';
import Detail from './views/pages/Detail';



function App() {
    return (
        <div className="App">
            
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/learn' component={Learn} />
                    <Route exact path='/learn/:word' component={Detail} />
                    {/* <Route path='*' component={NotFound}/> */}
                </Switch>
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }`}
            </style>
        </div>
    )
}
export default App;