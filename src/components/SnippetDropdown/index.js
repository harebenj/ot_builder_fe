import React, { Component } from 'react';
import Select from 'react-select';

import { SelectWrapper } from './styledComponent';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];


class SnippetDowndown extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <SelectWrapper className="select-wrapper">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isClearable={true}
        />
      </SelectWrapper>
    );
  }
}

export default SnippetDowndown;