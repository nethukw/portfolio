import React, { useEffect } from "react";
import {
  Code,
  Smartphone,
  ShieldCheck,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services, background } from "../data";

// Service icons mapping
const SERVICE_ICONS = {
  Code,
  Smartphone,
  ShieldCheck,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  default: Code,
};

const ServiceCard = ({ icon: iconName, title, description, features }) => {
  const Icon =
    SERVICE_ICONS[iconName] || SERVICE_ICONS[title] || SERVICE_ICONS.default;

  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-sky-500/20 hover:border-sky-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-emerald-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-6 md:p-8 z-10 h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Icon
                className="w-6 h-6 md:w-8 md:h-8 text-blue-400"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent mb-3 md:mb-4">
            {title}
          </h3>

          <p className="text-gray-300/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <span className="text-sky-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const BackgroundCard = ({ icon: iconName, title, items }) => {
  const Icon = SERVICE_ICONS[iconName] || SERVICE_ICONS.default;

  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-sky-500/20 hover:border-sky-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-emerald-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-6 md:p-8 z-10 h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent mb-4">
            {title}
          </h3>

          <div className="space-y-5">
            {items.map((item, idx) => (
              <div key={idx}>
                <p className="text-white font-semibold text-sm md:text-base">{item.heading}</p>
                {item.sub && <p className="text-gray-300/80 text-sm">{item.sub}</p>}
                {item.meta && <p className="text-sky-400 text-xs mt-0.5">{item.meta}</p>}
                {item.points && (
                  <ul className="space-y-2 mt-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-sky-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full py-16 md:py-24 bg-[#020b14] overflow-hidden"
      id="Services"
    >
      {/* Services Section */}
      <div
        className="mb-16 md:mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] mb-4">
            Services I Offer
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive development services tailored to bring your ideas to
            life with cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education Section */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] mb-4">
            Experience &amp; Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            My professional experience, academic background, and the languages I speak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {background.map((block, index) => (
            <div
              key={block.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <BackgroundCard {...block} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
