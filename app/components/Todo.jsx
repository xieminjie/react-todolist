var React = require('react');

var Todo = React.createClass({
    render:function(){
        var {text} = this.props;
        var {id} = this.props;
        return(
            <div>
                <span>{id} </span>
                <span>{text}</span>
            </div>
        )
    }
});

module.exports = Todo;