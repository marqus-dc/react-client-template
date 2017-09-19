import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui";

class MaterialTable extends React.Component {
  render() {
    const {header, content} = this.props;
    var i = 0;
    var j = 0;
    return (
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow key={i++}>
              {header.map(item =>
                  <TableHeaderColumn key={j++}>{item}</TableHeaderColumn>
              )}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {content.map(contentRow =>
                <TableRow key={i++}>
                  {Object.values(contentRow).map(
                      rowValue =>
                          <TableRowColumn
                              key={j++}>{rowValue}</TableRowColumn>)}
                </TableRow>
            )}
          </TableBody>
        </Table>
    );
  }
}

MaterialTable.propTypes = {
  header: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired
};

export default MaterialTable;