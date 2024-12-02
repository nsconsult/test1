/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import Connexion from "@/components/Connexion";
// import Sidebar from "@/components/SidbarEntreprise";
export default function Home() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  return (
    <>
  <Css/>
  <Header setLoginModalOpen={setLoginModalOpen} />
  {/* xxx */}
  <>
  {/* breadcrumb area */}
  <div className="rts__section breadcrumb__background">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
          <div className="breadcrumb__area max-content breadcrumb__padding z-2">
            <h1 className="breadcrumb-title h3 mb-3">Contact</h1>
            <nav>
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ul>
            </nav>
          </div>
          <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
            <div className="shape__one common">
              <img src="assets/img/breadcrumb/shape-1.svg" alt="" />
            </div>
            <div className="shape__two common">
              <img src="assets/img/breadcrumb/shape-2.svg" alt="" />
            </div>
            <div className="shape__three common">
              <img src="assets/img/breadcrumb/shape-3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb area end */}
  {/* contact method */}
  <div className="rts__section pt-120">
    <div className="container">
      <div className="row g-30">
        <div className="col-lg-4 col-md-6">
          <div className="rts__workprocess__box is__contact rounded-3">
            <div className="rts__icon">
              <img src="assets/img/icon/location.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">Localisation ici</span>
            <p className="fw-medium">
              Lomé Togo
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="rts__workprocess__box is__contact rounded-3">
            <div className="rts__icon">
              <img src="assets/img/icon/mail.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">Email ici</span>
            <a className="text-para fw-medium" href="mailto:2R0Z9@example.com">
              jobtepe@gmail.com
            </a>
            
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="rts__workprocess__box is__contact rounded-3">
            <div className="rts__icon">
              <img src="assets/img/icon/phone.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">Appelez ici</span>
            <a className="fw-medium text-para" href="tel:+44-20-7328-4499">
              +228-20-7328-4499
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact method end */}
  {/* contact form */}
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 ">
          <span className="h4 fw-normal">
            <strong className="fw-bold">J'ai hâte de vous lire</strong>
            <br />
            Prenez contact avec nous !
          </span>
          <div className="job__contact is__contact mt-30">
            <form action="#" className="d-flex flex-column gap-4">
              <div className="search__item">
                <label
                  htmlFor="name"
                  className="mb-4 font-20 fw-medium text-dark text-capitalize"
                >
                  Nom
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="votre Nom"
                    required
                  />
                  <i className="fa-light fa-user" />
                </div>
              </div>
              <div className="search__item">
                <label
                  htmlFor="cemail"
                  className="mb-4 font-20 fw-medium text-dark text-capitalize"
                >
                  votre Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    id="cemail"
                    placeholder="Enter votre email"
                    required
                  />
                  <i className="rt-mailbox" />
                </div>
              </div>
              <div className="search__item">
                <label
                  className="mb-4 font-20 fw-medium text-dark text-capitalize"
                  htmlFor="message"
                >
                  votre Commentaire
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  defaultValue={""}
                />
                <i className="fa-thin fa-comment-lines" />
              </div>
              <button
                type="submit"
                className="rts__btn fill__btn be-1 w-100 rounded-1 apply__btn"
              >
                envoyez
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 ps-5">
          <div className="contact__image">
            <figure>
              <img src="assets/img/pages/contact.webp" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact form end */}
  {/* app center */}
  <div className="rts__section pb-120">
    <div className="container">
      <div className="row">
        <div className="rts__appcenter">
          <div className="rts__appcenter__shape">
            <img src="assets/img/home-1/app/shape.png" alt="" />
          </div>
          <div className="rts__appcenter__content d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between justify-content-lg-center">
            <div className="content__left align-items-end d-flex position-relative top-15px">
              <img src="assets/img/home-1/app/app_screen.png" alt="" />
            </div>
            <div className="content__right text-white text-center text-xl-start max-630">
              <h3
                className="l--1 mb-4 text-white wow animated fadeInUp"
                data-wow-delay=".1s "
              >
                    Télécharger  gratuitement!
                    </h3>
              <p className="wow animated fadeInUp" data-wow-delay=".2s">
              La recherche d'un nouvel emploi peut être à la fois passionnante et décourageante. Naviguer sur le marché du travail implique d'explorer différentes pistes. </p>
              
            
              <div
                className="d-flex gap-3 justify-content-center justify-content-xl-start flex-wrap mt-40 wow animated fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="link">
                  <a
                    href="https://appstore.com/"
                    target="_blank"
                    title="app store"
                  >
                    <img src="assets/img/home-1/app/app-store.svg" alt="" />
                  </a>
                </div>
                <div className="link">
                  <a
                    href="https://google.com/"
                    target="_blank"
                    title="play store"
                  >
                    <img src="assets/img/home-1/app/play-store.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* app center end */}
  <Connexion
          isLoginModalOpen={isLoginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          isSignupModalOpen={isSignupModalOpen}
          setSignupModalOpen={setSignupModalOpen}
          isForgotPasswordModalOpen={isForgotPasswordModalOpen}
          setForgotPasswordModalOpen={setForgotPasswordModalOpen}
        />
</>


  {/* xxx */}
  <Footer/>
  <Myscript/>
</>
  );
}
