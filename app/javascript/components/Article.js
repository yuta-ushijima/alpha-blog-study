import React from "react"
import PropTypes from "prop-types"

import Timestamp from "react-timestamp"

class Article extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>Created by: {this.props.authoer},
                   &nbsp;
                   <Timestamp time={this.props.created_at} precision={4} />,
                   last updated: <Timestamp time={this.props.updated_at} precision={4} />
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    /*Articleコンポーネントが読み込まれた直後にsetIntervalが呼び出され、
    forceUpdateにより、1秒ごとに秒数が非同期でカウントアップされる。 */
    let self = this;
    setInterval(() => { self.forceUpdate() }, 1000);
  }
  componentWillUnmount() {
    /*componentDidMountで設定したsetIntervalを解除するために定義。
      ここでのthisはArticleComponent自身を指す */
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
}



Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article
