import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class DisplayProviders extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filterText, selectedProvider } = this.props;
    const providers = this.props.providers || {};
    const providerList = Object.values(providers)
      .filter((provider) => {
        return (
          provider['Provider Name']
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map((provider) => {
        let selectedStyle;
        if (provider._id === selectedProvider)
          selectedStyle = { backgroundColor: 'orange' };
        return (
          <tr
            key={provider._id}
            style={selectedStyle}
            onClick={() => {
              this.props.selectedUpdate(provider._id);
            }}
          >
            <td>{provider['Provider Name']} </td>
          </tr>
        );
      });

    return <div>{providerList}</div>;
  }
}

export default DisplayProviders;
