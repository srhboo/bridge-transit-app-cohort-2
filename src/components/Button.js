import React from 'react';

export const Button = ({ className, ariaLabel, content, handleClick }) => {

  const handleOnClick = () => {
    handleClick()
  }
    
    return (
      <button
        className={`btn btn-default ${className}`}
        aria-label={ ariaLabel ? ariaLabel : null }
        onClick={ handleOnClick }
      >
      { content ? content : null }
      </button>
    );
  };