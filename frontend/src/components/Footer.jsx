import { FaHardHat, FaEnvelope, FaPhoneAlt, FaTools } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <FaHardHat className="w-8 h-8 text-yellow-400 mr-2" />
          <span className="font-bold text-lg">Unity Construction</span>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            Building dreams, one brick at a time. <br />
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Unity Construction. All rights
              reserved.
            </span>
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="mailto:info@unityconstruction.com"
            className="hover:text-yellow-400 transition-colors"
            title="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="tel:+911234567890"
            className="hover:text-yellow-400 transition-colors"
            title="Call"
          >
            <FaPhoneAlt className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6 text-center text-sm text-gray-400">
        <span>
          <FaTools className="inline w-5 h-5 text-yellow-400 mr-1" />
          Proudly laying the foundation for a better tomorrow.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
