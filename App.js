
import { Groups } from '@screens/groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { ActivityIndicator } from 'react-native';

import { Loading } from '@components/Loading';

export default function App() {
  const loading = true 
  return (
    <ThemeProvider theme={theme}>
      {!loading ? <Groups /> : <Loading/>}
    </ThemeProvider>

  );
}