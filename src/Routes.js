import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

//Layouts
import MainLayout from './Layouts/Main/Main';

//Views
import HomeView from './Views/Home/Home';
import MapView from './Views/Map/Map';

// const MapComponent = (
//     <MainLayout>
//         <HomeView />
//     </MainLayout>
// );

const Routes = () => {
    return(
        <Switch>
            
            <Redirect from="/" to="/home" exact></Redirect>

            <Route path="/home" exact render={(props) => (
                    <MainLayout>
                        <HomeView {...props} />
                    </MainLayout>
            )} />
            
            <Route path="/map" exact render={(props) => (
                <MainLayout>
                    <MapView {...props} />
                </MainLayout>
            )} />

        </Switch>
    )
}

export default Routes;