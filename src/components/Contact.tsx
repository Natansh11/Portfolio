import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactInfo = {
    email: 'natanshbyjus@gmail.com',
    phone: '7991180519',
    github: 'https://github.com/Natansh11'
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-16 px-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {contactInfo.github}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;