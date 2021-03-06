import React from 'react';
import _map from 'lodash.map';
import FitText from '../vendor/react-fittext';

class GlyphHidden extends React.Component {
  render () {
    const self = this;

    return (
      <span style={{ opacity: 0 }} className="speak-none" aria-hidden="true">{ self.props.text }</span>
    );
  }
}

GlyphHidden.defaultProps = {
  text: ''
};

class FontList extends React.Component {
  render() {
    const self = this;
    const data = self.props.data;
    var textAlign = self.props.textAlignment;

    if (self.props.textAlignment === 'left' || self.props.textAlignment === 'right') {
      textAlign = self.props.textAlignment + '-align';
    }

    var typefaceList = _map(Object.keys(data.fonts), function(index) {
      var font = data.fonts[index];
      var fontWeight = 400;
      var fontString = <span><GlyphHidden text="安" />あア</span>;
      var fontSizeAdjust = typeof font.font_size_adjust === 'undefined' ? 1 : (1 / font.font_size_adjust);

      if (font.published !== false && font.designer) {
        if (font.hiragana === false) {
          fontString = <span><GlyphHidden text="安あ" />ア</span>;
        }
        if (font.kanji === true) {
          fontString = '安あア';
        }

        return (
          <li className={'col-12 m0 ' + self.props.className} key={'header_' + index}><a className="block py2 border-none" href={'#' + index}>
            <div className="flex items-center py3 border-top border-muted-light height-fontlist-item">
              <div className={'h1 line-height-1 col-4 sm-col-3 md-col-5 lg-col-' + self.props.firstColumnLgCol + ' ' + self.props.color + ' ' + textAlign}>
                <FitText compressor={0.33 * fontSizeAdjust} minFontSize={self.props.minFontSize} maxFontSize={self.props.maxFontSize}>
                  <div className={'break-none wf-' + index + ' font-weight-' + fontWeight} style={{fontSize: (font.font_size_adjust || 1) + 'em'}}>{fontString}</div>
                </FitText>
              </div>
              <div className="flex-auto line-height-2 pl2">
                <span>{font.name.ja} <span lang="en" className="muted-dark">{font.name.en === font.name.ja ? '' : font.name.en}</span></span>
                <span className="block mt1">{font.designer.name.ja} <span lang="en" className="muted-dark">{font.designer.name.en === font.designer.name.ja ? '' : font.designer.name.en}</span></span>
              </div>
            </div>
          </a></li>
        );
      }
    });

    return (
      <ul className="flex flex-wrap m0 p0 list-style-none items-center">{typefaceList}</ul>
    );
  }
}

FontList.defaultProps = {
  data: {},
  color: 'black',
  maxFontSize: 120,
  minFontSize: 24,
  firstColumnLgCol: 5, // TODO This this a quick fix, could be much nicer. Fixes column width on footer
  textAlignment: 'left'
};

export default FontList;
