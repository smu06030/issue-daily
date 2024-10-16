import { TeamInfo } from '@/utils/teamInfo';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="Footer bg-black px-6 py-5 md:px-3 md:py-5">
      <div className="flex-j-i-center mx-auto text-xs text-white sm:text-sm md:px-2">
        <p>© Copyright 2024 Issue Daily. All rights reserved</p>
      </div>
      <div className="flex-j-i-center mx-auto mt-6 text-xs text-white sm:text-sm md:px-2">
        {TeamInfo.map((info, index) => {
          return (
            <div key={index} className="flex-i-center mx-4 space-x-2">
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-i-center space-x-2 no-underline hover:no-underline"
              >
                <FaGithub size={20} className="text-white" />
                <span className="font-bold">{info.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
