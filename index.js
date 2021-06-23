import React, { Component } from 'react';
import { render } from 'react-dom';
import { Visualizer } from '@uirouter/visualizer';
import {
  UIRouterReact,
  UIRouter,
  pushStateLocationPlugin
} from '@uirouter/react';
import { UIView, UISref, UISrefActive } from '@uirouter/react';
import { GenericComponent, MainContainerComponent } from './MainContainer';
import './style.css';

const plugins = [pushStateLocationPlugin, Visualizer];
// parent to child component state relationships below
const states = [
  { name: 'home', url: '/', component: GenericComponent },
  { name: 'about', url: '/about', component: GenericComponent },
  {
    name: 'home.MainContainer',
    id: 'home-main-container',
    url: '/',
    component: MainContainerComponent
  }
];

const configFn = router => router.urlService.rules.initial({ state: 'home' });

class App extends Component {
  render() {
    const srefs = ['home', 'about', 'signin'];

    return (
      <UIRouter plugins={plugins} states={states} config={configFn}>
        <div>
          {srefs.map(stateName => (
            <UISrefActive class="active" key={stateName}>
              <UISref to={stateName}>
                <a>{stateName}</a>
              </UISref>
            </UISrefActive>
          ))}

          <UIView />
        </div>
      </UIRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
