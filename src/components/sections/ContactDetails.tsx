import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

interface SocialMediaLinks {
  linkedin: string;
  github: string;
  facebook: string;
  twitter: string;
}

interface ContactDetailsProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  socialMediaLinks: SocialMediaLinks;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  name,
  phone,
  email,
  address,
  socialMediaLinks,
}) => {
  return (
    <div className="flex flex-col items-start bg-black-100 p-6 rounded-2xl text-white">
      {/* <h2 className="text-3xl font-bold mb-4">Contact Information</h2> */}
      <div className="mb-4">
        <strong>Name:</strong> {name}
      </div>
      <div className="mb-4">
        <strong>Phone:</strong> {phone}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {email}
      </div>
      <div className="mb-4">
        <strong>Address:</strong> {address}
      </div>

      <div className="flex gap-4 mt-6">
        {socialMediaLinks.linkedin && (
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={30} />
          </a>
        )}
        {socialMediaLinks.github && (
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={30} />
          </a>
        )}
        {socialMediaLinks.facebook && (
          <a
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaFacebook size={30} />
          </a>
        )}
        {socialMediaLinks.twitter && (
          <a
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaTwitter size={30} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;
