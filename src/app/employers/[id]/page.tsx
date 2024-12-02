/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";
import Connexion from "@/components/Connexion";
// import Sidebar from "@/components/SidbarEntreprise";
interface Profile {
  id: string;
  profile: {
    id: number;
    user_id: number;
    name: string;
    email: string;
    birth_date: string;
    phone: string;
    address: string;
    profile_picture_path: string;
    education: string;
    experience: string;
    skills: string;
    website: string;
    founded_date: string;
    company_size: string;
    company_categories: string;
    public_profile_view: string;
    description: string;
    photo: string;
    facebook: string;
    linkedin: string;
    behance: string;
    dribbble: string;
    country: string;
    state: string;
    postal_code: string;
    latitude: string;
    longitude: string;
    title: string;
  };
  job_listings:[];
}
export default function Home({ params }: { params: { id: string } }) {
  const [employer, setEmployer] = useState<Profile[]>([]);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const id = params.id;
  useEffect(() => {
    const loadEmployers = async () => {
      try {
        const employersData = await apiService.getResourceById("enterprises", id);
        setEmployer(employersData);
      } catch (error) {
        console.error(error);
      }
    };
    loadEmployers();
  }, [id]);
  const formatTimestampToDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp); // Assurez-vous que `timestamp` est en millisecondes
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };
  console.log(employer);
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
        <div className="col-lg-12 position-relative d-flex justify-content-md-between justify-content-center align-items-center">
          <div className="breadcrumb__area max-content breadcrumb__padding">
            <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center">
              <div className="d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                <div className="company__icon rounded-2 bg-white">
                  <img
                    className=""
                    src="assets/img/home-1/company/upwork.svg"
                    alt=""
                  />
                </div>
                <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2">
                  <div className="">
                    <h3 className="job__title fw-bold h3 mb-0">Upwork.Inc</h3>
                  </div>
                  <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2">
                    <div className="d-flex gap-2 align-items-center">
                      Freelancing Platform
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa-light fa-location-dot" /> Newyork, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="breadcrumb__apply max-content">
              <a href="#" className="rts__btn apply__btn be-1 fill__btn">
                Apply This Possition
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
        <div className="col-xl-8 col-lg-7">
          <div className="employer__details">
            <h6 className="fw-semibold mb-20">About Company</h6>
            <p>
              Upwork began over two decades ago by pioneering a better way of
              working, helping businesses find more flexibility and connecting
              talent with more opportunities. Our mission to create economic
              opportunities so people have better lives has taken us so much
              further. As a result, we’ve become the world’s work marketplace
              where every day businesses of all sizes and independent talent
              from around the globe meet here to accomplish incredible things.
              Like for so many, Upwork has had a big impact on my life. I first
              came to this company on the product team and over the years have
              understood what makes this platform really work: the
              relationships.
            </p>
            <h6 className="fw-semibold mb-20 mt-30">We see what you do</h6>
            <p>
              I have personally seen the passion and commitment that every user
              puts into their work here. Whether it’s a quick powerpoint
              presentation or a multi-year development project - both talent on
              Upwork and our clients care about doing really good work because
              they love what they do. In fact, we designed it that way. Our work
              marketplace aligns the goals of our clients with the goals of
              talent on Upwork so that outcomes are better and everyone grows in
              the same direction. You’ll find tools to develop your skills,
              evolve your business, and gain the control and freedom you need
              for success.
            </p>
            <h6 className="fw-semibold mb-30 mt-30">Our Office Gallery</h6>
            <div className="row g-30 row-cols-lg-2 row-cols-xl-3 row-cols-sm-2 row-cols-1">
              <div className="col">
                <img
                  className="rounded-2"
                  src="assets/img/pages/g-1.webp"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="rounded-2"
                  src="assets/img/pages/g-2.webp"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="rounded-2"
                  src="assets/img/pages/g-3.webp"
                  alt=""
                />
              </div>
            </div>
            <h6 className="fw-semibold mb-30 mt-30">Our Team</h6>
            <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-sm-2 row-cols-1 g-30">
              <div className="col">
                <div className="team__member text-center">
                  <a href="#">
                    <img
                      className="rounded-3"
                      src="assets/img/team/1.webp"
                      alt=""
                    />
                  </a>
                  <div className="team__member__meta mt-3">
                    <a
                      href="#"
                      className="font-20 fw-medium text-dark mb-0 d-block"
                    >
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
              <div className="col">
                <div className="team__member text-center">
                  <a href="#">
                    <img
                      className="rounded-3"
                      src="assets/img/team/2.webp"
                      alt=""
                    />
                  </a>
                  <div className="team__member__meta mt-3">
                    <a
                      href="#"
                      className="font-20 fw-medium text-dark mb-0 d-block"
                    >
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
              <div className="col">
                <div className="team__member text-center">
                  <a href="#">
                    <img
                      className="rounded-3"
                      src="assets/img/team/3.webp"
                      alt=""
                    />
                  </a>
                  <div className="team__member__meta mt-3">
                    <a
                      href="#"
                      className="font-20 fw-medium text-dark mb-0 d-block"
                    >
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
          </div>
        </div>
        <div className="col-lg-5 col-xl-4  d-flex flex-column gap-40 ">
          <div className="job__overview">
            <h6 className="fw-semibold mb-20">Aperçu des Emplois</h6>
            <div className="job__overview__content">
              <ul>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-calender" /> Fondé en
                  </span>
                  <span className="text">: 10,July, 2023</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="fa-light fa-user" /> Team Member
                  </span>
                  <span className="text">: 20</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-price-tag" /> Project Budget
                  </span>
                  <span className="text">: $2000-$3000</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="fa-sharp fa-thin fa-location-dot" /> Location
                  </span>
                  <span className="text">: New York, USA</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-briefcase" /> Company Field
                  </span>
                  <span className="text">: Freelancing</span>
                </li>
                <li className="d-flex flex-wrap gap-3 gap-sm-0 align-items-center justify-content-between">
                  <span className="left-text">
                    {" "}
                    <i className="rt-branch" /> Office Branches
                  </span>
                  <span className="text">: 10</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="job__contact">
            <h6 className="fw-semibold mb-20">Contact Google.com</h6>
            <form action="#" className="d-flex flex-column gap-4">
              <div className="search__item">
                <label
                  htmlFor="email"
                  className="mb-3 font-20 fw-medium text-dark text-capitalize"
                >
                  Your Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    id="email"
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
                  <input type="text" id="phone" placeholder="(+88)154-678789" />
                  <i className="rt-phone" />
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
              <button type="submit" className="rts__btn apply__btn w-100">
                Send a Message
              </button>
            </form>
          </div>
          <div className="job__location">
            <h6 className="fw-semibold mb-20">Job Location</h6>
            <div className="gmap">
              <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Reacthemes+(ReacThemes)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* job list one end */}
  {/* opening job */}
  <div className="rts__section pb-120">
    <div className="container">
      <div className="row justify-content-center mb-60">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-center">
            <h3 className="rts__section__title section__mb">3 Opening Jobs</h3>
            <p className="rts__section__desc">
              From entry-level positions to executive roles browse through.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-30">
        {/* single item */}
        <div className="col-lg-12">
          <div
            className="rts__job__card__big style__gradient__two 
              flex-wrap d-flex justify-content-between align-items-center gap-2"
          >
            <div className="d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
              <div className="company__icon">
                <img src="assets/img/home-1/company/apple.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="job-details-2.html"
                    className="job__title h6 fw-semibold"
                  >
                    Senior UI Designer, Apple
                  </a>
                </div>
                <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-location-dot" /> Newyork, USA
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light rt-briefcase" /> Full Time
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-clock" /> 3 Days Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags d-flex flex-wrap gap-3">
                <a href="#">Creative</a>
                <a href="#">user interface</a>
                <a href="#">web ui</a>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <div className="job__sallery d-flex gap-2 align-items-center">
                  <i className="fa-sharp rt-price-tag" /> $500{" "}
                  <span>Monthly</span>
                </div>
                <button className="apply__btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* single item end */}
        {/* single item */}
        <div className="col-lg-12">
          <div
            className="rts__job__card__big style__gradient__two 
              flex-wrap d-flex justify-content-between align-items-center gap-2"
          >
            <div className="d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
              <div className="company__icon">
                <img src="assets/img/home-1/company/google.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="job-details-2.html"
                    className="job__title h6 fw-semibold"
                  >
                    Software Engineer, Google
                  </a>
                </div>
                <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-location-dot" /> Newyork, USA
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light rt-briefcase" /> Full Time
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-clock" /> 3 Days Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags d-flex flex-wrap gap-3">
                <a href="#">React</a>
                <a href="#">javascript</a>
                <a href="#">web ui</a>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <div className="job__sallery d-flex gap-2 align-items-center">
                  <i className="fa-sharp rt-price-tag" /> $500{" "}
                  <span>Monthly</span>
                </div>
                <button className="apply__btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* single item end */}
        {/* single item */}
        <div className="col-lg-12">
          <div
            className="rts__job__card__big style__gradient__two 
              flex-wrap d-flex justify-content-between align-items-center gap-2"
          >
            <div className="d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
              <div className="company__icon">
                <img src="assets/img/home-1/company/upwork.svg" alt="" />
              </div>
              <div className="job__meta">
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="job-details-2.html"
                    className="job__title h6 fw-semibold"
                  >
                    Web Developer, Upwork
                  </a>
                </div>
                <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-location-dot" /> Newyork, USA
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light rt-briefcase" /> Full Time
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-light fa-clock" /> 3 Days Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <div className="job__tags d-flex flex-wrap gap-3">
                <a href="#">Html</a>
                <a href="#">css</a>
                <a href="#">php</a>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <div className="job__sallery d-flex gap-2 align-items-center">
                  <i className="fa-sharp rt-price-tag" /> $600{" "}
                  <span>Monthly</span>
                </div>
                <button className="apply__btn">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* single item end */}
      </div>
    </div>
  </div>
  {/* opening job end */}
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
