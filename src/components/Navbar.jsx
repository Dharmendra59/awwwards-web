import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {

      const navContainerRef = useRef(null);
      const audioElementRef = useRef(null);

      const toggleAudioIndicator = () => {
            
      }
  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
      <nav className="flex size-full items-center justify-between p-4">

            <div className="flex items-center gap-7">
                  <img src="/img/logo.png" alt="logo" className="w-12" />

                  <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"/>

            </div>
            <dir className="flex h-full items-center">
                  <div className="hidden md:block">
                        {navItems.map((item, index) => (
                        <a
                              key={index}
                              href={`#${item.toLowerCase()}`}
                              className="nav-hover-btn"
                        >
                              {item}
                        </a>
                        ))}
                  </div>

                  <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                        <audio ref={audioElementRef} className="" src="/audio/loop.mp3" loop />


                  </button>
            </dir>
      </nav>
      </header>
      
      
    </div>
  )
}

export default Navbar
