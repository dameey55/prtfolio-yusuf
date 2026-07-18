import React, { useState } from 'react';
import { User, Code, Briefcase, Mail, Menu, X, ExternalLink, Database, Smartphone, Video, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- MACLUUMAADKA ENGR. YUSUF ---
  const profile = {
    name: "Eng. Yusuf Mahamed Hassan",
    title: "Computer Science Graduate & Full-Stack Developer",
    bio: "I am a motivated and detail-oriented Bachelor of Computer Science graduate with a strong foundation in Web Development, Mobile Application Development, Database Management, Data Entry, and Video Editing. I possess strong problem-solving, analytical, and teamwork skills, committed to continuous learning and contributing to organization success through professionalism, creativity, and innovation.",
    email: "yusuf.mahamed@email.com", // Halkan ku qor email-kaaga rasmiga ah
    github: "https://github.com",       // Halkan ku qor link-ga GitHub-kaaga
    linkedin: "https://linkedin.com",   // Halkan ku qor link-ga LinkedIn-kaaga
    
    // Xirfadahaaga oo loo kala saaray qaybo professional ah
    skillCategories: [
      {
        title: "Web & Mobile Development",
        icon: <Code className="text-blue-600" size={22} />,
        items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Mobile App Dev", "HTML5 & CSS3"]
      },
      {
        title: "Database Management",
        icon: <Database className="text-purple-600" size={22} />,
        items: ["SQL", "MySQL", "Oracle Database", "Data Entry"]
      },
      {
        title: "Multimedia & Tools",
        icon: <Video className="text-red-600" size={22} />,
        items: ["Adobe Premiere Pro", "CapCut", "Microsoft Office", "Git & GitHub"]
      }
    ],

    // Mashaariic tusaale u ah waxyaabaha aad qaban karto
    projects: [
      {
        title: "Smart Database Management System",
        desc: "An optimized relational database designed using MySQL and Oracle for effective corporate data handling and structured querying.",
        tech: ["SQL", "MySQL", "Oracle"]
      },
      {
        title: "Responsive Web Application",
        desc: "A sleek, modern web platform built with React.js and Tailwind CSS focusing on high performance and user experience.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"]
      },
      {
        title: "Mobile App Interface",
        desc: "A clean and interactive mobile application layout focusing on smooth animations and user-centric functionalities.",
        tech: ["Mobile Dev", "UI/UX", "API Integration"]
      },
      {
        title: "Professional Video Showreel",
        desc: "A highly creative video editing portfolio showcasing dynamic transitions, color grading, and visual storytelling techniques.",
        tech: ["Premiere Pro", "CapCut", "Post-Production"]
      }
    ],

    // Qaybta muujinaysa dhiirigelintaada iyo aqoontaada
    coreValues: [
      { title: "Analytical Thinking", desc: "Strong capability to troubleshoot complex bugs and design efficient software structures." },
      { title: "Creative Innovation", desc: "Blending technical code with multimedia creativity like video editing and smooth UI design." },
      { title: "Team Collaboration", desc: "Excellent communication skills to work alongside cross-functional professional teams." }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header & Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Eng.Yusuf.Dev
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">About Me</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 flex flex-col shadow-inner">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 font-medium">About Me</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 font-medium">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 font-medium">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* 2. Hero Section (Soo jiidashada Koowaad) */}
      <header id="about" className="max-w-5xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
          <Award size={16} />
          <span>BSc in Computer Science Graduate</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
          Hi, I am <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{profile.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-2xl">{profile.title}</p>
        <p className="max-w-3xl text-slate-600 leading-relaxed text-lg mb-8">{profile.bio}</p>
        
        <div className="flex space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition">
            Let's Work Together
          </a>
          <a href="#projects" className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition">
            View My Work
          </a>
        </div>
      </header>

      {/* 3. Skills Categories (Xirfadahaaga oo Habaysan) */}
      <section id="skills" className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Expertise & Technical Skills</h2>
            <p className="text-slate-500 mt-2">My core strengths across computing and design domains.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {profile.skillCategories.map((cat, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  {cat.icon}
                  <h3 className="font-bold text-lg text-slate-800">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, idx) => (
                    <span key={idx} className="bg-white text-slate-700 text-sm px-3 py-1.5 rounded-lg border border-slate-200 font-medium shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values (Maxaa kugu gaar ah?) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {profile.coreValues.map((value, idx) => (
              <div key={idx} className="p-6 bg-white/60 backdrop-blur-xs rounded-xl border border-slate-200/60">
                <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-500 mt-1">A selection of technical solutions and creative edits.</p>
            </div>
            <span className="text-blue-600 font-semibold text-sm mt-2 md:mt-0 inline-flex items-center">
              Demonstrating Versatility & Detail <Briefcase size={16} className="ml-1" />
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {profile.projects.map((proj, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{proj.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-md font-medium">{t}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition">
                    Project details <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            Whether you have an open tech role, a database to structure, or a creative project—I am ready to deliver.
          </p>
          <a href={`mailto:${profile.email}`} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition inline-block text-lg mb-8">
            {profile.email}
          </a>
          
          <div className="flex justify-center space-x-6">
            {/* GitHub Icon (SVG Toos ah - No Error) */}
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn Icon (SVG Toos ah - No Error) */}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 text-sm text-center py-6 border-t border-slate-900">
        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;