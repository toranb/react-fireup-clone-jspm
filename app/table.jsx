import React from 'react';

var Table = React.createClass({
  findTable: function(table_id) {
    for (var i = 0, l = models.length; i < l; i ++) {
      if (models[i].id == table_id) {
        return models[i];
      }
    }
  },
  findFood: function(food_id) {
    for (var i = 0, l = foods.length; i < l; i ++) {
      if (foods[i].id == food_id) {
        return foods[i];
      }
    }
  },
  addFood: function(e) {
    var table = this.state.table;
    var food = this.findFood(e.target.className);
    table.foods.push(food);
    var total = this.getCurrentTotal(table);
    this.setState({table: table});
    this.setState({total: total});
  },
  getCurrentTotal: function(table) {
    var total = 0;
    table.foods.forEach(function(item) {
        return total += item.cost;
    });
    return total;
  },
  getInitialState: function() {
    var table = this.findTable(this.props.params.table_id);
    var total = this.getCurrentTotal(table);
    return {
      table: table,
      total: total
    };
  },
  render: function() {
    var self = this;
    var food_models = foods.map(function(food) {
      return <li><a onClick={self.addFood}><img className={food.id} src={food.image_url} /><p>{food.name}</p></a></li>
    });
    var selected;
    if (this.state.table.foods.length > 0) {
      var selected = this.state.table.foods.map(function(food) {
        return <li><h3>{food.name} <span className="right">${food.cost}</span></h3></li>
      });
    }else{
      selected = <li><h3>Click a food to add it</h3></li>
    }
    return (
      <div className="row">
        <div className="three columns">
          <ul id="menu">
          {food_models}
          </ul>
        </div>
        <div className="nine columns">
            <h2>Table <span className="identifier">{this.state.table.id}</span></h2>
            <ul id="customer-tab">
              {selected}
              <li id="total"><h3>Total <span className="right">${this.state.total}</span></h3></li>
            </ul>
        </div>
      </div>
    )
  }
});

export default Table;
