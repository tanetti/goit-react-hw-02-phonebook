import PropTypes from 'prop-types';
import { Component } from 'react';
import { theme } from 'constants/theme';
import {
  FilterContainer,
  FilterField,
  FilterIcon,
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
          placeholder="Contact search..."
          value={this.state.filterValue}
          onChange={this.setFilterValue}
        />
        <FilterIcon size={theme.sizes.filterIcon} />
      </FilterContainer>
    );
  }
}

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
