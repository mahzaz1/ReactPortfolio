import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { ComputersCanvas } from '../canvas';
import { config } from '../../constants/config';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Web Developer - Ezaz Naseer.pdf';
    link.download = 'Web Developer - Ezaz Naseer.pdf'; // Optional: rename the file on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className={`relative mx-auto h-[400px] sm:h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <button
            onClick={handleDownload}
            className="block sm:hidden mt-5 px-6 py-3 rounded-full border border-transparent hover:bg-transparent hover:border-[#915EFF] font-medium text-white text-xs sm:text-base transition-transform  duration-200 bg-[#915EFF] active:scale-95 shadow-[0_0_10px_#915EFF] hover:shadow-[0_0_15px_#915EFF]"
          >
            Get My Resume
          </button>
        </div>
      </div>

      <ComputersCanvas />
      <div className="hidden sm:block">
        <div className=" xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
          <a href="#about">
            <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="bg-secondary mb-1 h-3 w-3 rounded-full"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
