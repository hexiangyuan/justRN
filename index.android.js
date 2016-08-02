'use strict'
import React from 'react';
import {
    View,
    Navigator,
    AppRegistry,
} from 'react-native';

import List from './list';

class JustSee extends React.Component {
    render() {
        let defaultName = 'List';
        let defaultComponent = List;
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
