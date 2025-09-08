import React from 'react';

const Card = ({
  title,
  image,
  description,
  buttonLabel = 'Learn More',
  onButtonClick,
  href,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        {description ? (
          <p className="text-gray-600 mb-4 flex-1">{description}</p>
        ) : null}
        {href ? (
          <a
            href={href}
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            {buttonLabel}
          </a>
        ) : (
          <button
            onClick={onButtonClick}
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            type="button"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
