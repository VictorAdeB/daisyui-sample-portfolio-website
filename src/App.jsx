import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

import NetlifyForm from './form.jsx';

import avatarPic from './assets/pic.jpg'
import claculatorPic from './assets/calculator.webp'
import portfolioPic from './assets/picport.png'
import './App.css'


function App() {

  return (
    <>
      <body data-theme="business">
        <nav className="static z-10">
          <div className="flex gap-4">
            <a
              href="gmail.com"
            >
            <SiGmail className="fill-slate-100 hover:fill-slate-300  transition ease-in-out duration-[200ms]" />
            </a>

            <a
              href="linkedin.com"
            >
              <SlSocialLinkedin className="fill-slate-100 hover:fill-slate-300  transition ease-in-out duration-[200ms]" />
            </a>

            <a
              href="twitter.com" 
            >
              <FaXTwitter  className="fill-slate-100 hover:fill-slate-300  transition ease-in-out duration-[200ms]" />
            </a>

            <a
              href="github.com"
            >
              <SlSocialGithub className="fill-slate-100 hover:fill-slate-300  transition ease-in-out duration-[200ms]" />
            </a>

            <ul className="static flex justify-end grow gap-4">
              <li className="">
                <a
                  href="#projects"
                  className="text-slate-100 active:text-slate-400 hover:text-slate-300 visited:text-slate-100 pl-20"
                >
                  Projects
                </a>
              </li>

              <li className="">
                <a
                  href="#contact"
                  className="text-slate-100 active:text-slate-400 hover:text-slate-300 visited:text-slate-100"
                >
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="py-30">
          <div className="py-20">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img src={avatarPic} />
              </div>
            </div>
            <p className="text-slate-50 pt-8 pb-4"> Hello I'm John</p>
            <div className="hero-text">
              <p className="text-slate-50 text-2xl font-bold">
                I'm a frontend developer specialized in react
              </p>
            </div>
          </div>

          <article id="projects" className="pb-20">
            <h2 className="text-slate-50 text-left ml-4 mb-4">
              Featured Projects
            </h2>
            <div className="flex gap-12 flex-col lg:flex-row justify-evenly">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={claculatorPic} alt="Basic Calculator" />
                </figure>
                <div className="card-body">
                  <h2 className="text-slate-100 card-title">Calculator</h2>
                  <p className="text-slate-100">
                    Basic Claculator built using plain React{" "}
                  </p>
                  <div className="card-actions justify-end">
                    <a href="">
                      <button className="text-slate-100 btn btn-primary">
                        Code
                      </button>
                    </a>
                    <a href="">
                      <button className="text-slate-100 btn btn-primary">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={portfolioPic} alt="Portfolio Picture" />
                </figure>
                <div className="card-body">
                  <h2 className="text-slate-100 card-title">Portfolio</h2>
                  <p className="text-slate-100">Want to view my Projects</p>
                  <div className="card-actions justify-end">
                    <a href="">
                      <button className="text-slate-100 btn btn-primary">
                        Code
                      </button>
                    </a>
                    <a href="">
                      <button className="text-slate-100 btn btn-primary">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

           <article id="contact">
           <NetlifyForm />
            </article>
        </section>

        <footer className="inline-block mt-10">
          <aside className="items-center grid-flow-col">
            <p className="text-slate-100">Victor © 2024</p>
          </aside>
        </footer>
      </body>
    </>
  );
}

export default App
