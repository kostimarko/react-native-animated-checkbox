# rn-animated-checkbox

An animated checkbox component for react native

## Install

`npm i rn-animated-checkbox`

or

`yarn add rn-animated-checkbox`

## Lottie

This library depends on `lottie-react-native` to run the animations. [How to install lottie for react native](https://airbnb.io/lottie/react-native/react-native.html)

## Usage

```
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedCheckbox from 'rn-animated-checkbox';
import Anim from './assets/notification.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 250, height: 250 }}>
          <AnimatedCheckbox
            Anim={Anim}
            width={250}
            height={250}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
```

![Notification Animation Checkbox](https://media.giphy.com/media/euQotBUU5kVTyo6e02/giphy.gif)
