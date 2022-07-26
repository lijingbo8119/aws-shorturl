import React from 'react';
import { ShortUrl } from '../models/shortUrl';
import { Descriptions } from 'antd';

interface AppDetailProps {
  data: ShortUrl | null
}

interface AppDetailState { }

export default class extends React.Component<AppDetailProps, AppDetailState> {
  constructor(props: AppDetailProps) {
    super(props);
  }

  render() {
    const style = { display: this.props.data ? 'block' : 'none' };
    return (
      <Descriptions title="User Info" style={style} column={1}>
        <Descriptions.Item label="long_url">{this.props.data?.long_url}</Descriptions.Item>
        <Descriptions.Item label="short_url">{this.props.data?.short_url}</Descriptions.Item>
        <Descriptions.Item label="created_at">{this.props.data?.created_at}</Descriptions.Item>
      </Descriptions>
    );
  }
}
