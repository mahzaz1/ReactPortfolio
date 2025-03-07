// import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import ContactDetails from './ContactDetails';

// const INITIAL_STATE = Object.fromEntries(
//   Object.keys(config.contact.form).map(input => [input, ''])
// );

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

const Contact = () => {
  // const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  // const [form, setForm] = useState(INITIAL_STATE);
  // const [loading, setLoading] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  // ) => {
  //   if (e === undefined) return;
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
  //   if (e === undefined) return;
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       emailjsConfig.serviceId,
  //       emailjsConfig.templateId,
  //       {
  //         form_name: form.name,
  //         to_name: config.html.fullName,
  //         from_email: form.email,
  //         to_email: config.html.email,
  //         message: form.message,
  //       },
  //       emailjsConfig.accessToken
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert('Thank you. I will get back to you as soon as possible.');

  //         setForm(INITIAL_STATE);
  //       },
  //       error => {
  //         setLoading(false);

  //         console.log(error);
  //         alert('Something went wrong.');
  //       }
  //     );
  // };
  const socialMediaLinks = {
    linkedin: 'https://www.linkedin.com/in/ezaz-naseer-a71237243/',
    github: 'https://github.com/mahzaz1',
    facebook: 'https://www.facebook.com/ahzaz.naseer',
    twitter: 'https://twitter.com/yourprofile',
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <ContactDetails
          name="Ezaz Naseer"
          phone="+92 3409086301"
          email="malikahzaz301@gmail.com"
          address="G-13 Islamabad, Pakistan"
          socialMediaLinks={socialMediaLinks}
        />
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
