import * as React from 'react';
import BUTTON from '../styled-components/BUTTON';
interface ContentProps {
  date?: string;
}

interface ContentStats {
  date: Date;
}

class Content extends React.Component<ContentProps, ContentStats> {
  constructor(props: ContentProps) {
    super(props);
    this.state = { date: props.date == null ? new Date() : new Date(props.date) };
  }
  componentWillMount() {
    console.log('will mount! ');
    this.clock();
  }
  render() {
    return (
      <div className="App-intro">
        <h1>Init Time is - {this.props.date}</h1>
        <p className="App-intro">
          It's Time is
          <span style={{ fontSize: '30px', paddingLeft: '10px' }}>
            {this.state.date.toLocaleString()}
          </span>
        </p>
        <BUTTON>Default Button Style</BUTTON>
        <BUTTON primary={true}>Primary Button Style</BUTTON>
      </div>
    );
  }
  componentDidMount() {
    console.log('did mount! ');
  }

  private clock(): void {
    const oneSecond: number = 1000;
    console.log('clock Tick.');
    const setWatch = () => {
      this.setState({ date: new Date(this.state.date.getTime() + oneSecond) });
      console.log('Time was increas.');
    };
    setInterval(setWatch, oneSecond);
  }
}

export default Content;
