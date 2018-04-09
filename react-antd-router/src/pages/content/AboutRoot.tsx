import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Params from './IAboutParam';
import About from './About';
import Empty from './Empty';
// const AboutRoot: React.SFC<RouteComponentProps<Params>> = props => {
//   var name: string = props.match.params.name;
//   if (props.match.params.name == null) {
//     return <Empty />;
//   } else {
//     return (
//       <div>
//         <h2>About Root</h2>
//         <About name={name} />
//       </div>
//     );
//   }
// };

class AboutRoot extends React.Component<RouteComponentProps<Params>, {}> {
  constructor(props: RouteComponentProps<Params>) {
    super(props);
  }
  render() {
    var name: string = this.props.match.params.name;
    if (name == null) {
      return <Empty />;
    } else {
      return (
        <div>
          <h2>About Root</h2>
          <About name={name} />
        </div>
      );
    }
  }
}

export default AboutRoot;
