import React from 'react';

var PreReports = React.createClass({
    loadedComponent: null,
    preRender: function() {
        return <div>loading the reports ...</div>
    },
    componentDidMount: function() {
        var self = this;
        System.import('./build/reports')
        .then(function(es6module) {
            return es6module.default;
        })
        .then(function(component) {
            self.loadedComponent = component;
            self.forceUpdate();
        });
    },
    render: function() {
        var component = this.loadedComponent;
        return component ? component(this.props) : this.preRender();
    }
});

export default PreReports;
