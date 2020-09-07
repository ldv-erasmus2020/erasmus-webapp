import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

//Layouts
import MainLayout from './Layouts/Main/Main';

//Views
import HomeView from './Views/Home/Home';
import MapView from './Views/Map/MapPage';

const Routes = () => {
    
    const [langState, setLangState] = React.useState({
        lang: 'en'
    });

    return(
        <Switch>
            
            <Redirect from="/" to="/home" exact></Redirect>

            <Route path="/home" exact render={(props) => (
                <MainLayout setLangState={setLangState}>
                    <HomeView {...props} lang={langState}/>
                </MainLayout>
            )} />
            
            <Route path="/map" exact render={(props) => (
                <MainLayout setLangState={setLangState}>
                    <MapView {...props} />
                </MainLayout>
            )} />

        </Switch>
    )
}

export default Routes;