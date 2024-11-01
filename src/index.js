import { AppRegistry } from 'react-native';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Register the React Native app with react-native-web
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
