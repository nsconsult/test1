/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import apiService from "../services/apiService";
import Connexion from "@/components/Connexion";

interface Profile {
  id: string;
  name: string;
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
  };
  job_listings: [];
}

export default function Home() {
  const [employers, setEmployers] = useState<Profile[]>([]);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);

  useEffect(() => {
    const loadEmployers = async () => {
      try {
        const employersData = await apiService.getAllResources("enterprises");
        setEmployers(employersData);
      } catch (error) {
        console.error(error);
      }
    };
    loadEmployers();
  }, []);

  console.log(employers);

  return (
    <>
      <Css />
      <Header setLoginModalOpen={setLoginModalOpen} />
      <div>
        {/* Correspond à la zone de recherche d'emploi et la liste */}
        <div className="rts__section section__padding">
          <div className="container">
            <div className="row g-30">
              <div className="col-lg-4 col-xl-4">
                <div className="job__search__section mb-40">
                  <form action="#" className="d-flex flex-column row-30">
                    <div className="search__item">
                      <label
                        htmlFor="search"
                        className="mb-3 font-20 fw-medium text-dark text-capitalize"
                      >
                        Recherche par mots-clés
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          id="search"
                          placeholder="Find Top Employer"
                          required
                        />
                        <i className="fa-light fa-magnifying-glass" />
                      </div>
                    </div>
                    {/* Other search fields */}
                    <button
                      type="submit"
                      className="rts__btn no__fill__btn max-content mx-auto job__search__btn font-sm"
                      aria-label="Search"
                    >
                      Trouver un emploi
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 col-xl-8">
                {/* Affichage des résultats */}
                <div className="top__query mb-40 d-flex flex-wrap gap-4 gap-xl-0 justify-content-between align-items-center">
                  <span className="text-dark font-20 fw-medium">
                    Affichage de  1-{employers.length} sur {employers.length} résultats
                  </span>
                  <div className="d-flex flex-wrap align-items-center gap-4">
                    <form action="#" className="category-select">
                      <div className="position-relative">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Toutes les catégories</span>
                          <ul className="list">
                            <li
                              data-value="Nothing"
                              data-display="All Category"
                              className="option selected focus"
                            >
                              Toutes les catégories                            
                              </li>
                            <li data-value={1} className="option">
                              Dhaka
                            </li>
                            {/* Other categories */}
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    id="grid"
                  >
                    <div className="row g-30">
                      {employers.map((employer) => (
                        <div className="col-lg-6 col-md-6" key={employer.id}>
                          <div className="rts__job__card rounded-2 style__four">
                            <div className="company__icon mx-auto rounded-0">
                              <img
                                src={employer?.profile?.profile_picture_path || "assets/img/icon/upwork.svg"}
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="h6 job__title mt-3 mb-2">
                              <a
                                href={employer?.profile?.website || ""}
                                aria-label="job"
                              >
                                {employer.name || "Non défini"}
                              </a>
                            </div>
                            <p>{employer?.profile?.description || "Aucune description"}</p>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                              <div className="d-flex gap-2 align-items-center">
                                <i className="fa-light fa-location-dot" />{" "}
                                {employer?.profile?.address || "Aucune adresse"}
                              </div>
                            </div>
                            <a
                              href={"employers/" + employer.id}
                              className="rts__btn fill__btn rounded-2"
                            >
                              Nombre d'emplois ouverts {employer.job_listings.length}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* pagination */}
                <div className="rts__pagination rounded__pagination mx-auto pt-60 max-content">
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
                          <img
                            src="assets/img/home-1/app/app-store.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="link">
                        <a
                          href="https://google.com/"
                          target="_blank"
                          title="play store"
                        >
                          <img
                            src="assets/img/home-1/app/play-store.svg"
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
      </div>

      <Footer />
      <Myscript />
    </>
  );
}