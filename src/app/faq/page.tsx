/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, {useState} from "react";
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
  {/* faq section */}
  <section className="rts__section section__padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-center wow animated fadeInUp mb-60">
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
                  className="accordion-button p-4 fw-medium border focus-none font-20"
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
                className="accordion-collapse border mt-3 collapse show"
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
                  className="accordion-button p-4 fw-medium border font-20 collapsed"
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
                  className="accordion-button p-4 fw-medium border font-20 collapsed"
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
                  className="accordion-button p-4 fw-medium border font-20 collapsed"
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
                  className="accordion-button p-4 fw-medium border font-20 collapsed"
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
                  className="accordion-button p-4 fw-medium border font-20 collapsed"
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
