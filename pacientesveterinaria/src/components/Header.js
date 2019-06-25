import  React  from "react";
import PropTypes from 'prop-types';

const Header = ({title}) => ( 
  <header>
      <h1 className="text-center">{title}</h1>
  </header>
);


Header.propTypes = {
  //Es un string el prop y es obligatorio
  title : PropTypes.string.isRequired
}

export default Header;


