import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout';

//Layouts
import MainLayout from './Layouts/Main/Main';

//Views
import HomeView from './Views/Home/Home';

const Routes = () => {
    return(
        <Switch>
            
            <RouteWithLayout
                    component={HomeView}
                    exact
                    layout={MainLayout}
                    path="/home"
            />

        </Switch>
    )
}

export default Routes;