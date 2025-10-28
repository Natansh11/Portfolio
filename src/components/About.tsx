import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] py-16 px-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            I am a passionate Java Developer with expertise in frontend development and a keen interest in AI technologies.
            I thrive in collaborative environments and enjoy working on challenging projects that push the boundaries of technology.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My experience spans across various aspects of software development, from building robust backend systems with Java
            to creating intuitive user interfaces using modern frontend frameworks like React.
          </p>
          <p className="text-lg text-gray-700">
            I am particularly enthusiastic about artificial intelligence and its applications in solving real-world problems.
            As a team player, I value effective communication and enjoy contributing to a positive work environment.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;