import React from 'react';

const Card = ({ card, setSelectedCard }) => {
  if (!card) return null;
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 `}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {card.title}
        </h2>

        <p className="text-gray-600 mb-4 flex-1">
          {card.description.slice(0, 100)}
        </p>

        <button
          onClick={() => setSelectedCard(card)}
          className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          type="button"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
