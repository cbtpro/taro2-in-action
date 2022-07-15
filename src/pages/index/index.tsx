import Taro, { Component, Config } from '@tarojs/taro';
import { Button, View, Text } from '@tarojs/components';
import CanvasPoster from '@/components/canvas-poster';
import CanvasPosterDemo from '@/components/canvas-poster-demo';

import './index.scss'

interface Props {
  message: string;
}
interface State {
  message: string;
}
class Index extends Component<Props, State> {
  // 默认props
  static defaultProps = {
    message: 'Hello world!!!!',
  }
  constructor(props: Props) {
    super(props);
    const { message } = props;
    this.state = {
      message: message,
    };
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  updateMessageHandler = () => {
    this.setState({
      message: new Date().toUTCString(),
    });
  };
  render () {
    const { message } = this.state;
    return (
      <View className='index'>
        <Button onClick={this.updateMessageHandler}>更新消息</Button>
        <Text>{message}</Text>
        <CanvasPoster message={message} />
        <CanvasPosterDemo message={message}  />
      </View>
    )
  }
}

export default Index;
