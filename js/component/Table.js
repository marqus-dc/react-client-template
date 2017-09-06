'use strict';

import React from "react";
import PropTypes from "prop-types";

export default class Table extends React.Component {
  static propTypes = {
    header: PropTypes.array.isRequired,
    content: PropTypes.array.isRequired
  };

  render() {
    const {header, content} = this.props;
    var i = 0;
    var j = 0;
    return (
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            {header.map(header => <th key={header}>{header}</th>)}
          </tr>
          </thead>
          <tbody>
          {content.map(contentRow =>
              <tr key={i++}>
                {Object.values(contentRow).map(rowValue => <td key={j++}>{rowValue}</td>)}
              </tr>
          )}
          </tbody>
        </table>
    );
  }
}
