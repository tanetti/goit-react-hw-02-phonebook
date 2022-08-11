import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactFilter extends Component {
  state = {
    filterValue: '',
  };

  updateRootState = filterValue => {
    this.props.onFilterChange(filterValue);
  };

  setFilterValue = ({ currentTarget }) => {
    this.setState({ filterValue: currentTarget.value });
    this.updateRootState(currentTarget.value);
  };

  render() {
    return (
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        value={this.state.filterValue}
        onChange={this.setFilterValue}
      />
    );
  }
}

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
