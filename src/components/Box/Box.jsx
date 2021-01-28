import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span style={{ fontSize: 100, color: this.props.color }} className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>

                {/* conditions */}
                {this.props.icon !== "local_drink" && this.props.icon !== "directions_walk" &&
                <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/>}
                {this.props.icon === "directions_walk" &&
                <>
                    <button className="btn btn-primary" onClick={this.props.retire}>-</button>
                    <button className="btn btn-secondary" onClick={this.props.ajoute}>+</button>
                </>}
                {/* conditions */}
            </div>
        )
    }
}

export default Box;