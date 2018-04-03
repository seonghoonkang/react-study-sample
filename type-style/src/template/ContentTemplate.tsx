import * as React from 'react';
import { style, media } from 'typestyle';
interface ContentProps {
  initDate: string;
  clock: string;
}

const appStyle = style(
  { backgroundColor: 'red', transition: 'font-size .5s' },
  media({ minWidth: 0, maxWidth: 800 }, { fontSize: '14px' }),
  media({ minWidth: 801 }, { fontSize: '30px' })
);

const ContentHtml: React.SFC<ContentProps> = props => (
  <div className={appStyle}>
    <h1>Init Time is - {props.initDate}</h1>
    <p className="App-intro">
      It's Time is
      <span style={{ fontSize: '30px', paddingLeft: '10px' }}>
        {props.clock}
      </span>
    </p>
  </div>
);
export default ContentHtml;
