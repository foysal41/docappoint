"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import userImage from "@/assets/user.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = false;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="w-full  top-0 z-50 sticky transition-all duration-300 mb-[-100]">
        <div
          className={`transition-all duration-300   bg-white shadow-md rounded-none`}
        >
          <div className="navbar container mx-auto px-5 md:px-8">
            <div className="navbar-start">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={80}
                  loading="eager"
                  className="h-auto w-auto object-contain"
                />
              </Link>
            </div>

            <div className="hidden navbar-center  lg:flex">
              <ul className="menu menu-horizontal gap-2 px-1">
                <li>
                  <Link href="/" className="font-semibold">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/all-appointment" className="font-semibold">
                    All Appointment
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard" className="font-semibold">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-end gap-3">
              {!user && (
                <div className="hidden lg:flex items-center gap-3">
                  <Link href="/login" className="btn btn-ghost rounded-full">
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className=" bg-blue-600 text-white btn  hover:bg-blue-700 rounded-full border-none"
                  >
                    Register
                  </Link>
                </div>
              )}

              {user && (
                <div className="hidden lg:flex items-center gap-3">
                  <Image
                    src={userImage}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />

                  <button className="btn bg-red-500 text-white hover:bg-red-600 rounded-full border-none">
                    Logout
                  </button>
                </div>
              )}

              <button
                onClick={() => setIsMenuOpen(true)}
                className="btn btn-ghost text-2xl lg:hidden"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-ghost text-2xl"
          >
            <FiX />
          </button>
        </div>

        <ul className="menu p-5 text-base">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/all-appointment" onClick={() => setIsMenuOpen(false)}>
              All Appointment
            </Link>
          </li>

          <li>
            <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-6 left-0 w-full px-5">
          {!user ? (
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-outline rounded-full"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="btn bg-blue-600 text-white hover:bg-blue-700 rounded-full border-none"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <Image
                src={userImage}
                alt="user"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />

              <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 border-none rounded-full">
                Logout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
