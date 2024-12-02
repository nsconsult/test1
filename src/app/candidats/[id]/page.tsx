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
          <div className="breadcrumb__area max-content breadcrumb__padding">
            <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center">
              <div className="d-flex gap-4 gap-md-5 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                <div className="author__icon rounded-2">
                  <img className="" src="assets/img/author/1.svg" alt="" />
                </div>
                <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2">
                  <div className="">
                    <h3 className="job__title h3 mb-0">Michael Roy </h3>
                  </div>
                  <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2">
                    <div className="d-flex gap-2 align-items-center">
                      Software Engineer
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light fa-location-dot" /> Newyork, USA
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light rt-briefcase" /> Full Time
                    </div>
                  </div>
                  <div className="job__tags d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
                    <a href="#">React</a>
                    <a href="#">Nest Js</a>
                    <a href="#">C++</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="breadcrumb__apply d-flex gap-3 max-content">
              <a href="#" className="rts__btn apply__btn no__fill__btn">
                Shortlist
              </a>
              <a href="#" className="rts__btn be-1 apply__btn fill__btn">
                Cv Download
              </a>
            </div>
          </div>
          <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
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
  {/* job list one */}
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row g-30">
        <div className="col-lg-7 col-xl-8">
          <div className="rts__job__details">
            <div id="description" className="mb-30">
              <h6 className="fw-semibold mb-20">About Candidate</h6>
              <p>
                We are seeking a skilled Part-Time Software Engineer to join our
                team, specializing in social media content creation for lead
                generation purposes. The ideal candidate will have a creative
                flair, technical proficiency, and a strong understanding of
                social media trends and algorithms. Must be able to work
                Monday-Friday during EST business hours. This role will be under
                the ScaledOn brand, but will be working directly with one of our
                partners as their dedicated Software Engineer.
              </p>
            </div>
            <div id="responsibility" className="mb-30">
              <h6 className="fw-semibold mb-20">Education</h6>
              <ul className="timeline">
                <li>
                  <span className="timeline__title d-block">
                    California Institute of Technology
                  </span>
                  <span className="timeline__subtitle d-block">
                    Master of Science in Computer Science (2014- 2015)
                  </span>
                  <p className="mt-2 fw-medium">
                    CareerBuilder offers a complete career portal, helping job
                    seekers find better career opportunities and bridge skill
                    gaps through a partnership with Capella Learning Solutions.
                  </p>
                </li>
                <li>
                  <span className="timeline__title d-block">
                    University of California, Berkeley
                  </span>
                  <span className="timeline__subtitle d-block">
                    B. Sc. in Computer Science and Engineering (2010- 2014)
                  </span>
                  <p className="mt-2 fw-medium">
                    CareerBuilder offers a complete career portal, helping job
                    seekers find better career opportunities and bridge skill
                    gaps through a partnership with Capella Learning Solutions.
                  </p>
                </li>
                <li>
                  <span className="timeline__title d-block">
                    University of California, Berkeley
                  </span>
                  <span className="timeline__subtitle d-block">
                    B. Sc. in Computer Science and Engineering (2010- 2014)
                  </span>
                  <p className="mt-2 fw-medium">
                    CareerBuilder offers a complete career portal, helping job
                    seekers find better career opportunities and bridge skill
                    gaps through a partnership with Capella Learning Solutions.
                  </p>
                </li>
              </ul>
            </div>
            <div id="experience" className="mb-30">
              <h6 className="fw-semibold mb-20 text-capitalize">experience</h6>
              <ul className="timeline">
                <li>
                  <span className="timeline__title d-block">
                    Software Engineer
                  </span>
                  <span className="timeline__subtitle d-block">
                    Reactheme (2016- Present)
                  </span>
                  <p className="mt-2 fw-medium">
                    Software engineers&nbsp;apply engineering principles and
                    knowledge of programming languages to build software
                    solutions for end users.
                  </p>
                </li>
              </ul>
            </div>
            <div id="skill" className="mb-30">
              <h6 className="fw-semibold mb-20">Skills and Experience</h6>
              <div className="job__tags job__details__tags">
                <a href="#" className="job__tag">
                  Javascript
                </a>
                <a href="#" className="job__tag">
                  user interface
                </a>
                <a href="#" className="job__tag">
                  Problem Solving
                </a>
              </div>
            </div>
            <h6 className="fw-semibold text-capitalize mb-30 mt-30">
              See My Latest Project
            </h6>
            <div className="row g-30 row-cols-lg-3 row-cols-sm-2 row-cols-1">
              <div className="col">
                <img
                  className="rounded-2 d-shadow"
                  src="assets/img/pages/p-1.webp"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="rounded-2 d-shadow"
                  src="assets/img/pages/p-2.webp"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="rounded-2 d-shadow"
                  src="assets/img/pages/p-3.webp"
                  alt=""
                />
              </div>
            </div>
            <h6 className="fw-semibold text-capitalize mb-30 mt-30">Awward</h6>
            <ul className="timeline">
              <li>
                <span className="timeline__title d-block">
                  2015 IEEE CS TCSE&nbsp;Distinguished Education Award
                </span>
                <span className="timeline__subtitle d-block">2015</span>
                <p className="mt-2 fw-medium">
                  In a world adorned with stars, where excellence glimmers like
                  distant constellations, there exists a singular moment that
                  transcends the ordinary, capturing the essence of brilliance
                  in its purest form.
                </p>
              </li>
              <li>
                <span className="timeline__title d-block">
                  2024 IEEE CS TCSE Rising Star Award
                </span>
                <span className="timeline__subtitle d-block">2014</span>
                <p className="mt-2 fw-medium">
                  In a world adorned with stars, where excellence glimmers like
                  distant constellations, there exists a singular moment that
                  transcends the ordinary, capturing the essence of brilliance
                  in its purest form.
                </p>
              </li>
            </ul>
          </div>
          <div className="review__form job__contact mt-40">
            <h6 className="fw-semibold mb-30">Add a review</h6>
            <form action="#" className="d-flex flex-column gap-4">
              <div className="row row-cols-lg-2 row-cols-1">
                <div className="search__item">
                  <label
                    htmlFor="cemail"
                    className="mb-3 font-20 fw-medium text-dark text-capitalize"
                  >
                    Your Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      id="cemail"
                      placeholder="Enter your email"
                    />
                    <i className="rt-mailbox" />
                  </div>
                </div>
                <div className="search__item">
                  <label
                    htmlFor="phone"
                    className="mb-3 font-20 fw-medium text-dark text-capitalize"
                  >
                    Phone
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      id="phone"
                      placeholder="(+88)154-678789"
                    />
                    <i className="rt-phone" />
                  </div>
                </div>
              </div>
              <div className="search__item">
                <label
                  className="mb-3 font-20 fw-medium text-dark text-capitalize"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  defaultValue={""}
                />
                <i className="fa-thin fa-comment-lines" />
              </div>
              <div className="d-flex align-items-center gap-3 mt-2 mb-3">
                <span className="fw-medium text-dark">Your Rating </span>
                <div className="rating">
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-solid fa-star-sharp-half-stroke" />
                </div>
              </div>
              <button
                type="submit"
                className="rts__btn fill__btn be-1 apply__btn w-100"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4 d-flex flex-column gap-40">
          <div className="job__overview">
            <h6 className="fw-semibold mb-20">Job Overview</h6>
            <div className="job__overview__content">
              <ul>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-qualification" /> Qualification
                  </span>
                  <span className="text">: Bachelor Degree</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-experience" /> Experience
                  </span>
                  <span className="text">: 2 Year</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-price-tag" /> Offered Salary
                  </span>
                  <span className="text">: $2000-$3000</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-loading" /> Job Deadline
                  </span>
                  <span className="text">: 01 July 2024</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="fa-sharp fa-thin fa-location-dot" /> Location
                  </span>
                  <span className="text">: New York, USA</span>
                </li>
              </ul>
            </div>
          </div>
          {/* share  */}
          <div className="job__contact d-flex align-items-center gap-3">
            <h6 className="fw-semibold mb-0">Share</h6>
            <div className="rts__social sidebar d-flex gap-3">
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
          {/* share end */}
          <div className="job__contact">
            <h6 className="fw-semibold mb-20">Contact Google.com</h6>
            <form action="#" className="d-flex flex-column gap-4">
              <div className="search__item">
                <label
                  htmlFor="gemail"
                  className="mb-3 font-20 fw-medium text-dark text-capitalize"
                >
                  Your Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    id="gemail"
                    placeholder="Enter your email"
                  />
                  <i className="rt-mailbox" />
                </div>
              </div>
              <div className="search__item">
                <label
                  htmlFor="gphone"
                  className="mb-3 font-20 fw-medium text-dark text-capitalize"
                >
                  Phone
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    id="gphone"
                    placeholder="(+88)154-678789"
                  />
                  <i className="rt-phone" />
                </div>
              </div>
              <div className="search__item">
                <label
                  className="mb-3 font-20 fw-medium text-dark text-capitalize"
                  htmlFor="gmessage"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="gmessage"
                  placeholder="Message"
                  defaultValue={""}
                />
                <i className="fa-thin fa-comment-lines" />
              </div>
              <button
                type="submit"
                className="rts__btn fill__btn be-1 apply__btn w-100"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* job list one end */}
  {/* top employer */}
  <div className="rts__section pb-120 overflow-hidden">
    <div className="container">
      <div className="row justify-content-center position-relative">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-center mb-60">
            <h3 className="rts__section__title section__mb">
              Related Candidates
            </h3>
            <p className="rts__section__desc">
              From entry-level positions to executive roles browse through.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-30">
        {/* single employer */}
        <div className="col-lg-12">
          <div className="rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3">
            <div
              className="d-flex gap-4 flex-column flex-md-row 
                  justify-content-start align-items-md-center align-items-start"
            >
              <div className="author__icon small__thumb">
                <img src="assets/img/author/6.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5">
                  <div>
                    <a href="#" className="job__title mb-0 h6 fw-semibold">
                      Elizabeth
                    </a>
                    <span className="d-block fw-medium">UI Designer</span>
                  </div>
                  <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light fa-location-dot" /> Newyork, USA
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light rt-briefcase" /> Full Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags style__default d-flex flex-wrap gap-3">
                <a href="#">Creative</a>
                <a href="#">User Interface</a>
              </div>
              <button className="apply__btn" aria-label="View Profile">
                View Profile
              </button>
            </div>
          </div>
        </div>
        {/* single employer end */}
        {/* single employer */}
        <div className="col-lg-12">
          <div className="rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3">
            <div
              className="d-flex gap-4 flex-column flex-md-row 
                  justify-content-start align-items-md-center align-items-start"
            >
              <div className="author__icon small__thumb">
                <img src="assets/img/author/7.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5">
                  <div>
                    <a href="#" className="job__title mb-0 h6 fw-semibold">
                      Addison Bekar
                    </a>
                    <span className="d-block fw-medium">Produc t Manager</span>
                  </div>
                  <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light fa-location-dot" /> Newyork, USA
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light rt-briefcase" /> Full Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags style__default d-flex flex-wrap gap-3">
                <a href="#">Creative</a>
                <a href="#">User Interface</a>
              </div>
              <button className="apply__btn" aria-label="View Profile">
                View Profile
              </button>
            </div>
          </div>
        </div>
        {/* single employer end */}
        {/* single employer */}
        <div className="col-lg-12">
          <div className="rts__author__card__big py-3 flex-wrap flex-xl-nowrap style__gradient__two d-flex justify-content-between align-items-center gap-3">
            <div
              className="d-flex gap-4 flex-column flex-md-row 
                  justify-content-start align-items-md-center align-items-start"
            >
              <div className="author__icon small__thumb">
                <img src="assets/img/author/8.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex flex-wrap flex-column flex-md-row gap-2 gap-lg-3 gap-xxl-5">
                  <div>
                    <a href="#" className="job__title mb-0 h6 fw-semibold">
                      Anastacia Alice
                    </a>
                    <span className="d-block fw-medium">Digital Marketer</span>
                  </div>
                  <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light fa-location-dot" /> Newyork, USA
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light rt-briefcase" /> Full Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags style__default d-flex flex-wrap gap-3">
                <a href="#">Blog Post</a>
                <a href="#">E-books</a>
              </div>
              <button className="apply__btn" aria-label="View Profile">
                View Profile
              </button>
            </div>
          </div>
        </div>
        {/* single employer end */}
      </div>
    </div>
  </div>
  {/* top employer end */}
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
