/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
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
        <div className="col-lg-12 position-relative d-flex justify-content-center align-items-center">
          <div className="breadcrumb__area max-content  breadcrumb__padding z-2">
            <h1 className="breadcrumb-title h3 mb-3">Termes et Conditions</h1>
            <nav className="mx-auto max-content">
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Accueil</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Termes et Conditions
                </li>
              </ul>
            </nav>
          </div>
          <div className="breadcrumb__area__shape breadcrumb__style__four d-flex gap-4 justify-content-end align-items-center">
            <div className="shape__one common"></div>
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
  {/* tos */}
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="tos__content d-flex gap-30 flex-column">
            <div className="has__item">
              <h6 className="fw-semibold mb-3">1. Termes d'Utilisation</h6>
              <p>
              En accédant à l'application Tépé, vous acceptez de respecter toutes les lois et règlements applicables, ainsi que ces conditions. Vous vous engagez à fournir des informations précises et à ne pas utiliser la plateforme à des fins illégales.
              </p>
            </div>
            <div className="has__item">
              <h6 className="fw-semibold mb-3">2. Avis de non-responsabilité</h6>
              <p>
              Tépé ne garantit pas l'exactitude, la fiabilité ou la disponibilité des offres d'emploi présentées sur la plateforme. Nous ne sommes pas responsables des interactions entre utilisateurs ou des décisions prises sur la base des informations fournies.
              </p>
              <div className="my-3" />
              
              <p />
            </div>
            <div className="has__item">
              <h6 className="fw-semibold mb-3">3. Limitation de responsabilité</h6>
              <p>
              Tépé ne pourra en aucun cas être tenu responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser notre service, y compris, mais sans s'y limiter, les pertes de données ou de bénéfices.
              
              </p>
              <div className="my-3" />
              <p />
            </div>
            <div className="has__item">
              <h6 className="fw-semibold mb-3">4. Politique de droits d'auteur</h6>
              <p>
              Tous les contenus présents sur la plateforme, y compris les textes, graphiques et logos, sont protégés par des droits d'auteur. Toute reproduction, distribution ou modification sans autorisation préalable est strictement interdite.
              </p>
              <div className="my-3" />
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
              velit rerum. */}
              <p />
            </div>
            <div className="has__item">
              <h6 className="fw-semibold mb-3">5. General</h6>
              <p>
              Ces conditions d'utilisation constituent l'intégralité de l'accord entre l'utilisateur et Tépé. Tout litige sera régi par les lois en vigueur dans la juridiction où se situe l'entreprise, et toute modification de ces termes doit être effectuée par écrit et acceptée par les deux parties.
              </p>
              <div className="my-3" />
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero
              velit rerum. */}
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* tos end */}
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
                Download The app Free!
              </h3>
              <p className="wow animated fadeInUp" data-wow-delay=".2s">
                Looking for a new job can be both exciting and daunting.
                Navigating the job market involves exploring various avenues.
              </p>
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
