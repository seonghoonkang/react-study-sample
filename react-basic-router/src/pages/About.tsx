import * as React from 'react';
import Params from './IAboutParam';
import * as Query from 'query-string';
interface QueryParams {
  isShowDetail: boolean;
}
class About extends React.Component<Params, {}> {
  constructor(props: Params) {
    super(props);
  }

  render() {
    const query: QueryParams = Query.parse(location.search);
    console.log(query.isShowDetail);
    const flag: boolean = query.isShowDetail;
    return (
      <div>
        This is About Page: params value is {this.props.name}
        <h1>{flag && 'Detail : blahblah'}</h1>
      </div>
    );
  }
}

export default About;
