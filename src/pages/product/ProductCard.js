import { Link } from "react-router-dom";

const ProductCard = ({ image, title, description, onMoreInfo }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-yellow-100 to-yellow-50 border border-yellow-400 transform hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-yellow-700 mb-2">{title}</div>
        <p className="text-gray-600 text-base line-clamp-3">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex flex-row-reverse">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
          <Link to={onMoreInfo}>More Info</Link>
        </button>
      </div>
      <strong></strong>
    </div>
  );
};

export default ProductCard;
