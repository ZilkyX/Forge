import { Show, SignUpButton } from "@clerk/react";
import { Dumbbell } from "lucide-react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Dumbbell size={22} />
              </div>

              <span className="text-2xl font-bold text-white">Forge</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Train smarter with guided workouts, a library of 1,300+ exercises,
              and progress tracking designed to help you stay consistent.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-accent hover:text-primary"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-accent hover:text-primary"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-accent hover:text-primary"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link to="/exercises" className="hover:text-white">
                  Exercise Library
                </Link>
              </li>

              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold text-white">Get Started</h3>

            <p className="mt-4 text-sm text-zinc-400">
              Create your free account and start tracking every rep.
            </p>

            <Show when={"signed-in"}>
              <Link
                to="/app"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
              >
                Continue Your Journey
              </Link>
            </Show>

            <Show when={"signed-out"}>
              <SignUpButton mode="modal">
                <button className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent">
                  Get Started
                </button>
              </SignUpButton>
            </Show>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
