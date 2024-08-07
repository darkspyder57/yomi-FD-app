// components/Card.js
import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
      />
      <div className="px-6 py-4" style={{backgroundColor: "white"}}>
        <div className="text-black-700 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base italic">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
