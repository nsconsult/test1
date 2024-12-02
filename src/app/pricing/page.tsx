/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from "react";
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import Connexion from "@/components/Connexion";

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
            <h1 className="breadcrumb-title h3 mb-3">Pricing</h1>
            <nav>
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pricing
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
  {/* pricing section */}
  <div className="rts__section pt-110">
    <div className="container">
      <div className="row justify-content-center mb-60">
        <div className="col-lg-7">
          <div className="rts__section__content mb-30 text-center  wow animated fadeInUp">
            <h3 className="rts__section__title mb-3">
              Choose the Perfect Plan For You
            </h3>
            <p className="rts__section__desc">
              Looking for your next career opportunity.
            </p>
          </div>
          <div className="d-flex mx-auto align-items-center max-content gap-2">
            <p className="mb-0">Monthly</p>
            <label htmlFor="pricing__toogle" className="switch">
              <input
                type="checkbox"
                name="pricing__toogle"
                className="pricing__toogle"
                id="pricing__toogle"
              />
              <span className="slider round" />
            </label>
            <p className="mb-0">Yearly</p>
          </div>
        </div>
      </div>
      <div className="monthly__pricing active">
        <div className="row g-30">
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">Free</div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">Free/</span>Month
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">Basic</div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">99$</span>Month
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">
                Standard
              </div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">199$</span>Month
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="yearly__pricing">
        <div className="row g-30">
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">Free</div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">Free/</span>Yearly
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">Basic</div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">399$</span>Yearly
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-12">
            <div className="rts__pricing__box">
              <div className="h6 fw-medium lh-1 mb-2 text-primary">
                Standard
              </div>
              <div className="plan__price lh-1 mb-40">
                <span className="h2 mb-0 me-1">599$</span>Yearly
              </div>
              <ul className="plan__feature">
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Unlimited access
                  to 100+ Job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> 10+ Featured job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Job duration for
                  30 days
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Get 10+ job
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Try for free,
                  forever!
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-check" /> Individual Job
                </li>
              </ul>
              <a
                href="#"
                className="rts__btn pricing__btn  no__fill__btn mt-40"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* pricing section end */}
  {/* faq section */}
  <section className="rts__section section__padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-start mb-60  wow animated fadeInUp">
            <h3 className="rts__section__title section__mb">
              Frequently Asked Questions
            </h3>
            <p className="rts__section__desc">
              Looking for your next career opportunity. Look no further
            </p>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <div
            className="accordion accordion-flush d-flex flex-column gap-4 style__one"
            id="rts__accordion"
          >
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_one"
                  aria-expanded="true"
                  aria-controls="item_one"
                >
                  Why should I subscribe to Jobpath Pro?
                </button>
              </h2>
              <div
                id="item_one"
                className="accordion-collapse border mt-3 collapse show "
                data-bs-parent="#rts__accordion"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_two"
                  aria-expanded="false"
                  aria-controls="item_two"
                >
                  What payment methods do you accept?
                </button>
              </h2>
              <div
                id="item_two"
                className="accordion-collapse border mt-3 collapse"
                data-bs-parent="#rts__accordion"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_three"
                  aria-expanded="false"
                  aria-controls="item_three"
                >
                  Why should I subscribe to Jobpath Pro?
                </button>
              </h2>
              <div
                id="item_three"
                className="accordion-collapse border mt-3 collapse"
                data-bs-parent="#rts__accordion"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="accordion accordion-flush d-flex flex-column gap-4 style__one"
            id="rts__accordion2"
          >
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_four"
                  aria-expanded="false"
                  aria-controls="item_four"
                >
                  Why should I subscribe to Jobpath Pro?
                </button>
              </h2>
              <div
                id="item_four"
                className="accordion-collapse border mt-3 collapse"
                data-bs-parent="#rts__accordion2"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_five"
                  aria-expanded="false"
                  aria-controls="item_five"
                >
                  What payment methods do you accept?
                </button>
              </h2>
              <div
                id="item_five"
                className="accordion-collapse border mt-3 collapse"
                data-bs-parent="#rts__accordion2"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button p-4 fw-medium border font-20 focus-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item_six"
                  aria-expanded="false"
                  aria-controls="item_six"
                >
                  Why should I subscribe to Jobpath Pro?
                </button>
              </h2>
              <div
                id="item_six"
                className="accordion-collapse border mt-3 collapse"
                data-bs-parent="#rts__accordion2"
              >
                <div className="accordion-body">
                  Nullam varius luctus pharetra ultrices volpat facilisis donec
                  tortor, nibhkisys abitant curabitur at nunc nisl magna ac
                  rhoncus vehicula sociis tortor nist hendrerit molestie
                  integer.Nullam varius luctus pharetra ultrices volpat
                  facilisis donec tortor, nibhkisys abitant curabitur at nunc
                  nisl magna ac rhoncus sociis tortor nist hendrerit molestie
                  integer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* faq section end */}
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
