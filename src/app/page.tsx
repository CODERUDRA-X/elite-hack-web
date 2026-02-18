"use client";

import { motion } from "framer-motion";
import { Rocket, Trophy, Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

const TIMELINE = [
  { date: "Now", title: "Registrations Open", live: true },
  { date: "Feb 28", title: "Mandatory Pre-Hackathon Task" },
  { date: "10 Feb", title: "Problem Statements Reveal" },
  { date: "28 Feb", title: "Hackathon Starts (36 Hours)" },
  { date: "1 March", title: "Results Declared" },
];

const PRIZES = [
  { rank: "1st Place", amount: "₹5,000", extra: "+ Swag Kit" },
  { rank: "2nd Place", amount: "₹3,000", extra: "+ Swag Kit" },
  { rank: "3rd Place", amount: "₹2,000", extra: "+ Swag Kit" },
];

const SPECIAL_TRACKS = [
  "Best Girls Team",
  "Best UI/UX",
  "Most Innovative",
];

const SPONSORS = [
  { name: "Unstop", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
  { name: "Keploy", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" },
  { name: "Odoo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
  { name: "XYZ", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
  { name: "CodingBlocks", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" },
];

function Starfield() {
  return <div className="starfield" aria-hidden />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-orbitron font-bold text-lg text-white tracking-wider">
          {"<"} ELITE HACK 1.0 {" />"}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-space-grotesk text-sm text-white/80 hover:text-brand-pink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button className="glass px-4 py-2 rounded-lg text-sm font-medium text-white hover:border-brand-pink/50 hover:text-brand-pink transition-all">
            Login
          </button>
        </div>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass-strong border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-space-grotesk text-white/80 hover:text-brand-pink"
            >
              {link.label}
            </Link>
          ))}
          <button className="glass px-4 py-2 rounded-lg text-sm font-medium text-white w-fit">
            Login
          </button>
        </div>
      )}
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-space-grotesk text-brand-cyan text-sm sm:text-base uppercase tracking-[0.3em] mb-4"
      >
        India&apos;s Most Anticipated 36-Hour Online Hackathon
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6"
      >
        <span className="glitch text-glow" data-text="ELITE HACK 1.0">
          ELITE HACK 1.0
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-space-grotesk text-white/70 text-base sm:text-lg max-w-xl mb-10"
      >
        Join 10,000+ innovators. 500+ Colleges. Build Real-World Solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="https://unstop.com/hackathons/elite-hack-10-jb-institute-of-engineering-and-technology-1633676?lb=txdBDAq&utm_medium=Share&utm_source=nishant07&utm_campaign=Online_coding_challenge"
          className="inline-flex items-center gap-2 bg-brand-pink text-white font-orbitron font-semibold px-6 py-3 rounded-lg neon-border hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] transition-all"
        >
          Register Now <Rocket size={18} />
        </a>
        <a
          href="https://chat.whatsapp.com/CIdq2CZhIlqHllZu0kZ0ku"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass border border-brand-pink/50 text-brand-pink font-orbitron font-semibold px-6 py-3 rounded-lg hover:bg-brand-pink/10 transition-all"
        >
          Join Community
        </a>
      </motion.div>
      {/* 👨‍🚀 FLOATING ASTRONAUT SECTION - YAHAN PASTE KIYA */}
    <div className="absolute right-[5%] top-[25%] hidden lg:block z-10 pointer-events-none">
      <div className="absolute inset-0 bg-brand-pink blur-[120px] opacity-20 animate-pulse rounded-full"></div>
      <img 
        src="https://raw.githubusercontent.com/CODERUDRA-X/elite-hack-web/refs/heads/main/istockphoto-1449939596-612x612-removebg-preview.png" 
        alt="Floating Astronaut"
        className="w-[350px] h-auto animate-float drop-shadow-[0_0_30px_rgba(255,0,127,0.3)] rotate-12 opacity-90 transition-all duration-500"
      />
    </div>     
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-3xl sm:text-4xl font-bold text-center text-white mb-16"
        >
          Timeline
        </motion.h2>
        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-pink via-brand-purple to-brand-cyan -translate-x-px" />
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              <div
                className={`flex-1 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:text-right" : "sm:text-left"
                }`}
              >
                <div className="glass-strong rounded-xl p-6 border border-white/10 hover:border-brand-pink/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-brand-pink shrink-0" />
                    <span className="font-orbitron text-brand-cyan text-sm">
                      {item.date}
                    </span>
                    {item.live && (
                      <span className="text-xs bg-brand-pink/20 text-brand-pink px-2 py-0.5 rounded-full font-medium">
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-brand-pink border-4 border-deep-space -translate-x-1/2 shrink-0" />
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrizesSection() {
  return (
    <section id="prizes" className="relative py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-3xl sm:text-4xl font-bold text-center text-white mb-6"
      >
        Prizes
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-brand-pink font-orbitron text-xl mb-16"
      >
        Prize Pool: ₹50,000+
      </motion.p>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 mb-12">
        {PRIZES.map((prize, i) => (
          <motion.div
            key={prize.rank}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-strong rounded-2xl p-6 border border-white/20 hover:border-brand-pink/40 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex flex-col items-center text-center">
              <Trophy className="w-10 h-10 text-brand-pink mb-4" />
              <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                {prize.rank}
              </h3>
              <p className="text-2xl font-bold text-brand-pink">{prize.amount}</p>
              <p className="text-white/70 text-sm mt-1">{prize.extra}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-orbitron text-white/90 mb-4">Special Tracks</p>
        <div className="flex flex-wrap justify-center gap-3">
          {SPECIAL_TRACKS.map((track) => (
            <span
              key={track}
              className="glass px-4 py-2 rounded-full text-sm text-brand-cyan border border-brand-cyan/30"
            >
              {track}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-20 overflow-hidden bg-black/50 border-t border-white/10">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-orbitron">
        SPONSORS
      </h2>

      {/* Train Container */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* Is div par animation lagi hai */}
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-16 py-4">
          
          {/* Hum list ko 4 baar repeat kar rahe hain taaki train lambi ho aur ruke nahi */}
          {[...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={sponsor.url} 
                alt={sponsor.name} 
                className="h-10 w-auto object-contain" // Height fix kar di taaki layout na toote
              />
            </div>
          ))}
        </div>

        {/* Side Fades (Optional: Kinaron par dhundhla effect) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center glass-strong rounded-3xl p-8 sm:p-12 border border-white/10"
      >
        <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="font-space-grotesk text-white/70 mb-8">
          Questions? Reach out to us for partnerships, support, or just to say hi.
        </p>
        <a
          href="mailto:contact@elitehack.com"
          className="inline-block bg-brand-pink text-white font-orbitron font-semibold px-8 py-3 rounded-lg hover:shadow-[0_0_30px_rgba(255,0,127,0.4)] transition-all"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-orbitron text-sm text-white/60">
          {"<"} ELITE HACK 1.0 {" />"}
        </p>
        <p className="font-space-grotesk text-sm text-white/50">
          © {new Date().getFullYear()} Elite Hack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TimelineSection />
        <PrizesSection />
        <SponsorsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
