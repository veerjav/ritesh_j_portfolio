import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowUpRight,
	Check,
	Code2,
	Database,
	Globe2,
	Layers3,
	Menu,
	X,
	Github,
	Linkedin,
	Mail,
	MessageCircle,
	Rocket,
	Server,
	ShieldCheck,
	ShoppingCart,
	Sparkles,
	Zap,
	ChevronLeft,
	ChevronRight,
	Phone,
} from "lucide-react";

const projects = [
	{
		title: "Luxora Real Estate — Your Dream Luxury Home",
		category: "Real Estate / Property Marketplace",
		description:
			"Luxora Real Estate is a modern luxury property platform featuring premium listings, advanced search filters, immersive visuals, and responsive design. It delivers a seamless experience for discovering properties and connecting with agents",
		tags: ["PHP", "Laravel", "MySQL", "REST API"],
		stats: "1K+ users · 500+ listings · 100+ agents",
	},
	{
		title: "Vidhya Mandir - School Management System",
		category: "Education / SaaS / Admin Dashboard",
		description:
			"Vidhya Mandir is a modern School Management System with dedicated dashboards for students, teachers, staff, and administrators. It simplifies academic, attendance, payroll, assignments, exams, and administrative management through a unified platform.",
		tags: ["Laravel", "PHP", "MySQL", "APIs"],
		stats: "1K+ users · 50+ classes · 10K+ records",
	},
	{
		title: "Ashv Nailz - Acuity scheduling Website",
		category: "Beauty Services / Online Booking",
		description:
			"Ashv Nailz is a luxury nail salon website with a custom Acuity Scheduling booking experience, nail-art gallery, service selection, and responsive design. It provides a seamless journey from exploring services to scheduling appointments.",
		tags: ["PHP", "Acuity scheduling", "MySQL", "JavaScript"],
		stats: "100+ appointments · 10+ services · 500+ users",
	},
	{
		title: "Happy Journey - Stay Anywhere Any Time",
		category: "Travel Marketplace / Booking Platform",
		description:
			"Happy Journey is a modern travel booking platform for discovering destinations, accommodations, and unique travel experiences. With smart search, verified listings, reviews, wishlists, and secure booking, it makes trip planning simple and enjoyable",
		tags: ["wordpress", "PHP", "MySQL", "API"],
		stats: "100+ users",
	},
];

const reviews = [
	{
		name: "lwdeddie",
		role: "United States",
		text: "Working with Ritesh was great! We were in a very difficult situation with a database that hadn't been cared for for a long time and was completely disrupting the server. Ritesh found the problems and fixed them all. We'll definitely be using Ritesh again for our other projects.",
		rating: 5,
	},
	{
		name: "sarahcouncell",
		role: "Thailand",
		text: "Thanks Ritesh Javiya so much for his work. and he solved the code issues, and right now it works very well. THANKS AGAIN. ",
		rating: 5,
	},
	{
		name: "Robin Sir",
		role: "U.K",
		text: "fantastic job, Ritesh continues to deliver exceptional development work. fantastic eye for detail and quality. thank you",
		rating: 5,
	},
	{
		name: "Moshelandau",
		role: "United States",
		text: "He is a genius in the database. I had a massive server issue where my team and developers were stuck and he fixed that quickly a professional",
		rating: 5,
	},
	{
		name: "Riccaicedo",
		role: "Colombia",
		text: "Highly recommended. The support team at my hosting account couldn't help me with the problem, but he fixed it easily.",
		rating: 5,
	},
	{
		name: "Rohit Savaliya",
		role: "India",
		text: "my work experience with ritesh is so excellent his knowledge about technology is deep be he is dedicated to work and delivering tasks on  time great experience ",
		rating: 5,
	},
];

const services = [
	{
		icon: Code2,
		title: "Full Stack Development",
		text: "Business websites, SaaS platforms, dashboards and custom web applications built around real requirements.",
	},
	{
		icon: Zap,
		title: "Laravel & PHP",
		text: "Clean backend architecture, APIs, authentication, business logic and maintainable Laravel applications.",
	},
	{
		icon: ShoppingCart,
		title: "Wordpress & WooCommerce",
		text: "WooCommerce and custom commerce solutions, integrations, payments, orders and performance improvements.",
	},
	{
		icon: Globe2,
		title: "API Integrations",
		text: "REST APIs, payment gateways and third-party services connected reliably to your application.",
	},
	{
		icon: ShieldCheck,
		title: "Bug Fixing & Optimization",
		text: "Find root causes, fix production issues, optimize slow queries and improve application reliability.",
	},
	{
		icon: Server,
		title: "Deployment & Support",
		text: "Linux server setup, Git workflows, deployment assistance, troubleshooting and post-launch support.",
	},
];

