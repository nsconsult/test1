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
            <h1 className="breadcrumb-title h3 mb-3">Candidates</h1>
            <nav>
              <ul className="breadcrumb m-0 lh-1">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Candidates
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
  {/* job list one */}
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row g-30">
        <div className="col-lg-5 col-xl-4">
          <div className="job__search__section mb-40">
            <form action="#" className="d-flex flex-column row-30">
              <div className="search__item">
                <label
                  htmlFor="search"
                  className="mb-20 font-20 fw-medium text-dark text-capitalize"
                >
                  Search By Job Title
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Enter Type Of job"
                    required
                  />
                  <i className="fa-light fa-magnifying-glass" />
                </div>
              </div>
              {/* job location */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  Search Location
                </h6>
                <div className="position-relative">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">Search Location</span>
                    <ul className="list">
                      <li
                        data-value="Nothing"
                        data-display="Search Location"
                        className="option selected focus"
                      >
                        Search Location
                      </li>
                      <li data-value={1} className="option">
                        Dhaka
                      </li>
                      <li data-value={2} className="option">
                        Barisal
                      </li>
                      <li data-value={3} className="option">
                        Chittagong
                      </li>
                      <li data-value={4} className="option">
                        Rajshahi
                      </li>
                    </ul>
                  </div>
                  <i className="fa-light fa-location-dot" />
                </div>
              </div>
              {/* job category */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  Search By Job category
                </h6>
                <div className="position-relative">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">Choose a Category</span>
                    <ul className="list">
                      <li
                        data-value="Nothing"
                        data-display="Search By Job category"
                        className="option selected focus"
                      >
                        Choose a Category
                      </li>
                      <li data-value={1} className="option">
                        Government
                      </li>
                      <li data-value={2} className="option">
                        NGO
                      </li>
                      <li data-value={3} className="option ">
                        Private
                      </li>
                    </ul>
                  </div>
                  <i className="rt-briefcase" />
                </div>
              </div>
              {/* candidate gender */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  candidate gender
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="bt" id="bt" />
                      <label htmlFor="bt">Both</label>
                    </div>
                    <span>(230)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="female" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                    <span>(80)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="male" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <span>(150)</span>
                  </div>
                </div>
              </div>
              {/* candidate gender end */}
              {/* candidate type */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  Candidate Type
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="fulltime" id="fulltime" />
                      <label htmlFor="fulltime">Full Time</label>
                    </div>
                    <span>(130)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="part" id="part" />
                      <label htmlFor="part">Part Time</label>
                    </div>
                    <span>(80)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="temporary" id="temporary" />
                      <label htmlFor="temporary">temporary</label>
                    </div>
                    <span>(150)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="freelance" id="freelance" />
                      <label htmlFor="freelance">freelance</label>
                    </div>
                    <span>(130)</span>
                  </div>
                </div>
              </div>
              {/* candidate type end */}
              {/* candidate type */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  experience Label
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="5year" id="5year" />
                      <label htmlFor="5year">5 year</label>
                    </div>
                    <span>(10)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="4year" id="4year" />
                      <label htmlFor="4year">4 year</label>
                    </div>
                    <span>(15)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="3year" id="3year" />
                      <label htmlFor="3year">3 year</label>
                    </div>
                    <span>(50)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name="fresher" id="fresher" />
                      <label htmlFor="fresher">fresher</label>
                    </div>
                    <span>(130)</span>
                  </div>
                </div>
              </div>
              {/* candidate type end */}
              {/* salary label */}
              <div className="search__item">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  salary offered
                </h6>
                <div className="search__item__list">
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name={"500"} id={"500"} />
                      <label htmlFor={"500"}>under $500</label>
                    </div>
                    <span>(10)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name={"5000"} id={"5000"} />
                      <label htmlFor={"5000"}>$5,000 - $10,000</label>
                    </div>
                    <span>(44)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name={"1000"} id={"1000"} />
                      <label htmlFor={"1000"}>$10,000 - $15,000</label>
                    </div>
                    <span>(27)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between list">
                    <div className="d-flex gap-2 align-items-center checkbox">
                      <input type="checkbox" name={"1500"} id={"1500"} />
                      <label htmlFor={"1500"}>$15,000 - $20,000</label>
                    </div>
                    <span>(85)</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="rts__btn no__fill__btn max-content mx-auto job__search__btn font-sm"
                aria-label="Search"
              >
                Find Candidate
              </button>
            </form>
          </div>
          {/* job aleart */}
          <div className="job__aleart job__search__section">
            <form action="#" className="d-flex flex-column row-30">
              <div className="search__item">
                <label
                  htmlFor="alert"
                  className="mb-20 font-20 fw-medium text-dark text-capitalize"
                >
                  Job Alert
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    id="alert"
                    placeholder="Enter Type Of job"
                  />
                  <i className="fa-light fa-magnifying-glass" />
                </div>
              </div>
              {/* job location */}
              <div className="search__item no-icon">
                <h6 className="mb-2 font-20 fw-medium text-dark text-capitalize">
                  EmailFrequency
                </h6>
                <div className="position-relative">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">Daily</span>
                    <ul className="list">
                      <li
                        data-value="Nothing"
                        data-display="Daily"
                        className="option selected focus"
                      >
                        Daily
                      </li>
                      <li data-value={1} className="option">
                        Daily
                      </li>
                      <li data-value={2} className="option">
                        Weakly
                      </li>
                      <li data-value={3} className="option ">
                        Monthly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* job category */}
              <button
                type="submit"
                className="rts__btn fill__btn py-3 rounded-2 job__search"
                aria-label="Search"
              >
                Save Job Alert
              </button>
            </form>
          </div>
          {/* job aleart end */}
        </div>
        <div className="col-lg-7 col-xl-8">
          <div className="top__query mb-40 d-flex flex-wrap gap-4 gap-xl-0 justify-content-between align-items-center">
            <span className="text-dark font-20 fw-medium">
              Showing 1-9 of 19 results
            </span>
            <div className="d-flex flex-wrap align-items-center gap-4">
              <form action="#" className="category-select">
                <div className="position-relative">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">All Category</span>
                    <ul className="list">
                      <li
                        data-value="Nothing"
                        data-display="All Category"
                        className="option selected focus"
                      >
                        All Category
                      </li>
                      <li data-value={1} className="option">
                        Dhaka
                      </li>
                      <li data-value={2} className="option">
                        Part time
                      </li>
                      <li data-value={3} className="option">
                        Full Time
                      </li>
                      <li data-value={4} className="option">
                        Government
                      </li>
                      <li data-value={5} className="option">
                        NGO
                      </li>
                      <li data-value={6} className="option">
                        Private
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
              <div
                className="d-flex align-items-center gap-3"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="rts__btn no__fill__btn grid-style nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#grid"
                >
                  {" "}
                  <i className="rt-hamburger" /> Grid
                </button>
                <button
                  className="rts__btn no__fill__btn list-style nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#list"
                >
                  {" "}
                  <i className="rt-list" /> List
                </button>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              id="grid"
            >
              <div className="row g-30">
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/1.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Al Amin Bali
                        </a>
                        <span className="author">UX Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/2.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Jonathon Doe
                        </a>
                        <span className="author">UX Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/3.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Jack Alexander
                        </a>
                        <span className="author">UX Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/4.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Oliver Josef
                        </a>
                        <span className="author">Web Developer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/5.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Al Amin Bali
                        </a>
                        <span className="author">UX Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/author/6.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Emma Roy
                        </a>
                        <span className="author">Graphics Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/home-2/author/4.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Elizabeth
                        </a>
                        <span className="author">UX Designer</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Figma</a>
                        <a href="#">Photoshop</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
                {/* single candidate */}
                <div className="col-xl-6 col-md-6 col-lg-12">
                  <div className="rts__author__card style__default d-flex flex-column gap-3">
                    <div className="author_icon">
                      <img
                        src="assets/img/home-2/author/4.svg"
                        className="rounded-5"
                        alt=""
                      />
                    </div>
                    <div className="job__meta w-100 d-flex flex-column gap-3">
                      <div className="d-flex flex-column align-items-center gap-1">
                        <a
                          href="candidate-details-1.html"
                          className="job__title h6 mb-0"
                        >
                          Addison Bekar
                        </a>
                        <span className="author">Produc t Manager</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-briefcase" /> Full Time
                        </div>
                      </div>
                      <div className="job__tags d-flex justify-content-center mb-3 flex-wrap gap-3">
                        <a href="#">Creative</a>
                        <a href="#">User Interface</a>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn max-content"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* single candidate end */}
              </div>
            </div>
            <div className="tab-pane fade" role="tabpanel" id="list">
              <div className="row g-30">
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/1.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Michael Roy
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-4 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/2.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Jonathon Doe
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/1.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Jack Alexander{" "}
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/1.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Oliver Josef{" "}
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/8.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Emma Roy
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/8.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Anastacia Alice
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/1.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Jack Alexander{" "}
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
                {/* author card */}
                <div className="col-12">
                  <div className="rts__author__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
                    <div
                      className="d-flex gap-3 gap-md-4 flex-column flex-md-row justify-content-start
                                   align-items-start align-items-md-center"
                    >
                      <div className="author__icon">
                        <img src="assets/img/author/1.svg" alt="" />
                      </div>
                      <div className="job__meta">
                        <div className="d-flex align-items-start flex-column">
                          <a
                            href="candidate-details-1.html"
                            className="job__title mb-0 h6 fw-semibold"
                          >
                            Oliver Josef{" "}
                          </a>
                          <span className="d-block fw-medium">
                            Software Engineer
                          </span>
                        </div>
                        <div className="job__tags mt-3 d-flex flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">web ui</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 flex-wrap align-items-center">
                      <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light fa-location-dot" /> Newyork,
                          USA
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fa-light rt-briefcase" /> Full Time
                        </div>
                      </div>
                      <a
                        href="candidate-details-1.html"
                        className="apply__btn"
                        aria-label="View Profile"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                {/* author card end */}
              </div>
            </div>
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
      </div>
    </div>
  </div>
  {/* job list one end */}
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
