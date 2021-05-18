import React from 'react';

class Dropdown extends React.Component {
    onChange(event) {
        const newValue = event.target.selectedOptions[0].value;
        this.props.onChange(newValue.toLowerCase());
    }

    render() {
        return (
            <select id={this.props.id} onChange={this.onChange.bind(this)} value={this.props.selected}>
                {
                    this.props.options.map(option => {
                        return (
                            <option value={option.toLowerCase()} key={option}>{option}</option>
                        );
                    })
                }
            </select>
        );
    }
}

export default Dropdown;