const skills = [
	"PHP",
	"Laravel",
	"MySQL",
	"JavaScript",
	"React.js",
	"Vue.js",
	"Node.js",
	"WordPress",
	"WooCommerce",
	"REST APIs",
	"Git",
	"Linux",
];

function Reveal({ children, delay = 0, className = "" }) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.12 }}
			transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}

function Logo() {
	return (
		<a className="logo" href="#home">
			<span>RJ</span>
			<b>Ritesh J</b>
		</a>
	);
}

function Character() {
	return (
		<div
			className="character-scene"
			aria-label="3D-style developer illustration"
		>
			<div className="orb orb-a" />
			<div className="orb orb-b" />
			<div className="character-shadow" />
			<motion.div
				className="character"
				animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<div className="character-head">
					<div className="hair" />
					<div className="ear ear-l" />
					<div className="ear ear-r" />
					<div className="face">
						<i />
						<i />
						<span />
					</div>
				</div>
				<div className="neck" />
				<div className="hoodie">
					<div className="hoodie-string s1" />
					<div className="hoodie-string s2" />
					<div className="shirt-code">&lt;/&gt;</div>
				</div>
				<div className="arm arm-l" />
				<div className="arm arm-r" />
				<div className="laptop">
					<div className="screen">
						<span>const</span> <b>dev</b> = <em>"Ritesh"</em>
						<br />
						<small>build({"{ scalable: true }"})</small>
					</div>
					<div className="base" />
				</div>
			</motion.div>
			<motion.div
				className="float-chip chip-php"
				animate={{ y: [0, -8, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
			>
				PHP
			</motion.div>
			<motion.div
				className="float-chip chip-laravel"
				animate={{ y: [0, 9, 0] }}
				transition={{ duration: 3.8, repeat: Infinity }}
			>
				Laravel
			</motion.div>
			<motion.div
				className="float-chip chip-react"
				animate={{ y: [0, -7, 0] }}
				transition={{ duration: 4.2, repeat: Infinity }}
			>
				React
			</motion.div>
			<div className="available-card">
				<span className="pulse-dot" /> Available for freelance
			</div>
		</div>
	);
}

function App() {
	const [menu, setMenu] = useState(false);
	const [review, setReview] = useState(0);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const go = (i) => setReview((i + reviews.length) % reviews.length);

	return (
		<div className="site">
			<div className="noise" />
			<header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
				<div className="container nav-inner">
					<Logo />
					<nav className={menu ? "open" : ""}>
						{[
							"About",
							"Services",
							"Projects",
							"Experience",
							"Reviews",
							"Contact",
						].map((x) => (
							<a
								key={x}
								href={`#${x.toLowerCase()}`}
								onClick={() => setMenu(false)}
							>
								{x}
							</a>
						))}
						<a
							className="nav-cta"
							href="#contact"
							onClick={() => setMenu(false)}
						>
							Let's Talk <ArrowUpRight size={16} />
						</a>
					</nav>
					<button
						className="menu-btn"
						onClick={() => setMenu(!menu)}
						aria-label="Toggle menu"
					>
						{menu ? <X /> : <Menu />}
					</button>
				</div>
			</header>

			<main>
				<section id="home" className="hero section">
					<div className="hero-grid" />
					<div className="container hero-content">
						<div className="hero-copy">
							<motion.div
								className="eyebrow"
								initial={{ opacity: 0, x: -15 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.15 }}
							>
								<span className="eyebrow-dot" /> Full Stack Web
								Developer
							</motion.div>
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.25 }}
							>
								I build <span>digital products</span> that work.
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.35 }}
							>
								I'm Ritesh J — a Full Stack Web Developer with
								8+ years of experience building fast, scalable
								and business-focused web applications with PHP,
								Laravel, MySQL and JavaScript.
							</motion.p>
							<motion.div
								className="hero-actions"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.45 }}
							>
								<a className="btn btn-primary" href="#contact">
									Let's Work Together{" "}
									<ArrowUpRight size={18} />
								</a>
								<a className="btn btn-ghost" href="#projects">
									View My Work <span>↓</span>
								</a>
							</motion.div>
							<motion.div
								className="hero-trust"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.65 }}
							>
								<div>
									<b>8+</b>
									<span>Years Experience</span>
								</div>
								<div>
									<b>50+</b>
									<span>Projects</span>
								</div>
								<div>
									<b>10+</b>
									<span>Technology</span>
								</div>
							</motion.div>
						</div>
						<Character />
					</div>
					<div className="scroll-cue">
						 <span />
					</div>
				</section>

				<section className="ticker">
					<div className="ticker-track">
						{[...skills, ...skills].map((s, i) => (
							<span key={i}>
								{s}
								<b>✦</b>
							</span>
						))}
					</div>
				</section>

				<section id="about" className="section about">
					<div className="container split">
						<Reveal>
							<div className="section-label">01 / ABOUT ME</div>
							<h2>
								More than code.
								<br />
								<span>
									Solutions that move business forward.
								</span>
							</h2>
						</Reveal>
						<Reveal delay={0.12}>
							<div className="about-copy">
								<p>
									I'm a Full Stack Web Developer focused on
									turning business requirements into reliable
									digital products. I work across backend,
									frontend, databases, APIs and deployment —
									so clients don't have to coordinate multiple
									developers for every problem.
								</p>
								<p>
									From fixing a critical Laravel issue to
									building a complete SaaS, CRM, ERP or
									eCommerce platform, my approach is simple:
									understand the goal, build cleanly,
									communicate clearly and deliver something
									that can grow.
								</p>
								<div className="mini-proof">
									<div>
										<Check /> Clean & maintainable code
									</div>
									<div>
										<Check /> Performance-focused
										development
									</div>
									<div>
										<Check /> Clear communication
									</div>
									<div>
										<Check /> Long-term support mindset
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</section>

				<section id="services" className="section services">
					<div className="container">
						<Reveal>
							<div className="section-label">02 / WHAT I DO</div>
							<div className="section-heading">
								<h2>
									Built around <span>your problem.</span>
								</h2>
								<p>
									From idea to production, I can handle the
									technical side of your web project.
								</p>
							</div>
						</Reveal>
						<div className="service-grid">
							{services.map((s, i) => (
								<Reveal key={s.title} delay={i * 0.05}>
									<motion.article
										className="service-card"
										whileHover={{ y: -7 }}
									>
										<div className="icon-box">
											<s.icon size={22} />
										</div>
										<h3>{s.title}</h3>
										<p>{s.text}</p>
										<ArrowUpRight
											className="card-arrow"
											size={20}
										/>
									</motion.article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section id="skills" className="section skills-section">
					<div className="container split skills-split">
						<Reveal>
							<div className="section-label">03 / TECH STACK</div>
							<h2>
								Tools I use to
								<br />
								<span>build & ship.</span>
							</h2>
							<p className="muted">
								A practical full-stack toolkit for building,
								integrating, debugging and scaling modern web
								applications.
							</p>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="skill-cloud">
								{skills.map((s, i) => (
									<motion.div
										key={s}
										className="skill-pill"
										whileHover={{
											scale: 1.05,
											rotate: i % 2 ? 1 : -1,
										}}
									>
										{s}
									</motion.div>
								))}
							</div>
						</Reveal>
					</div>
				</section>

				<section id="projects" className="section projects">
					<div className="container">
						<Reveal>
							<div className="section-label">
								04 / FEATURED PROJECTS
							</div>
							<div className="section-heading">
								<h2>
									Selected <span>work.</span>
								</h2>
								<p>
									Dummy projects are included for now. Replace
									titles, screenshots, links and metrics with
									your real portfolio projects.
								</p>
							</div>
						</Reveal>
						<div className="project-grid">
							{projects.map((p, i) => (
								<Reveal key={p.title} delay={i * 0.06}>
									<motion.article
										className="project-card"
										whileHover={{ y: -8 }}
									>
										<div className={`project-art art-${i}`}>
											<div className="window-top">
												<i />
												<i />
												<i />
											</div>
											<div className="project-ui">
												<span>{p.category}</span>
												<strong>
													{p.title.split(" — ")[0]}
												</strong>
												<div className="ui-lines">
													<i />
													<i />
													<i />
												</div>
											</div>
											<div className="project-number">
												0{i + 1}
											</div>
										</div>
										<div className="project-body">
											<div className="project-meta">
												<span>{p.category}</span>
												<span>{p.stats}</span>
											</div>
											<h3>{p.title}</h3>
											<p>{p.description}</p>
											<div className="tags">
												{p.tags.map((t) => (
													<span key={t}>{t}</span>
												))}
											</div>
											<button className="text-link">
												Replace with case study{" "}
												<ArrowUpRight size={17} />
											</button>
										</div>
									</motion.article>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section id="experience" className="section experience">
					<div className="container split">
						<Reveal>
							<div className="section-label">05 / EXPERIENCE</div>
							<h2>
								Experience that
								<br />
								<span>solves real problems.</span>
							</h2>
							<p className="muted">
								A background across web development, project
								delivery and business applications.
							</p>
						</Reveal>
						<div className="timeline">
							<Reveal delay={0.08}>
								<div className="timeline-item">
									<span>2015 — 2019</span>
									<div>
										<h3>Web Developer</h3>
										<b>Ncrypted</b>
										<p>
											Developed and maintained web
											applications, integrations and
											client-focused solutions.
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="timeline-item">
									<span>2019 — 2025</span>
									<div>
										<h3>
											Project Manager / Senior Web
											Developer
										</h3>
										<b>Froyo Tech</b>
										<p>
											Lead and developed web projects
											across PHP, Laravel, APIs, databases
											and business workflows.
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal delay={0.16}>
								<div className="timeline-item">
									<span>Freelance</span>
									<div>
										<h3>Full Stack Web Developer</h3>
										<b>Remote / Independent</b>
										<p>
											Helping businesses fix, improve and
											build web products with a practical
											full-stack approach.
										</p>
									</div>
								</div>
							</Reveal>
						</div>
					</div>
				</section>

				<section id="reviews" className="section reviews">
					<div className="container">
						<Reveal>
							<div className="section-label">
								06 / CLIENT REVIEWS
							</div>
							<div className="section-heading">
								<h2>
									What clients <span>say.</span>
								</h2>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="review-wrap">
								<button
									className="review-btn"
									onClick={() => go(review - 1)}
									aria-label="Previous review"
								>
									<ChevronLeft />
								</button>
								<AnimatePresence mode="wait">
									<motion.div
										key={review}
										className="review-card"
										initial={{ opacity: 0, x: 30 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -30 }}
										transition={{ duration: 0.3 }}
									>
										<div className="quote">“</div>
										<div className="stars">
											{"★".repeat(reviews[review].rating)}
										</div>
										<p>{reviews[review].text}</p>
										<div className="review-person">
											<div className="avatar">
												{reviews[review].name.slice(-2)}
											</div>
											<div>
												<b>{reviews[review].name}</b>
												<span>
													{reviews[review].role}
												</span>
											</div>
										</div>
									</motion.div>
								</AnimatePresence>
								<button
									className="review-btn"
									onClick={() => go(review + 1)}
									aria-label="Next review"
								>
									<ChevronRight />
								</button>
							</div>
						</Reveal>
						<div className="review-dots">
							{reviews.map((_, i) => (
								<button
									key={i}
									className={i === review ? "active" : ""}
									onClick={() => go(i)}
									aria-label={`Review ${i + 1}`}
								/>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="section contact">
					<div className="container">
						<Reveal>
							<div className="contact-card">
								<div className="contact-glow" />
								<div className="section-label">
									07 / LET'S BUILD
								</div>
								<h2>
									Have a project,
									<br />
									<span>problem or idea?</span>
								</h2>
								<p>
									Tell me what you're building, what is
									broken, or what you want to improve. Let's
									turn it into a reliable web solution.
								</p>
								<div className="contact-actions">
									<a
										className="btn btn-primary"
										href="mailto:your@email.com"
									>
										Start a Project{" "}
										<ArrowUpRight size={18} />
									</a>
									<a
										className="btn btn-ghost"
										href="#projects"
									>
										Explore Projects
									</a>
								</div>
								<div className="contact-links">
									<a href="mailto:ritesh.javiya@email.com" target="_new">
										<Mail size={17} /> ritesh.javiya@gmail.com
									</a>
									<a href="www.linkedin.com/in/ritesh-javiya" target="_new">
										<Linkedin size={17} /> LinkedIn
									</a>
									<a href="#">
										<Phone size={17} /> +91 9558229006
									</a>
									<a href="https://www.fiverr.com/veerjav?public_mode=true" target="_new">
										<MessageCircle size={17} /> Fiverr /
										Upwork
									</a>
								</div>
							</div>
						</Reveal>
					</div>
				</section>
			</main>

			<footer>
				<div className="container footer-inner">
					<Logo />
					<p>© 2026 Ritesh J. Full Stack Web Developer.</p>
					<a href="#home">Back to top ↑</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
