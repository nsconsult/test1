/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const formatTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp); // Assurez-vous que `timestamp` est en millisecondes
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      // month: 'numeric',
      // day: 'numeric',
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      ) : (
        ""
      )}
      <footer className="rts__section  footer__home__one">
        <div className="container">
          <div className="row">
            <div className="footer__wrapper d-flex flex-wrap flex-column flex-sm-row gap-4 gap-md-0 gap-sm-3 justify-content-between pt-60 pb-60">
              <div className="rts__footer__widget max-320">
                <a
                  href="index-2.html"
                  className="footer__logo"
                  aria-label="logo"
                >
                  <img
                    src="/assets/img/logo/header__one.png"
                    width={160}
                    height={40}
                    alt="logo"
                  />
                </a>
                <p className="mt-4">
                  Que vous soyez un professionnel expérimenté ou un jeune
                  diplômé désireux de se lancer dans la vie active, nous avons
                  quelque chose à offrir à chacun.
                </p>
              </div>
              {/* footer menu */}
              <div className="rts__footer__widget max-content">
                <div className="font-20 fw-medium mb-3 h6">Liens</div>
                <ul className="list-unstyled">
                  <li>
                    <a href="/jobs" aria-label="footer__menu__link">
                      Parcourir les offres d'emploi
                    </a>
                  </li>
                  {/* <li>
                <a href="candidate-1.html" aria-label="footer__menu__link">
                Parcourir les candidats
                </a>
              </li> */}
                  <li>
                    <a href="/blog" aria-label="footer__menu__link">
                      Blog &amp; Nouveautés
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" aria-label="footer__menu__link">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="footer__menu__link">
                      Alertes emploi{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rts__footer__widget max-content">
                <div className="font-20 fw-medium mb-3 h6 ">Nous contacter</div>
                <ul className="list-unstyled mb-3">
                  <li>
                    <a href="#">
                      <i className="fa-light fa-location-dot" />
                      Lomé Togo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-light fa-phone" />
                      +(228) 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jobpath@gmail.com">
                      <i className="fa-light fa-envelope" /> jobtepe@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="font-20 fw-medium mb-20 text-dark">
                  Liens Réseaux sociaux.{" "}
                </div>
                <div className="rts__social d-flex gap-4">
                  <a
                    target="_blank"
                    href="https://facebook.com/"
                    aria-label="facebook"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a
                    target="_blank"
                    href="https://instagram.com/"
                    aria-label="instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    target="_blank"
                    href="https://linkedin.com/"
                    aria-label="linkedin"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a
                    target="_blank"
                    href="https://pinterest.com/"
                    aria-label="pinterest"
                  >
                    <i className="fa-brands fa-pinterest" />
                  </a>
                  <a
                    target="_blank"
                    href="https://youtube.com/"
                    aria-label="youtube"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
              {/* newsletter form */}
              <div className="rts__footer__widget max-320">
                <div className="font-20 fw-medium mb-3 h6 ">
                  S'abonner à notre Newsletter
                </div>
                <p className="br-sm-none">
                  S'inscrire à notre newsletter <br /> pour être informé de nos
                  nouveaux emplois{" "}
                </p>
                <form
                  action="#"
                  className="d-flex align-items-center justify-content-between mt-4 newsletter"
                >
                  <input
                    type="email"
                    name="semail"
                    id="semail"
                    placeholder="Entrez votre email"
                    required
                  />
                  <button type="submit" className="rts__btn fill__btn">
                    S'abonner
                  </button>
                </form>
              </div>
              {/* newsletter form end */}
            </div>
          </div>
        </div>
        <div className="rts__copyright">
          <div className="container">
            <p className="text-center fw-medium py-4">
              {/* Copyright © 2024 All Rights Reserved by jobpété */}
              Copyright © {formatTimestampToDate(Date.now())} Tous Droits Réservés par Tépé
            </p>
          </div>
        </div>
      </footer>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header p-0 mb-5 mt-4">
          <a
            href="index-2.html"
            className="offcanvas-title"
            id="offcanvasLabel"
          >
            <img src="assets/img/logo/header__one.png" alt="logo" />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="mb-4 d-block d-sm-none">
          <div className="header__right__btn d-flex justify-content-center gap-3">
            <a
              href="#"
              className="small__btn no__fill__btn border-6 font-xs"
              aria-label="Login Button"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              {" "}
              <i className="rt-login"></i>Se connecter
            </a>
            {/* <a
              href="#"
              className="small__btn d-xl-flex fill__btn border-6 font-xs"
              aria-label="Job Posting Button"
            >
              Ajouter un emploi
            </a> */}
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div className="rts__offcanvas__menu overflow-hidden">
            <div className="offcanvas__menu"></div>
          </div>
          <p className="max-auto font-20 fw-medium text-center text-decoration-underline mt-4">
            Nos réseaux sociaux.
          </p>
          <div className="rts__social d-flex justify-content-center gap-3 mt-3">
            <a
              target="_blank"
              href="https://facebook.com/"
              aria-label="facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/"
              aria-label="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/"
              aria-label="linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://pinterest.com/"
              aria-label="pinterest"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a target="_blank" href="https://youtube.com/" aria-label="youtube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <button type="button" className="rts__back__top" id="rts-back-to-top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}
