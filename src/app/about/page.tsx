/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
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
            <h1 className="breadcrumb-title h3 mb-3">A propos de Nous</h1>
            <nav>
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Accueil</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  A propos de Nous
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
  {/* about image card */}
  <div className="rts__section pt-120">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="rts__content__section">
            <h3 className="fw-bold l--3 mb-4  wow animated fadeInUp">
              1000+ Emplois sur Tépé. Trouve celui Qui Te Convient Le Mieux 
            </h3>
            <p className=" wow animated fadeInUp">
              
Que vous soyez un professionnel expérimenté ou un jeune diplômé
              désireux de plonger dans le marché du travail, nous avons quelque chose pour tout le monde.
              Des experts en technologie aux experts en marketing
            </p>
            <div className="mt-40 rts__listing  wow animated fadeInUp">
              <div className="single__listing d-flex align-items-center gap-4">
                <span className="icon">
                  <i className="fa-regular fa-check" />
                </span>
                <span>Travail de Qualité</span>
              </div>
              <div className="single__listing d-flex align-items-center gap-4">
                <span className="icon">
                  <i className="fa-regular fa-check" />
                </span>
                <span>Atteignez des centaines de contacts</span>
              </div>
              <div className="single__listing d-flex align-items-center gap-4">
                <span className="icon">
                  <i className="fa-regular fa-check" />
                </span>
                <span>Pas de frais supplémentaires</span>
              </div>
              <div className="single__listing d-flex align-items-center gap-4">
                <span className="icon">
                  <i className="fa-regular fa-check" />
                </span>
                <span>Emploi international</span>
              </div>
            </div>
            <a href="#" className="rts__btn common__btn fill__btn mt-50">
              Savoir Plus <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about__image__section position-relative flex-wrap flex-sm-nowrap d-flex justify-content-between gap-5">
            <div className="about__image__one align-self-end">
              <figure>
                <img src="assets/img/home-6/about/1.webp" alt="" />
              </figure>
            </div>
            <div className="about__applicant">
              <div className="rts__applicants">
                <span className="font-20 mb-3 d-block fw-medium">
                  Candidats
                </span>
                <div className="applicant__list wow animated fadeInUp">
                  <div className="single__list">
                    <img src="assets/img/author/1.svg" alt="" />
                  </div>
                  <div className="single__list">
                    <img src="assets/img/author/2.svg" alt="" />
                  </div>
                  <div className="single__list">
                    <img src="assets/img/author/3.svg" alt="" />
                  </div>
                  <div className="single__list">
                    <img src="assets/img/author/4.svg" alt="" />
                    <div className="icon-plus">
                      <i className="fa-sharp fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__image__two align-self-start">
              <figure>
                <img src="assets/img/home-6/about/2.webp" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about image card end */}
  {/* work process area */}
  <section className="rts__section section__padding">
    <div className="container">
      <div className="row justify-content-center mb-60">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-center wow animated fadeInUp">
            <h3 className="rts__section__title section__mb">
              Comment Tépé fonctionne
            </h3>
            <p className="rts__section__desc">
            Notre site d'emploi propose une large gamme
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center g-30">
        <div className="col-lg-4 col-md-10">
          <div className="rts__workprocess__box">
            <div className="rts__icon">
              <img src="assets/img/home-1/process/icon-1.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">
              Créez un compte gratuit
            </span>
            <p>
            Inscrivez-vous en quelques clics pour accéder à une plateforme dédiée à votre réussite professionnelle. Remplissez vos informations de base et commencez à bénéficier d'outils et de ressources adaptés à votre recherche d'emploi.
            </p>
            <div className="work__readmore mt-3">
              <a href="#">
                En Savoir Plus <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-10">
          <div className="rts__workprocess__box">
            <div className="rts__icon">
              <img src="assets/img/home-1/process/icon-2.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">
              Rendez votre CV incroyable
            </span>
            <p>
            Transformez votre CV avec des modèles professionnels et des conseils personnalisés. Mettez en avant vos compétences et expériences de manière attrayante et percutante pour attirer l'attention des recruteurs.
            </p>
            <div className="work__readmore mt-3">
              <a href="#">
                En Savoir Plus <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-10">
          <div className="rts__workprocess__box">
            <div className="rts__icon">
              <img src="assets/img/home-1/process/icon-3.svg" alt="" />
            </div>
            <span className="process__title h6 d-block">Postulez à un emploi</span>
            <p>
            Explorez un large éventail d'offres d'emploi et postulez rapidement avec votre CV optimisé. Suivez vos candidatures et préparez-vous à décrocher l'entretien de vos rêves grâce à des ressources supplémentaires et des conseils pratiques.
            </p>
            <div className="work__readmore mt-3">
              <a href="#">
                En Savoir Plus <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* work process area end */}
  {/* funfact section */}
  <div className="rts__section">
    <div className="container">
      <div className="row g-30 justify-content-center  wow animated fadeInUp">
        <div className="col-lg-3 col-md-6">
          <div className="rts__single__counter">
            <h2 className="fw-bold ms-lg-3 mx-auto heading__color">
              <span className="counter">20</span>K
            </h2>
            <p className="h6 mb-0 fw-semibold">Employeur heureux</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="rts__single__counter">
            <h2 className="fw-bold ms-lg-3 mx-auto heading__color">
              <span className="counter">11</span>K
            </h2>
            <p className="h6 mb-0 fw-semibold">Position d'ouverture</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="rts__single__counter">
            <h2 className="fw-bold ms-lg-3 mx-auto heading__color">
              <span className="counter">1</span>M
            </h2>
            <p className="h6 mb-0 fw-semibold">Utilisateurs actifs quotidiens</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="rts__single__counter">
            <h2 className="fw-bold ms-lg-3 mx-auto heading__color">
              <span className="counter">100</span>+
            </h2>
            <p className="h6 mb-0 fw-semibold">Catégories d'emploi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* funfact section end */}
  {/* top employer */}
  <div className="rts__section overflow-hidden pt-100 pb-100">
    <div className="container">
      <div className="row justify-content-between gap-4 mb-50 position-relative mtn-1">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-start  wow animated fadeInUp">
            <h3 className="rts__section__title section__mb">
              Let’s Meet Our Team
            </h3>
            <p className="rts__section__desc">
              Our job board offers a wide range
            </p>
          </div>
        </div>
        <div className="rts__slider__control style-gray align-items-end position-relative z-3 d-none d-md-flex gap-2 max-contnet">
          <div className="rts__slide__next rounded-2 slider__btn">
            <i className="fa-sharp fa-solid fa-chevron-left" />
          </div>
          <div className="rts__slide__prev rounded-2 slider__btn">
            <i className="fa-sharp fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
      <div
        className="row swiper-data overflow-hidden"
        data-swiper='{
              "slidesPerView": 4,
              "autoplay": true,
              "loop": true,
              "navigation": {
                  "nextEl": ".rts__slide__next",
                  "prevEl": ".rts__slide__prev"
              },
              "breakpoints": {
                  "0": {
                      "slidesPerView": 1.05
                  },
                  "490": {
                      "slidesPerView": 1.05
                  },
                  "768": {
                      "slidesPerView": 2
                  },
                  "1024": {
                      "slidesPerView": 3
                  },
                  "1200": {
                      "slidesPerView": 4
                  }
              }
              }'
      >
        {/* single company info */}
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="team__member text-center">
              <a href="#">
                <img
                  className="rounded-3"
                  src="assets/img/team/1.webp"
                  alt=""
                />
              </a>
              <div className="team__member__meta mt-3">
                <a href="#" className="h6 fw-semibold text-dark mb-0 d-block">
                  Al Amin Bali
                </a>
                <span className="font-sm fw-medium">UX Designer</span>
                <div className="social__link d-flex gap-2 justify-content-center align-items-center">
                  <a className="text-body" href="#">
                    <i className="rt-facebook" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-skype" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="team__member text-center">
              <a href="#">
                <img
                  className="rounded-3"
                  src="assets/img/team/2.webp"
                  alt=""
                />
              </a>
              <div className="team__member__meta mt-3">
                <a href="#" className="h6 fw-semibold text-dark mb-0 d-block">
                  Jonathon Doe
                </a>
                <span className="font-sm fw-medium">UI/UX Designer</span>
                <div className="social__link d-flex gap-2 justify-content-center align-items-center">
                  <a className="text-body" href="#">
                    <i className="rt-facebook" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-skype" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="team__member text-center">
              <a href="#">
                <img
                  className="rounded-3"
                  src="assets/img/team/3.webp"
                  alt=""
                />
              </a>
              <div className="team__member__meta mt-3">
                <a href="#" className="h6 fw-semibold text-dark mb-0 d-block">
                  Emma Elizabeth
                </a>
                <span className="font-sm fw-medium">Software Engineer</span>
                <div className="social__link d-flex gap-2 justify-content-center align-items-center">
                  <a className="text-body" href="#">
                    <i className="rt-facebook" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a className="text-body" href="#">
                    <i className="fa-brands fa-skype" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single company info end */}
      </div>
    </div>
  </div>
  {/* top employer end */}
  {/* testimonial section */}
  <div className="rts__section section__padding rts__testimonial__background">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-center mb-60  wow animated fadeInUp">
            <h3 className="rts__section__title section__mb">
              What Our Customer Saying
            </h3>
            <p className="rts__section__desc">
              Looking for your next career opportunity. Look no further
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div
            className="rts__testimonial__active overflow-hidden swiper-data"
            data-swiper='{
                      "slidesPerView": 1,
                      "autoplay": true,
                      "loop": true,
                      "navigation": {
                          "nextEl": ".rts__slide__next",
                          "prevEl": ".rts__slide__prev"
                      }
                  }'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="rts__single__testimonial text-center">
                  <div className="rts__quote mb-40">
                    <img
                      className="opacity-50"
                      src="assets/img/icon/quote.svg"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__text h6    ">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia
                  </div>
                  <div className="d-flex align-items-center justify-content-center mx-auto gap-3 pt-40 max-content">
                    <div className="author__content text-center">
                      <span className="h6">Alexander Joy</span>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="rts__single__testimonial text-center">
                  <div className="rts__quote mb-40">
                    <img
                      className="opacity-50"
                      src="assets/img/icon/quote.svg"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__text h6    ">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia
                  </div>
                  <div className="d-flex align-items-center justify-content-center mx-auto gap-3 pt-40 max-content">
                    <div className="author__content text-center">
                      <span className="h6">Alexander Joy</span>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rts__slider__control d-none d-lg-flex justify-content-between g-0 position-absolute top-50  translate-middle-y">
          <div className="rts__slide__next slider__btn">
            <i className="fa-sharp fa-solid fa-chevron-left" />
          </div>
          <div className="rts__slide__prev slider__btn">
            <i className="fa-sharp fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* testimonial section end */}
  {/* brand area */}
  <div className="rts__section rts__brand section__padding no-bb text-center">
    <div className="container">
      <div className="row">
        <div className="section__title mb-40">
          <span className="h6 d-block fw-semibold">
            Trusted by 300+ leading companies
          </span>
        </div>
      </div>
      <div className="row align-items-center">
        <div
          className="rts__brand__slider overflow-hidden swiper-data"
          data-swiper='{
          "slidesPerView":7,
          "loop": true,
          "speed": 1000,
          "autoplay":{
              "delay":"7000"
          },

          "breakpoints": {
              "0": {
                  "slidesPerView": 2
              },
              "480": {
                  "slidesPerView": 3
              },
              "768": {
                  "slidesPerView": 4
              },
              "1024": {
                  "slidesPerView": 4
              },
              "1200": {
                  "slidesPerView": 6
              },
              "1400": {
                  "slidesPerView": 7
              }
          }

      }'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/b51.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image1.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image2.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image3.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image4.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image5.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img src="assets/img/home-1/brand/image1.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand__item">
                <a href="#" className="brand__item__link" aria-label="brand">
                  <img
                    src="assets/img/home-1/brand/linkedin-logo-png-20321.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* brand area end */}
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
