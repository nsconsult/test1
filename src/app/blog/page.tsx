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
            <h1 className="breadcrumb-title h3 mb-3">Blog</h1>
            <nav>
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
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
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row g-30">
        <div className="col-lg-7 col-xl-8">
          <div className="row g-30">
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/1.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    Start an online Job and work from home
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/2.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    7 Ways Job Post Has Improved Business Today
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/3.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    Insider Strategies for Success on Job Websites
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/4.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    Expert Tips for Mastering Job Websites Dream Job
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/5.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    How to Negotiate Salary with Your Employer
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
            {/* single blog */}
            <div className="col-lg-12 col-xl-6">
              <div className="rts__single__blog blog__style__four rounded-0">
                <a href="blog-details.html" className="blog__img">
                  <img
                    src="assets/img/pages/blog-1/6.webp"
                    className="mb-2 rounded-0"
                    alt="blog"
                  />
                </a>
                <div className="blog__meta">
                  <div className="blog__meta__info d-flex gap-2 gap-lg-3 my-3 flex-wrap">
                    <span className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/calender.svg"
                        alt=""
                      />{" "}
                      20 March, 2022
                    </span>
                    <a href="#" className="d-flex gap-1 align-items-center">
                      {" "}
                      <img
                        className="svg"
                        src="assets/img/icon/user.svg"
                        alt=""
                      />{" "}
                      Jon Adom
                    </a>
                  </div>
                  <a href="blog-details.html" className="h6 fw-semibold">
                    Want to Work in One of The World’s New Careers
                  </a>
                  <a
                    href="blog-details.html"
                    className="readmore__btn d-flex mt-3 gap-2 align-items-center"
                  >
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* single blog end */}
          </div>
          <div className="rts__pagination mx-auto pt-60 max-content">
            <ul className="d-flex gap-2">
              <li>
                <a href="#" className="inactive">
                  <i className="rt-chevron-left" />
                </a>
              </li>
              <li>
                <a className="active" href="#">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <i className="rt-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="job__search__section mb-40">
            <div className="d-flex flex-column gap-3">
              <div className="search__item">
                <label
                  htmlFor="search"
                  className="mb-20 font-20 fw-medium text-dark text-capitalize"
                >
                  Search By Job Title
                </label>
                <div className="position-relative">
                  <form action="#">
                    <input
                      type="text"
                      id="search"
                      placeholder="Enter Type Of job"
                      required
                    />
                    <i className="fa-light fa-magnifying-glass" />
                  </form>
                </div>
              </div>
              {/* category item */}
              <div className="search__item">
                <h6 className="mb-20 font-20 fw-medium text-dark text-capitalize">
                  Category
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="web" id="web" />
                      <label htmlFor="web">Web Development</label>
                    </div>
                    <span>(130)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="design" id="design" />
                      <label htmlFor="design">Website Design</label>
                    </div>
                    <span>(80)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="ux" id="ux" />
                      <label htmlFor="ux">UI/UX Design</label>
                    </div>
                    <span>(45)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="dev" id="dev" />
                      <label htmlFor="dev">Development</label>
                    </div>
                    <span>(100)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="business" id="business" />
                      <label htmlFor="business">Business &amp; Marketing</label>
                    </div>
                    <span>(80)</span>
                  </div>
                </div>
              </div>
              {/* category item end */}
              {/* Author label */}
              <div className="search__item">
                <h6 className="mb-20 font-20 fw-medium text-dark text-capitalize">
                  Author
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="jon" id="jon" />
                      <label htmlFor="jon">Jonathon Doe</label>
                    </div>
                    <span>(10)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="jack" id="jack" />
                      <label htmlFor="jack">Jack Alexander</label>
                    </div>
                    <span>(15)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="emma" id="emma" />
                      <label htmlFor="emma">Emma Elizabeth</label>
                    </div>
                    <span>(20)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="Michael" id="Michael" />
                      <label htmlFor="Michael">Michael Roy</label>
                    </div>
                    <span>(45)</span>
                  </div>
                </div>
              </div>
              {/* Author label end */}
              {/* tags */}
              <div className="search__item">
                <h6 className="mb-20 font-20 fw-medium text-dark text-capitalize">
                  Tags
                </h6>
                <div className="job__tags d-flex flex-wrap gap-3">
                  <a href="#">Course</a>
                  <a href="#">Design</a>
                  <a href="#">Web Development</a>
                  <a href="#">Business</a>
                  <a href="#">UI/UX</a>
                </div>
              </div>
              {/* tags end */}
              {/* latest blog */}
              <div className="search__item">
                <h6 className="mb-20 font-20 fw-medium text-dark text-capitalize">
                  Latest Blog
                </h6>
                <div className="d-flex flex-column gap-4">
                  <div className="latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <div className="thumb">
                      <img
                        className="rounded-2"
                        src="assets/img/pages/blog-1/r-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <a href="blog-details.html" className="fw-semibold ">
                        Start an online Job and work from home
                      </a>
                      <span className="d-flex mt-2 gap-2 align-items-center fw-medium">
                        {" "}
                        <img
                          className="svg"
                          height={16}
                          width={16}
                          src="assets/img/icon/calender.svg"
                          alt=""
                        />{" "}
                        20 March, 2022
                      </span>
                    </div>
                  </div>
                  <div className="latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <div className="thumb">
                      <img
                        className="rounded-2"
                        src="assets/img/pages/blog-1/r-2.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <a href="blog-details.html" className="fw-semibold ">
                        7 Ways Job Post Has Improved Business Today
                      </a>
                      <span className="d-flex mt-2 gap-2 align-items-center fw-medium">
                        {" "}
                        <img
                          className="svg"
                          height={16}
                          width={16}
                          src="assets/img/icon/calender.svg"
                          alt=""
                        />{" "}
                        20 March, 2022
                      </span>
                    </div>
                  </div>
                  <div className="latest__blog d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <div className="thumb">
                      <img
                        className="rounded-2"
                        src="assets/img/pages/blog-1/r-3.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <a href="blog-details.html" className="fw-semibold ">
                        Insider Strategies For Success On Job Website
                      </a>
                      <span className="d-flex mt-2 gap-2 align-items-center fw-medium">
                        {" "}
                        <img
                          className="svg"
                          height={16}
                          width={16}
                          src="assets/img/icon/calender.svg"
                          alt=""
                        />{" "}
                        20 March, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* latest blog end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
