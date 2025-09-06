import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-university-red text-white mt-20">
      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo & présentation */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white rounded-lg shadow-lg">
              <img src="public/logo.png" className="w-10 h-10"></img>
            </div>
            <h2 className="font-dancing font-bold text-2xl">
              Mention Informatique
            </h2>
          </div>
          <p className="text-gray-200 font-montserrat text-sm leading-relaxed">
            Une formation d’excellence pour façonner les ingénieurs de demain,
            alliant rigueur académique et innovation technologique.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="font-montserrat font-semibold text-lg mb-4 border-b border-red-200 inline-block">
            Liens utiles
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#presentation"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#parcours"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Parcours
              </a>
            </li>
            <li>
              <a
                href="#programmes"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Programmes
              </a>
            </li>
            <li>
              <a
                href="#debouches"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Débouchés
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-montserrat font-semibold text-lg mb-4 border-b border-red-200 inline-block">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              Faculté des sciences,Université d'Antananarivo
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              (+261) 34 53 140 38
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              administration@mit-ua.mg
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-university-red-light py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-100">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Mention Informatique. Tous droits
            réservés.
          </p>
          <p className="text-gray-200">
            Développé avec ❤️ par l’équipe Informatique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
