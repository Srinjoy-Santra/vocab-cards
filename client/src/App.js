import React from 'react';
import { Route,  Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';


import Home from './views/pages/Home';
import Learn from './views/pages/Learn';
import Detail from './views/pages/Detail';
import SnackbarAlert from './views/components/SnackbarAlert';


function App() {
    const alertMsg = useSelector(state => state.alert);
    return (
        <div className="App">

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/learn' component={Learn} />
                <Route exact path='/learn/:word' component={Detail} />
                {/* <Route path='*' component={NotFound}/> */}
            </Switch>
            <SnackbarAlert open={alertMsg.msg !== null} alertMsg={alertMsg}/>
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