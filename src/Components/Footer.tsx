import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const FacebookIcon = faFacebook as IconProp;
const TwitterIcon = faTwitter as IconProp;
const InstagramIcon = faInstagram as IconProp;
const pinterestIcon = faPinterest as IconProp;
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tl from-rose-100 to-teal-100 text-gray-600 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Om os</h3>
          <p>Udforsk vores kærlighed til hunde og vores forpligtelse til at tilbyde førsteklasses produkter, der forbedrer livet for dine pelsede venner.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Butik</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-900">Foder</a></li>
            <li><a href="#" className="hover:text-gray-900">Legetøj og tilbehør</a></li>
            <li><a href="#" className="hover:text-gray-900">Pleje udstyr</a></li>
            <li><a href="#" className="hover:text-gray-900">Sundhed & velvære</a></li>
          </ul>
        </div>
        <div> 
          <h3 className="text-xl font-semibold mb-4">Kontakt os her</h3>
          <p>Email: info@yourdogstore.com</p>
          <p>Telefon: 12345678</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Følg os her</h3>
          <ul className="flex space-x-4">
            <li><a href="#"><FontAwesomeIcon icon={FacebookIcon} size='2x' className='hover:text-gray-900'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={TwitterIcon} size='2x' className='hover:text-gray-900'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={InstagramIcon} size='2x' className='hover:text-gray-900'/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={pinterestIcon} size='2x' className='hover:text-gray-900'/></a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Vovseværket. Alle rettigheder forbeholdes. | Designet med kærlighed til hunde.</p>
      </div>
    </footer>
  );
};

export default Footer;