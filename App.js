import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middlewares';

import { purple } from './utils/colors';
import FlashCardStatusBar from './components/FlashCardStatusBar';
import MainNavigator from './components/Routes';

import { setLocalNotification } from './utils/helpers';

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashCardStatusBar backgroundColor={purple}/>
          <MainNavigator  />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
