import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Sd78WebpartsV01.module.scss';
import type { ISd78WebpartsV01Props } from './ISd78WebpartsV01Props';

const menuItems = [
  { 
    title: "Hub", 
    links: [
      { name: "Career Education K-12", url: "/sites/DevTesting/SitePages/Career-Education-K-12.aspx" },
      { name: "What We Offer", url: "/sites/DevTesting/SitePages/What-We-Offer.aspx" },
      { name: "Career Zone Guides", url: "/sites/DevTesting/SitePages/Career-Zone-Guides.aspx" }
    ] 
  },
  { 
    title: "Apply", 
    links: [
      { name: "Apply Now", url: "/sites/DevTesting/SitePages/Apply-Now.aspx" },
      { name: "WEX 12 Forms & Documents", url: "/sites/DevTesting/SitePages/WEX-12-Forms-&-Documents.aspx" },
      { name: "Youth WORK in Trades Forms & Documents", url: "/sites/DevTesting/SitePages/Youth-WORK-in-Trades-Forms-&-Documents.aspx" }
    ] 
  },
  { 
    title: "Programs", 
    links: [
      { name: "Automotive Service Technician Application", url: "/sites/DevTesting/SitePages/page-1(1).aspx" },
      { name: "Architectural Drafting Application", url: "/sites/DevTesting/SitePages/A.aspx" },
      { name: "Carpentry Application", url: "/sites/DevTesting/SitePages/Carpentry-Application.aspx" },
      { name: "Early Childhood Education (ECE) Pathway", url: "/sites/DevTesting/SitePages/Early-Childhood-Education-(ECE)-Pathway.aspx" },
      { name: "Construction Electrical Application", url: "/sites/DevTesting/SitePages/Construction-Electrical-Application.aspx" },
      { name: "Landscape Horticulture Application", url: "/sites/DevTesting/SitePages/Landscape-Horticulture-Application.aspx" },
      { name: "Professional Cook (Level 1 & 2) Application", url: "/sites/DevTesting/SitePages/Professional-Cook-(Level-1-&-2)-Application.aspx" },
      { name: "Welder Application", url: "/sites/DevTesting/SitePages/Welder-Application.aspx" },
      { name: "Plumbing & Piping", url: "/sites/DevTesting/SitePages/Plumbing-&-Piping.aspx" },
      { name: "Electronics Technician Certificate – Common Core", url: "/sites/DevTesting/SitePages/Electronics-Technician-Certificate-–-Common-Core.aspx" }
    ] 
  },
  { 
    title: "Work Placements", 
    links: [
      { name: "Junior Wild Fire Crew", url: "/sites/DevTesting/SitePages/Junior-Wild-Fire-Crew.aspx" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { name: "Contact", url: "/sites/DevTesting/SitePages/Contact.aspx" },
      { name: "FAQ", url: "/sites/DevTesting/SitePages/FAQ(1).aspx" },
      { name: "Scholarships & Awards", url: "/sites/DevTesting/SitePages/Scholarships-&-Awards.aspx" },
      { name: "Important Links", url: "/sites/DevTesting/SitePages/Important-Links.aspx" }
    ] 
  }
];

export default function Sd78WebpartsV01({ hasTeamsContext }: ISd78WebpartsV01Props): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const commentsWrapper = document.getElementById('CommentsWrapper');
    if (commentsWrapper) {
      commentsWrapper.style.display = 'none';
    }

    const divider = document.querySelector('.e_a_f085c694') as HTMLElement;
    if (divider) {
      divider.style.setProperty('color', '#36346b', 'important');
    }
  }, []);

  return (
    <section className={`${styles.sd78WebpartsV01} ${hasTeamsContext ? styles.teams : ''}`}>
      <nav className={styles.navbar}>
        <span className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>☰</span>
        <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          {menuItems.map((menu, index) => (
            <div key={index} className={styles.menuItem}>
              <span className={styles.menuTitle}>{menu.title}</span>
              <div className={styles.dropdown}>
                {menu.links.map((link, i) => (
                  <a key={i} href={link.url} className={styles.dropdownItem}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}
