import { View as NativeView, type ViewProps as NativeViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ViewProps = NativeViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function View({ style, lightColor, darkColor, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <NativeView style={[{ backgroundColor }, style]} {...otherProps} />;
}
