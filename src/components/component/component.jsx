// src/components/component/Component.jsx
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import Image from 'next/image';


export function Component() {
  return (
    
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 bg-black/70">
          <Link href="#" className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
            <LaptopIcon className="h-6 w-6 text-primary" />
            <span className="font-bold tracking-tight text-foreground text-xl"><b>PRATIK SHRESTHA</b></span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#about" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>About</b>
            </Link>
            <Link href="#projects" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>Projects</b>
            </Link>
            <Link href="#skills" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>Skills</b>
            </Link>
            <Link href="#awards" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>Awards</b>
            </Link>
            <Link href="#colloboration" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>Colloborations</b>
            </Link>
            <Link href="#contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <b>Contact</b>
            </Link>
          </nav>
          <Button variant="outline" size="lg" className="md:hidden transition-transform duration-500 ease-in-out transform hover:scale-105" onClick={() => {}}>
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
                Securing the Digital Frontier
              </h1>
              <p className="text-lg text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
                Cybersecurity graduate with a passion for protecting the digital world.
              </p>
              <div className="flex gap-4">
                <Link href="#projects" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform duration-300 ease-in-out hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" prefetch={false}>
                  View Projects
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-transform duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" prefetch={false}>
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image src="/pshrestha.github.io/intro1.png" width={500} height={200} alt="Hero Image" className="intro_pic mx-auto rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </div>
          </div>
        </section>
        <section id="about" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
                As a cybersecurity graduate, I am passionate about protecting the digital world from evolving threats. With a strong foundation in ethical hacking, network security, and cryptography, I am dedicated to developing innovative solutions to safeguard critical infrastructure and sensitive data.
              </p>
              <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
                My expertise extends beyond technical skills, as I also possess excellent problem-solving abilities and a keen eye for detail. I thrive in collaborative environments, where I can leverage my communication skills to bridge the gap between technical and non-technical stakeholders.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/pshrestha.github.io/me.jpg"
                width={600}
                height={600}
                alt="About Image"
                className="me animated-border mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Projects
          </h2>
          <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Explore a selection of my cybersecurity projects, showcasing my expertise in various domains.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-transform duration-500 ease-in-out transform hover:scale-105">
              <CardHeader>
                <CardTitle>Vulnerability Assessment</CardTitle>
                <CardDescription>
                  Conducted a comprehensive vulnerability assessment for a client's web application, identifying and mitigating critical security flaws.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LaptopIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Web Application</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">2022</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-500 ease-in-out transform hover:scale-105">
              <CardHeader>
                <CardTitle>Penetration Testing</CardTitle>
                <CardDescription>
                  Conducted a comprehensive penetration test for a client's network infrastructure, identifying and mitigating critical security vulnerabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <NetworkIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Network Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">2021</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-transform duration-500 ease-in-out transform hover:scale-105">
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
                <CardDescription>
                  Developed and implemented an effective incident response plan for a client, enabling them to quickly detect, contain, and mitigate security incidents.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Incident Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">2020</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Skills
          </h2>
          <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Explore my expertise in various cybersecurity domains.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <LaptopIcon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium text-foreground">Ethical Hacking</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Proficient in penetration testing, vulnerability assessment, and exploit development.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <NetworkIcon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium text-foreground">Network Security</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Experienced in firewall configuration, intrusion detection, and secure network design.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <LockIcon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium text-foreground">Cryptography</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Knowledgeable in encryption algorithms, key management, and secure communication protocols.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <ShieldIcon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium text-foreground">Incident Response</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Skilled in incident detection, containment, and remediation strategies.
              </p>
            </div>
          </div>
        </section>
        
        <section id="awards" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Awards
          </h2>
          <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Different Awards of Pratik Shrestha
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <i className="bi bi-award award-size opacity-90"></i>
              <h3 className="mt-2 text-sm font-medium text-foreground">Research Scholarship</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Awarded by University of Ottawa, Ottawa, Canada
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <i className="bi bi-cpu award-size opacity-90"></i>
              <h3 className="mt-2 text-sm font-medium text-foreground">Special Engineering Merit Scholarship</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Awarded by University of Ottawa, Ottawa, Canada
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <i className="bi bi-globe-europe-africa award-size opacity-90"></i>
              <h3 className="mt-2 text-sm font-medium text-foreground">Recepient of Coventry Immersion Program 2022</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Awarded by Coventry University, Coventry, UK and Softwarica College, Kathmandu, Nepal
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-105">
              <i className="bi bi-calendar2-week award-size opacity-90"></i>
              <h3 className="mt-2 text-sm font-medium text-foreground">Project of the Year 2021: NetSec</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Awarded by Softwarica College, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </section>

        <section id="colloboration" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Colloboration
          </h2>
          <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Project Colloborations
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-muted p-4 text-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
                <Link href="https://www.project-owl.com/" passHref>
                  <Image 
                    src="/pshrestha.github.io/image.png" 
                    alt="Logo" 
                    width={110} 
                    height={60} 
                    className="mx-auto opacity-75 cursor-pointer transition-transform duration-300 ease-in-out transform hover:-translate-y-1" 
                  />
                </Link>
                <h3 className="mt-2 text-sm font-medium text-foreground">Project OWL</h3>
                <Link href="https://medium.com/clusterduck-protocol/elevating-disaster-resilience-50ef8eae6aac" passHref>
                  <p className="mt-1 text-xs text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                    Implementation of Mobile Ad-Hoc Network for Emergency Communication, Rescue, and Evacuation in the Events of Environmental Disaster using LoRa (SoftMesh)
                  </p>
                </Link>
                <div className="mt-4">
                  <Image 
                    src="/pshrestha.github.io/softmesh.png" 
                    alt="SoftMesh" 
                    width={110} 
                    height={160} 
                    className="softmesh mx-auto rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105" 
                  />
                </div>
              </div>
            </div>
        </section>

        <section id="contact" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Contact Me
          </h2>
          <p className="mt-4 text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            Get in touch with me for any inquiries or opportunities.
          </p>
          <form className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="FirstName LastName" className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} placeholder="Your message..." className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full transition-transform duration-500 ease-in-out transform hover:scale-105">
                Send Message
              </Button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
              &copy; 2024 Pratik Shrestha. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/pratik-shresth/" className="text-sm font-medium text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
                <i className="bi bi-linkedin custom-icon"></i>
              </Link>
              <Link href="https://scholar.google.com/citations?hl=en&user=nIq0zusAAAAJ" className="text-sm font-medium text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
                <i className="bi bi-mortarboard-fill custom-icon1"></i>
              </Link>
              <Link href="https://orcid.org/0000-0003-0618-9679" className="text-sm font-medium text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-orcid h-5 w-5" viewBox="0 0 512 512">
                  <path d="M294.8 188.2h-45.9V342h47.5c67.6 0 83.1-51.3 83.1-76.9 0-41.6-26.5-76.9-84.7-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.8 360.8h-29.8v-207.5h29.8zm-14.9-231.1a19.6 19.6 0 1 1 19.6-19.6 19.6 19.6 0 0 1 -19.6 19.6zM300 369h-81V161.3h80.6c76.7 0 110.4 54.8 110.4 103.9C410 318.4 368.4 369 300 369z"/>
                </svg>
              </Link>
              <Link href="https://github.com/Pratikshresth" className="text-sm font-medium text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <i className="bi bi-github custom-icon"></i>
              </Link>
              <Link href="https://github.com/Pratikshresth" className="text-sm font-medium text-muted-foreground transition-transform duration-300 ease-in-out transform hover:-translate-y-1" prefetch={false}>
              <i class="bi bi-medium custom-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// SVG Icons
function CalendarDaysIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2H10v9H6v-9H2V8h4a6 6 0 0 1 10 0z" />
      <rect x="2" y="2" width="6" height="6" rx="1" />
    </svg>
  );
}

function GoogleScholarIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 3c1.1 0 2 .9 2 2v14a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4H6v-2h5v-4H6V7h5V3c0-1.1.9-2 2-2h5zm0 4h-3v4h3v-4zm0 6h-3v4h3v-4z" />
    </svg>
  );
}

function award(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
    </svg>
  );
}

function ghub(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  </svg>
  );
}

export default Component;
