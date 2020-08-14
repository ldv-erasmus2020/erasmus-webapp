import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout';

//Layouts
import MainLayout from './Layouts/Main/Main';

//Views
import HomeView from './Views/Home/Home';
import MapView from './Views/Map/Map';

const Routes = () => {
    return(
        <Switch>
            
            <Redirect from="/" to="/home" exact></Redirect>

            <Route path="/home" exact>
                <MainLayout>
                    <HomeView />
                </MainLayout>
            </Route>

            <RouteWithLayout
                    component={MapView}
                    exact
                    layout={MainLayout}
                    path="/map"
            />

        </Switch>
    )
}

export default Routes;