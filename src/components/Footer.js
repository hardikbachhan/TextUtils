import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {

    let year = new Date().getFullYear();

    let myStyle = {
        color: props.mode === "light"?"black":"white",
    };

    return (
        <div className={`row text-center footer bg-${props.mode}`} style={myStyle}>
            <p className="mt-4">Made with ❤️ in Delhi, India.</p>
            <p className="mb-3">Hardik Bachhan @ {year}.</p>
        </div>
    )
}

export default Footer;

Footer.propTypes = {
    mode: PropTypes.string.isRequired
};
  
Footer.defaultProps = {
    mode: "light"
};
  