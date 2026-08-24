import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'Facebook':
        return <Facebook className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      case 'YouTube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/aringay-seal.png"
                alt="Seal of the Municipality of Aringay"
                className="h-12 w-12 mr-3 object-contain bg-white rounded-full p-0.5"
              />

              <div>
                <div className="font-bold">{t('site_name')}</div>
                <div className="text-xs text-gray-400">
                  BetterAringay.org • La Union
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering the people of Aringay with transparent access to the
              services, programs, and public funds of LGU Aringay.
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Cost to the People of Aringay = ₱0
            </p>
            <div className="flex space-x-4">
              {footerNavigation.socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link =>
                  link.href.startsWith('http') ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2026 BetterAringay.org — MIT | CC BY 4.0
              </p>
              <p className="text-xs text-gray-500">
                All public information sourced from official government portals.
                Ver. 0.3.0
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:lgu_aringay@yahoo.com?subject=Volunteer%20for%20BetterAringay"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
              >
                Volunteer with us
              </a>
              <a
                href="https://github.com/alvindemesadev/betteraringay"
                target="_blank"
                rel="noopener"
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
              >
                Contribute code
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <span>{t('footer.copyright')}</span>
            <div className="flex items-center gap-3">
              <span>Powered by</span>
              <a
                href="https://bettergov.ph"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                BetterGov.ph
              </a>
              <span>•</span>
              <a
                href="https://github.com/iyanski/betterlocalgov"
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                BetterLocalGov
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
