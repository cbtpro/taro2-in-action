import Taro, { useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';

import styles from './index.module.scss';

interface Props {
  message: string;
}
function CanvasPoster(props: Props) {
  const { message } = props;
  const [msg, setMsg] = useState(message);
  useEffect(() => {
    setMsg(message);
  }, [message]);
  return <View className={styles.container}>
    {msg}
  </View>
};

// 默认props
CanvasPoster.defaultProps = {
  message: 'hello world!',
};

export default CanvasPoster;
