
import React from 'react';
import { Layers, Cpu, Globe, Zap, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold tracking-tighter">
      ROVO<span className="text-blue-500">.</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
      <a href="#services" className="hover:text-white transition-colors">Services</a>
      <a href="#work" className="hover:text-white transition-colors">Work</a>
      <a href="#about" className="hover:text-white transition-colors">About</a>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
      Get Started
    </button>
  </nav>
);

const Hero = () => (
  <header className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-semibold tracking-widest text-blue-400 uppercase">
        Next Generation Software Agency
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Building the items that <br />
        <span className="gradient-text">define the future.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        Rovo partners with visionary companies to design, build, and scale world-class software products.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          Start your project <ArrowRight size={18} />
        </button>
        <button className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
          View our work
        </button>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard 
        icon={Layers} 
        title="Web Platforms" 
        desc="Fast, scalable web applications built with modern frontend frameworks and robust backends."
      />
      <ServiceCard 
        icon={Cpu} 
        title="AI Integration" 
        desc="Leveraging LLMs and machine learning to build intelligent features that drive value."
      />
      <ServiceCard 
        icon={Globe} 
        title="Cloud Infra" 
        desc="Secure and scalable cloud architecture designed for high availability and performance."
      />
      <ServiceCard 
        icon={Zap} 
        title="Speed Mining" 
        desc="Optimizing legacy systems and codebases for maximum efficiency and speed."
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="text-xl font-bold mb-2">ROVO</div>
        <p className="text-gray-500 text-sm">© 2024 Rovo Labs Inc. All rights reserved.</p>
      </div>
      <div className="flex gap-6 text-gray-400">
        <Twitter size={20} className="hover:text-white cursor-pointer" />
        <Github size={20} className="hover:text-white cursor-pointer" />
        <Linkedin size={20} className="hover:text-white cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <section id="work" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400">A glimpse into the products we've brought to life.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="h-64 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-8 flex items-end">
            <span className="text-2xl font-bold">Fintech Dashboard</span>
          </div>
          <div className="h-64 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-800 p-8 flex items-end">
            <span className="text-2xl font-bold">AI Content Studio</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
