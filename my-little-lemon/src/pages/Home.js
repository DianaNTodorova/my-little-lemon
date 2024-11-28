import Navbar from './Navbar';
import Section from './Section';
import SectionTwo from './SectionTwo';
import { useRef } from 'react';
import Footer from './Footer';

export default function Home() {
  const sectionTwoRef = useRef(null);

  const scrollToSectionTwo = () => {
    sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <header>
        <Navbar onMenuClick={scrollToSectionTwo} />
      </header>
      <main>
        <Section />
        <SectionTwo ref={sectionTwoRef} id="sectiontwo" />
      </main>
      <Footer />
    </>
  );
}
