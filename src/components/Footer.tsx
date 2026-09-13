import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="h-8"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/technologies"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-xs text-slate-400 transition-colors hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="text-xs text-slate-400 transition-colors hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
