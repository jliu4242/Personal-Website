import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-element').forEach(el => {
      observer.observe(el);
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const highlightNav = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-primary');
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    return () => {
      window.removeEventListener('scroll', highlightNav);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
