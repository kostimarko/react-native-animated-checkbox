import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class AnimatedCheckbox extends PureComponent {
  onPress = () => {
    this.props.onPress(!this.props.checked);
    this.animation.play();
  };
  render() {
    const speed = this.props.checked ? 1 : -1;
    const progress = this.props.checked ? 1 : 0;
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ width: this.props.width, height: this.props.height }}>
          <LottieView
            ref={animation => {
              if (animation) {
                this.animation = animation;
              }
            }}
            loop={false}
            source={this.props.Anim}
            speed={speed}
            progress={progress}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
