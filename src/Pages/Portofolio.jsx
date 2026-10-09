import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import { projects, certificates, techStacks } from "../data";

import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes, GraduationCap } from "lucide-react";

// Toggle button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// TabPanel component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}><Typography component="div">{children}</Typography></Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}



export default function Portofolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => setValue(newValue);

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects(prev => !prev);
    else setShowAllCertificates(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#020b14] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(20, 184, 166, 0.03) 0%, rgba(14, 165, 233, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(20, 184, 166, 0.1)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(14, 165, 233, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(20, 184, 166, 0.2)",
                },
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        {/* Tab Panels */}
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {displayedProjects.map((project, index) => (
              <div key={project.id || index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration="1000">
                <CardProject Img={project.Img} Title={project.Title} Description={project.Description} Link={project.Link} id={project.id} Year={project.Year} />
              </div>
            ))}
          </div>
          {projects.length > initialItems && <div className="mt-6 flex justify-start"><ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} /></div>}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayedCertificates.map((certificate, index) => (
              <div key={certificate.id || index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration="1000">
                <div className="group relative h-full">
                  <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-sky-500/20 hover:border-sky-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-emerald-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="relative z-10 p-6 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">{certificate.Title}</h3>
                        <p className="text-gray-300/80 text-sm mt-1">{certificate.Issuer}{certificate.Year ? ` (${certificate.Year})` : ""}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {certificates.length > initialItems && <div className="mt-6 flex justify-start"><ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} /></div>}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {techStacks.map((stack, index) => (
              <div key={index} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration="1000">
                <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
              </div>
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
