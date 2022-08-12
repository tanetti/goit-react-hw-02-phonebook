import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  FilterContainer,
  FilterField,
  SearchIcon,
} from './ContactFilter.styled';

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
      <FilterContainer>
        <FilterField
          type="text"
          name="filter"
          aria-label="Phonebook filter"
          placeholder="Search contact..."
          value={this.state.filterValue}
          onChange={this.setFilterValue}
        />
        <SearchIcon size="18" />
      </FilterContainer>
    );
  }
}

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
