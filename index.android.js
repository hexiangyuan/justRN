'use strict'
import React from 'react';
import {
    View,
    Navigator,
    AppRegistry,
} from 'react-native';

import HomePae from './homePage';

class JustSee extends React.Component {
    render() {
        let defaultName = 'HomePae';
        let defaultComponent = HomePae;
        return ( <Navigator initialRoute = {
                {
                    name: defaultName,
                    component: defaultComponent
                }
            }
            configureScene = {
                (route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }
            }
            renderScene = {
                (route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params
                    }
                    navigator = {
                        navigator
                    }
                    />
                }
            }
            />
        );
    }
}
AppRegistry.registerComponent('JustSee', () => JustSee);
