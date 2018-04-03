import * as React from 'react';
import ContentHtml from '../template/ContentTemplate';
interface ContentProps {
  date?: string;
}

interface ContentStats {
  date: Date;
}

class Content extends React.Component<ContentProps, ContentStats> {
  initDate: string;
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
    this.initDate = this.props.date == null ? '' : this.props.date;
    return (
      <ContentHtml
        initDate={this.initDate}
        clock={this.state.date.toLocaleString()}
      />
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
