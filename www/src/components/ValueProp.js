import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Your Heating And Cooling Company Of Choice</h1>
          <p className="main-subtitle">A leading providers of HVAC services throughout the southwest Ohio area. We provide expert HVAC installation, repair and maintenance services for homeowners throughout Northern Hamilton, Butler and Warren Counties in Ohio.</p>
          <Button label="Contact Us" />
        </div>
      </div>
    </section>
  )
};

export default ValueProp;
