var App = React.createClass(
    render: function () {
        return (
            <h1>Hello from {this.props.location}</h1>
            )
        );
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