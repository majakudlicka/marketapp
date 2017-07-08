import React from 'react';

class StorePicker extends React.Component {
  render() {
     return (
       <form className="store-selector">
       <input type="text" required placeholder="Store Name" />
       <button type="submit">Visit store-></button>
       </form>
     )
  }
}

export default StorePicker;
