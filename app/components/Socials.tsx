import { Profile } from "../constants";
import Link from "next/link";
import {
  Linkedin,
  Github,
  Twitter,
  Twitch,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";

const socialIcons = {
  linkedin: <Linkedin className="w-4.5 h-4.5" />,
  github: <Github className="w-4.5 h-4.5" />,
  twitter: <Twitter className="w-4.5 h-4.5" />,
  instagram: <Instagram className="w-4.5 h-4.5" />,
  facebook: <Facebook className="w-4.5 h-4.5" />,
  youtube: <Youtube className="w-4.5 h-4.5" />,
  twitch: <Twitch className="w-4.5 h-4.5" />,
};

const Socials = () => {
  return (
    <div className="flex gap-3">
      {Object.entries(Profile.social).map(([key, value]) => (
        <Link
          href={value || "#"}
          key={key}
          className="p-2 border border-[#5f6368] rounded-full opacity-50 hover:opacity-100 hover:shadow-[0px_4px_4px_rgba(2,12,27,0.7)] hover:bg-[#4db5c2] hover:text-white hover:border-transparent transition-all duration-400 ease-in-out cursor-pointer group"
        >
          {socialIcons[key as keyof typeof socialIcons]}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
