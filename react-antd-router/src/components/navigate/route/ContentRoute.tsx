import * as React from 'react';
import { Route, Switch } from 'react-router';
import About from '../../../pages/content/About';
import Content from '../../../pages/layout/Content';
import Params from '../../../pages/content/IAboutParam';
class ContentRoute extends React.Component<Params, {}> {
  constructor(props: Params) {
    super(props);
  }
  render() {
    console.log(this.props.name);
    return (
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
        <Route path="/" component={Content} />
      </Switch>
    );
  }
}

export default ContentRoute;
