const Modal = ({ card, onClose }) => (
  <div className="fixed inset-0 backdrop-blur-lg bg-gray-900/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg h-full w-full overflow-y-auto relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white rounded-full px-2 shadow-md hover:bg-gray-100 transition-colors"
      >
        X
      </button>

      <img
        src={card.largeImage}
        alt={card.title}
        className="w-full h-full md:h-[80%] object-contain"
      />

      <div className="p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {card.title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          {card.detailedDescription}
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
