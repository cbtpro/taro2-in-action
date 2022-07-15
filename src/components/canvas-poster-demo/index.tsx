import Taro, { Component, useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

interface Props {
  message: string;
}
interface State {
  msg: string;
}
class CanvasPoster extends Component<Props, State> {
  static defaultProps = {
    message: 'hello world!',
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: props.message,
    };
  };
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.message !== state.msg) {
      return {
        msg: props.message
      };
    }
    return null;
  }
  render() {
    const { msg } = this.state;
    return <View className={styles.container}>
      {msg}
    </View>
  };
};

// 默认props
CanvasPoster.defaultProps = {
  message: 'hello world!',
};

export default CanvasPoster;
