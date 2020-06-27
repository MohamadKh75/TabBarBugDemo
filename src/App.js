import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';
import Router from './Router';

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <Router />
  </SafeAreaProvider>
);

export default App;
