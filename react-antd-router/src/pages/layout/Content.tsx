import * as React from 'react';
interface ContentProps {
  date?: string;
}

interface ContentStats {
  date: Date;
}

class Content extends React.Component<ContentProps, ContentStats> {
  private handle: NodeJS.Timer;

  constructor(props: ContentProps) {
    super(props);
    this.state = {
      date: props.date == null ? new Date() : new Date(props.date)
    };
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
    this.handle = setInterval(setWatch, oneSecond);
  }

  componentWillUnmount() {
    console.log('timer stop!');
    clearInterval(this.handle);
  }
}

export default Content;
