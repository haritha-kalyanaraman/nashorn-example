var App = React.createClass({displayName: 'Hello',
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.location);
    }
});


var renderClient = function () {
    React.render(
        React.createElement(App, {location: "client"}),
        document.getElementById("content")
    );
};

var renderServer = function () {
    return React.renderToString(
        React.createElement(App, {location: "server"})
    );
};
