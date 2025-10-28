import { motion } from 'framer-motion';
import { useState } from 'react';

type SkillCategories = {
  'Programming Languages': string[];
  'Frameworks & Libraries': string[];
  'AI & Machine Learning': string[];
  'Tools & Technologies': string[];
  'Soft Skills': string[];
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<keyof SkillCategories>('Programming Languages');

  const skills: SkillCategories = {
    'Programming Languages': ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['Spring Boot', 'React', 'Node.js', 'Express.js'],
    'AI & Machine Learning': ['TensorFlow', 'PyTorch', 'Machine Learning Basics'],
    'Tools & Technologies': ['Git', 'Docker', 'Jenkins', 'AWS'],
    'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Agile Methodologies']
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(skills) as Array<keyof SkillCategories>).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">{activeCategory}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-gray-700 font-medium text-center">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;