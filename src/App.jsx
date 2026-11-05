import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  ChevronUp, Code2, Cpu, GraduationCap, Languages, Menu, Mic2, Moon,
  MonitorSmartphone, Presentation, Sun, Users, X, Bot, Image as ImageIcon
} from 'lucide-react'
import { profile, education, skills, achievements, organizations, projects, gallery } from './content'

const iconMap = {
  code: Code2, app: MonitorSmartphone, bot: Bot, teach: BookOpen,
  language: Languages, mic: Mic2, users: Users, cpu: Cpu, presentation: Presentation,
}
const navItems = [
  ['About', 'about'],
  ['Education', 'education'],
  ['Expertise', 'skills'],
  ['Achievements', 'achievements'],
  ['Leadership', 'organization'],
  ['Projects', 'projects'],
  ['Gallery', 'gallery']
]
const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [.22, 1, .36, 1] } } }

function SectionHeading({ eyebrow, title, description, light = false }) {
  return <motion.div className={`section-heading ${light ? 'light' : ''}`} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    <p>{description}</p>
  </motion.div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <div className={lightMode ? 'app light-mode' : 'app'}>
    <nav className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>AHMAD<span>.</span>NADZIFI</a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </div>
      <div className="nav-actions">
        <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setLightMode(!lightMode)}>{lightMode ? <Moon size={16} /> : <Sun size={16} />}</button>
        <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={14} /></a>
      </div>
    </nav>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" style={{ backgroundImage: `url("${profile.portrait}")` }} />
        <div className="hero-shade" />
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-content container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .13 } } }}>
            <motion.div className="hero-kicker" variants={reveal}><span className="pulse-dot" /> PERSONAL PROFILE <i /> {profile.location.toUpperCase()}</motion.div>
            <motion.h1 variants={reveal}>Ahmad<br /><span>Nadzifi.</span></motion.h1>
            <motion.p className="hero-description" variants={reveal}>{profile.tagline}<br /><span>{profile.heroDescription}</span></motion.p>
            <motion.div className="hero-buttons" variants={reveal}>
              <a className="button button-white" href="#about">Explore my profile <ArrowUpRight size={16} /></a>
              <a className="button button-outline" href="#projects">Discover my work <ArrowRight size={16} /></a>
            </motion.div>
            <motion.div className="hero-bottom" variants={reveal}>
              <div><b>01</b><span>Technology</span></div><div><b>02</b><span>Leadership</span></div><div><b>03</b><span>Education</span></div>
            </motion.div>
          </motion.div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        <div className="hero-index">AN / 2026</div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-layout">
          <motion.div className="about-visual" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
            <img src={profile.aboutPhoto} alt="Portrait Ahmad Nadzifi" />
            <div className="image-caption"><span>AHMAD NADZIFI</span><span>PROBOLINGGO · ID</span></div>
            <div className="image-stamp">A.N.</div>
          </motion.div>
          <div className="about-copy">
            <span className="eyebrow">A LITTLE INTRODUCTION</span>
            <h2>Curious mind.<br /><em>Purposeful action.</em></h2>
            {profile.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            <div className="facts-grid">
              <div className="fact"><span>Born</span><strong>{profile.birth}</strong></div>
              <div className="fact"><span>Focus</span><strong>Technology & Leadership</strong></div>
              <div className="fact"><span>University</span><strong>Universitas Nurul Jadid</strong></div>
              <div className="fact"><span>University</span><strong>Universitas Siber Muhammadiyah</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section dark-section" id="education">
        <div className="container">
          <SectionHeading eyebrow="ACADEMIC JOURNEY" title={<>Education<br /><em>timeline.</em></>} description="Perjalanan pendidikan yang membentuk cara berpikir, karakter, dan semangat saya untuk terus berkembang." light />
          <div className="timeline">
            {education.map((item, i) => <motion.article className="timeline-item" key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} transition={{ delay: i * .035 }}>
              <div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div>
              <div><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="WHAT I DO" title={<>Skills & <em>expertise.</em></>} description="Perpaduan kemampuan teknis, komunikasi, pendidikan, dan kepemimpinan." />
          <div className="skills-grid">
            {skills.map((skill, i) => { const Icon = iconMap[skill.icon] || Code2; return <motion.article className="skill-card" key={skill.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} transition={{ delay: (i % 3) * .07 }}>
              <div className="skill-icon"><Icon size={21} strokeWidth={1.7} /></div><h3>{skill.title}</h3><p>{skill.detail}</p><span className="card-arrow"><ArrowUpRight size={16} /></span>
            </motion.article> })}
          </div>
        </div>
      </section>

      <section className="section achievements-section dark-section" id="achievements">
        <div className="container">
          <SectionHeading eyebrow="MILESTONES" title={<>Achievements &<br /><em>recognition.</em></>} description="Pencapaian akademik, kompetisi, riset, dan karya yang menjadi bagian dari perjalanan saya." light />
          <div className="achievement-grid">
            {achievements.map((item, i) => <motion.article className="achievement-card" key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
              <div className="medal">{item.medal}</div><div className="achievement-content"><span>{item.type}</span><h3>{item.title}</h3><p>{item.detail}</p></div><span className="achievement-number">{String(i + 1).padStart(2, '0')}</span>
            </motion.article>)}
          </div>
          <p className="small-note">Catatan: detail dan dokumen pendukung prestasi dapat ditambahkan pada tahap pengisian galeri sertifikat.</p>
        </div>
      </section>

      <section className="section organization-section" id="organization">
        <div className="container">
          <SectionHeading eyebrow="LEADERSHIP & SERVICE" title={<>Leadership in<br /><em>action.</em></>} description="Pengalaman organisasi mengajarkan tanggung jawab, koordinasi, keberanian mengambil keputusan, dan kerja sama." />
          <div className="organization-grid">
            {organizations.map(item => <motion.article className="organization-card" key={item.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="org-number">{item.number}</span><span className="org-label">ORGANIZATIONAL EXPERIENCE</span><h3>{item.role}</h3><h4>{item.place}</h4><p>{item.detail}</p>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORKS" title={<>Projects &<br /><em>innovation.</em></>} description="Ruang untuk menampilkan karya digital, eksperimen teknologi, dan solusi yang saya kembangkan." />
          <div className="projects-grid">
            {projects.map((project, i) => <motion.article className="project-card" key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span>{project.status}</span><div className="project-image-icon"><ArrowUpRight /></div></div>
              <div className="project-details"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="container">
          <SectionHeading eyebrow="MOMENTS & MEMORIES" title={<>Life in <em>frames.</em></>} description="Dokumentasi pendidikan, organisasi, kompetisi, kegiatan, dan perjalanan. Klik foto untuk melihat lebih dekat." />
          <div className="gallery-grid">
            {gallery.map((item, i) => <motion.button className={`gallery-item ${item.shape || ''}`} key={item.src} onClick={() => setSelectedImage(item)} aria-label={`Open ${item.alt}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={item.src} alt={item.alt} loading="lazy" /><span><ImageIcon size={17} /> {item.alt}</span>
            </motion.button>)}
          </div>
        
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-panel">
          <div className="contact-copy"><span className="eyebrow">HAVE AN IDEA?</span><h2>Let's create<br /><em>something meaningful.</em></h2><p>Terbuka untuk kolaborasi, proyek teknologi, kesempatan mengajar, diskusi, dan kegiatan pengembangan diri.</p><div className="contact-location">BASED IN {profile.location.toUpperCase()}</div></div>
          <div className="contact-links">
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><ArrowUpRight /></a>
            <a href={profile.instagram} target="_blank" rel="noreferrer"><span>Instagram · {profile.instagramHandle}</span><ArrowUpRight /></a>
            <a href={`mailto:${profile.email}`}><span>{profile.email}</span><ArrowUpRight /></a>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home">AHMAD<span>.</span>NADZIFI</a><p>© {new Date().getFullYear()} Ahmad Nadzifi. All rights reserved.</p><span>BUILDING WITH PURPOSE.</span></div></footer>
    <AnimatePresence>{selectedImage && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}><button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close"><X /></button><motion.img src={selectedImage.src} alt={selectedImage.alt} initial={{ scale: .92 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()} /></motion.div>}</AnimatePresence>
    <AnimatePresence>{showTop && <motion.button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} aria-label="Back to top"><ChevronUp /></motion.button>}</AnimatePresence>
  </div>
}

export default App
