import React, {Component} from 'react';
import Home from './src/blocks/Home';
import Splash from './src/components/Splash';

interface IPros {}

interface IState {}

export default class App extends Component<IPros, IState> {
  state = {showSplash: true};

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 1500);
  }

  render() {
    const {showSplash} = this.state;
    return <>{showSplash ? <Splash /> : <Home />}</>
  }
}
