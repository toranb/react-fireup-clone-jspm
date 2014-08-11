import React from 'react';
import ReactRouter from 'react-nested-router';

var Link = ReactRouter.Link;

var Tables = React.createClass({
  indexTemplate: function() {
    return <h2>Please select a table</h2>
  },
  render: function() {
    var tables = models.map(function(table) {
      return <Link className="panel six columns" to="table" table_id={table.id}>{table.id}</Link>
    });
    return (
      <div className="row">
        <div className="twelve columns">
          <h1>Ordr</h1>
          <hr />
          <p>
            <div className="row">
              <div id="tables" className="four columns">
                <h2>Tables</h2>
                {tables}
              </div>
              <div id="order" className="eight columns">
                {this.props.activeRoute || this.indexTemplate()}
              </div>
            </div>
          </p>
        </div>
      </div>
    )
  }
});

export default Tables;
