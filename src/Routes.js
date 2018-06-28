import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Landingpage from './components/Landingpage';
import Register from './components/Register';
import Login from './components/Login';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root" >
                    {/* <Scene key="landingpage" component={Landingpage} /> */}
                    <Scene key="login" component={Landingpage} title="Login" initial={true}/>
                    <Scene key="register" component={Landingpage} title="Register" />
                </Stack>
            </Router>
        )
    }
}
