
import { Groups } from '@screens/groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { StatusBar } from 'react-native';

import { Loading } from '@components/Loading';

export default function App() {
  const loading = true 
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle='ligth-content'
      backgroundColor="transparent"
      translucent
      />
      {!loading ? <Groups /> : <Loading/>}
    </ThemeProvider>

  );
}