import * as React from 'react';
import '../resource/style/App.css';
import { Route, Switch } from 'react-router';
import Main from './content/Main';
import Login from './content/Login';
interface AppProps {
  auth: boolean;
  loginResult?: string;
}
interface AppStates {
  auth: boolean;
}
class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      auth: this.props.auth
    };
  }
  componentWillUpdate() {
    this.setState({ auth: false });
  }

  render() {
    return (
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route
          exact={true}
          path="/"
          render={() => {
            if (this.state.auth) {
              return <Main />;
            } else {
              return <Login />;
            }
          }}
        />
      </Switch>
    );
  }
}

export default App;
