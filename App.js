import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppRouter } from './src/routers';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <AppRouter />
    </>
  )
}
