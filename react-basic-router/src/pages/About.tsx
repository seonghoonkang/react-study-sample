import * as React from 'react';
import Params from './IAboutParam';
import * as Query from 'query-string';
interface QueryParams {
  isShowDetail: string;
}
class About extends React.Component<Params, {}> {
  constructor(props: Params) {
    super(props);
  }

  render() {
    const query: QueryParams = Query.parse(location.search);
    var flag: boolean = false;
    if (query.isShowDetail === 'true') {
      flag = true;
    }

    return (
      <div>
        This is About Page: params value is {this.props.name}
        <h1>{flag ? 'Detail : blahblah' : 'Nothing'}</h1>
      </div>
    );
  }
}

export default About;
