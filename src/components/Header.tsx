/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import apiService from "@/app/services/apiService";
import { useEffect, useState } from "react";

interface HeaderProps {
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setLoginModalOpen }: HeaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await apiService.getAllResources('users/auth');
        setUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
        });
        // console.log(userData);
      } catch (error) {
        console.error(error);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
      ) : (
        ""
      )}
      <header className="rts__section rts__header absolute__header">
        <div className="container-none">
          <div className="rts__menu__background">
            <div className="row">
              <div className="d-flex align-items-center justify-content-between">
                <div className="rts__logo">
                  <a href="/">
                    <img
                      className="logo__image"
                      src="/assets/img/logo/header__one.png"
                      width={160}
                      height={40}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center">
                  <div className="navigation d-none d-lg-block">
                    <nav className="navigation__menu" id="offcanvas__menu">
                      <ul className="list-unstyled">
                        <li className="navigation__menu--item">
                          <a href="/" className="navigation__menu--item__link">
                            Accueil
                          </a>
                        </li>
                        <li className="navigation__menu--item">
                          <a href="/jobs" className="navigation__menu--item__link">
                            Emplois
                          </a>
                        </li>
                        <li className="navigation__menu--item">
                          <a href="/employers" className="navigation__menu--item__link">
                            Employeurs
                          </a>
                        </li>
                        <li className="navigation__menu--item has-child">
                          <a href="" className="navigation__menu--item__link">
                            Pages
                          </a>
                          <ul className="submenu sub__style" role="menu">
                            <li role="menuitem">
                              <a href="/blog">Blog</a>
                            </li>
                            <li role="menuitem">
                              <a href="/about">About</a>
                            </li>
                            <li role="menuitem">
                              <a href="/faq">Faq</a>
                            </li>
                            <li role="menuitem">
                              <a href="/tos">Terms &amp; Conditions</a>
                            </li>
                            <li role="menuitem">
                              <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li role="menuitem">
                              <a href="/pricing">Pricing</a>
                            </li>
                          </ul>
                        </li>
                        <li className="navigation__menu--item has-child">
                          <a href="/contact" className="navigation__menu--item__link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Bouton Connexion */}
                  {!user.id && (
                    <div className="header__right__btn d-flex gap-3">
                      <a
                        href="#"
                        className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                        aria-label="Login Button"
                        onClick={() => setLoginModalOpen(true)} // Ouverture du modal de connexion
                      >
                        <i className="rt-login" />
                        Connexion
                      </a>
                      <button
                        className="d-md-block d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas"
                        aria-controls="offcanvas"
                      >
                        <i className="fa-sharp fa-regular fa-bars" />
                      </button>
                    </div>
                  )}
                  {/* Rendu du bouton Dashboard en fonction du rôle de l'utilisateur */}
                  {user.role && (
                    <div className="header__right__btn d-flex gap-3">
                      <a
                        href={`/dashboard${user.role === "1" ? "Admin" : user.role === "3" ? "Entreprise" : user.role === "4" ? "Education" : "User"}`}
                        className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                        aria-label="Dashboard Button"
                      >
                        <i className="rt-login" />
                        Dashboard
                      </a>
                      <button
                        className="d-md-block d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas"
                        aria-controls="offcanvas"
                      >
                        <i className="fa-sharp fa-regular fa-bars" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}