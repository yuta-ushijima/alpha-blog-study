import React from "react"
import PropTypes from "prop-types"

import { SketchPicker } from "react-color"

class Colorpicker extends React.Component {

  constructor(props) {
    /*superは親クラスであるReact.Componentを指す */
    super(props);
    // イベントハンドラのbindは右の書き方でもOK。this.handleChange = this.handleChange.bind(this);
    this.state = { selector: props.selector };
  }

  handleChange = (color) => {
    /*カラーピッカーで選択された値が16進数でconsoleに表示される */
    // console.log(color.hex);

    /*document内のbodyタグのstyleのグローバルスコープで
    背景色をカラーピッカーで指定された色に変更する。
    つまり、以下を指定することで、カラーピッカーに選んだ値が非同期ですぐに反映される。 */
    document.body.style.background = color.hex;
    /*querySelectorは引数に与えたセレクタを参照することができるメソッド */
    let elem = document.querySelector('#' + this.state.selector);
    /*valueはカラーピッカーから渡されるカラーコードを指している。 */
    elem.value = color.hex;
  }

  render() {
    return <React.Fragment>
      {/* colorには、フォームから指定されたカラーコードの値を取得 */}
      <SketchPicker color={this.props.color}
        /*以下の書き方でもイベントハンドラをbindできる(ES6のアロー関数でbind)*/
        onChange={(event) => this.handleChange(event)} />
    </React.Fragment>
  }
}

Colorpicker.propTypes = {};
export default Colorpicker;