import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { Code2, Brain, Database, Cloud } from "lucide-react";

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML":
        return <Brain size={20} className="text-purple-500" />;
      case "Frontend":
        return <Code2 size={20} className="text-blue-500" />;
      case "Backend":
        return <Database size={20} className="text-green-500" />;
      case "DevOps":
        return <Cloud size={20} className="text-orange-500" />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My toolbelt for building the future, featuring a modern stack of AI,
            frontend, and backend technologies.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category} className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
                <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-4"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {SKILLS.filter((s) => s.category === category).map(
                  (skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + catIndex * 0.1 }}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary hover:shadow-lg dark:hover:border-primary transition-all group"
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                        {skill.icon ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`w-full h-full object-contain ${
                              skill.name === "AWS" || skill.name === "Next.js"
                                ? "dark:invert"
                                : ""
                            }`}
                            loading="lazy"
                          />
                        ) : (
                          <Code2 size={32} className="text-gray-400" />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
