/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import Connexion from '@/components/Connexion';
import apiService from './services/apiService';
import { useRouter } from "next/navigation";

interface JobList {
  id: number;
  user: {
    created_at: '';
    email: '';
    email_verified: '';
    email_verified_at: '';
    id: '';
    name: '';
    profile: { id: ''; user_id: ''; first_name: ''; last_name: ''; birth_date: ''; profile_picture_path: '' };
  };
  user_id: '';
  title: '';
  description: '';
  category_id: '';
  location: '';
  experience_level: '';
  contract_type: '';
  min_salary: '';
  max_salary: '';
  deadline: '';
}

interface JobsCategorie {
  id: number;
  name: string;
};

export default function Home() {
  const router = useRouter();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [categories, setCategories] = useState<JobsCategorie[]>([]);
  const [jobs, setJobs] = useState<JobList[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedJobType, setSelectedJobType] = useState<string>('');
  
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await apiService.getAllResources('job_listings/user');
        const categoriesData = await apiService.getAllResources('job_categories');
        if (!Array.isArray(jobsData)) {
          console.error("jobsData doit être un tableau");
          return;
        }
        const uniqueLocations = [...new Set(jobsData.map(job => job.location))];
        setCategories(categoriesData);
        setLocations(uniqueLocations);
        setJobs(jobsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadJobs();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/jobs?location=${selectedLocation}&category=${selectedJobType}`);
  };
  // console.log("Catégories: ", categories);
  return (
    <>
      <Css />
      <Header setLoginModalOpen={setLoginModalOpen} />
      <section className="rts__banner home__one__banner pt-260">
    <div className="rts__banner__background">
      <div className="shape__home__one __first d-none d-lg-block">
        <img src="assets/img/home-1/banner/banner-shape.svg" alt="" />
      </div>
      <div className="shape__home__one __second d-none d-lg-block">
        <img src="assets/img/home-1/banner/banner-shape-2.svg" alt="" />
      </div>
      <div className="shape__home__one __third"></div>
    </div>
    <div className="container">
      <div className="row">
        <div className="rts__banner__wrapper d-flex gap-4 justify-content-between ">
          <div className="rts__banner__content">
            <h1 className="rts__banner__title wow animated fadeInUp ">
            Trouvez l'emploi de vos rêves avec 
              <span> Tépé</span>
            </h1>
            <p
              className="rts__banner__desc my-40 wow animated fadeInUp"
              data-wow-delay=".1s"
            >
              La recherche d'un nouvel emploi peut être à la fois passionnante et décourageante.
              Naviguer sur le marché de l'emploi implique d'explorer différentes voies,
              y compris les sites d'emploi en ligne.
            </p>
            <div
              className="rts__job__search wow animated fadeInUp"
              data-wow-delay=".2s"
            >

              <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center flex-wrap flex-md-nowrap flex-lg-wrap flex-xl-nowrap gap-4 gap-xl-0 justify-content-between"
        >
            <div className="input-group flex-wrap d-flex gap-4">
                <div className="single__input d-flex flex-column">
                    <label htmlFor="location">Lieu</label>
                    {loading ? (
                        <p>Chargement des locations...</p>
                    ) : (
                        <select
                            name="location"
                            className="select-nice"
                            id="location"
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)} // Met à jour l'état lors de la sélection
                        >
                            <option disabled value="">
                                -- Sélectionnez  --
                            </option>
                            {locations.length > 0 ? (
                                locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Aucune position disponible</option>
                            )}
                        </select>
                    )}
                </div>
                <div className="vr d-none d-sm-block" />
                <div className="single__input d-flex flex-column">
                    <label htmlFor="job__type">Categories</label>
                    {loading ? (
                        <p>Chargement des categories...</p>
                    ) : (
                    <select
                        name="job__type"
                        className="select-nice"
                        id="job__type"
                        value={selectedJobType}
                        onChange={(e) => setSelectedJobType(e.target.value)} // Met à jour l'état lors de la sélection
                    >
                        {/* <option disabled value="">
                            Sélectionnez
                        </option>
                        <option value="full-time">Temps plein</option>
                        <option value="part-time">Temps partiel</option>
                        <option value="internship">Stage</option> */}
                        <option value="" disabled>Selectionner</option>
                            {categories.map((categorie) => (
                              <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                            ))
                            
                            }


                    </select>
                    )}
                </div>
            </div>
            <button
                type="submit"
                className="rts__btn gap-2 fill__btn job__search"
                aria-label="Search"
            >
                <i className="fa-light fa-magnifying-glass" /> Recherchez
            </button>
        </form>
            </div>
          </div>
          <div className="rts__banner__image position-relative">
            <figure className="banner__image">
              <img src="assets/img/home-1/banner/image_2x.webp" alt="banner" />
            </figure>
            <div className="banner__image__shape">
              <div className="facebook">
                <i className="fab fa-facebook" />
              </div>
              <div className="twitter">
                <i className="fab fa-twitter" />
              </div>
              <div className="linkedin">
                <i className="fab fa-linkedin-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <section className="rts__banner home__one__banner pt-260">
        <div className="rts__banner__background">
          <div className="shape__home__one __first d-none d-lg-block">
            <img src="assets/img/home-1/banner/banner-shape.svg" alt="" />
          </div>
          <div className="shape__home__one __second d-none d-lg-block">
            <img src="assets/img/home-1/banner/banner-shape-2.svg" alt="" />
          </div>
          <div className="shape__home__one __third"></div>
        </div>

      </section>
      { /* Banner area end */ }

      { /* Work process area */ }
      <section className="rts__section section__padding">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-center wow animated fadeInUp">
                <h3 className="rts__section__title section__mb">Comment Tépé fonctionne</h3>
                <p className="rts__section__desc">Notre site d'emploi propose une large gamme</p>
              </div>
            </div>
          </div>
          <div className="row g-30 justify-content-center">
            <div className="col-lg-4 col-md-10 wow animated fadeInUp" data-wow-delay=".1s">
              <div className="rts__workprocess__box">
                <div className="rts__icon">
                  <img src="assets/img/home-1/process/icon-1.svg" alt="" />
                </div>
                <span className="process__title h6 d-block">Créez un compte gratuit</span>
                <p>Inscrivez-vous en quelques clics pour accéder à une plateforme dédiée à votre réussite professionnelle. Remplissez vos informations de base et commencez à bénéficier d'outils et de ressources adaptés à votre recherche d'emploi.</p>
                <div className="work__readmore mt-3">
                  <a href="#">En Savoir Plus...<i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 wow animated fadeInUp" data-wow-delay=".2s">
              <div className="rts__workprocess__box">
                <div className="rts__icon">
                  <img src="assets/img/home-1/process/icon-2.svg" alt="" />
                </div>
                <span className="process__title h6 d-block">Rendez votre CV incroyable</span>
                <p>Transformez votre CV avec des modèles professionnels et des conseils personnalisés. Mettez en avant vos compétences et expériences de manière attrayante et percutante pour attirer l'attention des recruteurs.</p>
                <div className="work__readmore mt-3">
                  <a href="#">Lire la suite <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 wow animated fadeInUp" data-wow-delay=".3s">
              <div className="rts__workprocess__box">
                <div className="rts__icon">
                  <img src="assets/img/home-1/process/icon-3.svg" alt="" />
                </div>
                <span className="process__title h6 d-block">Postulez à un emploi</span>
                <p>Explorez un large éventail d'offres d'emploi et postulez rapidement avec votre CV optimisé. Suivez vos candidatures et préparez-vous à décrocher l'entretien de vos rêves grâce à des ressources supplémentaires et des conseils pratiques.</p>
                <div className="work__readmore mt-3">
                  <a href="#">Lire la suite <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      { /* Work process area end */ }

      { /* Brand area */ }

      { /* Brand area end */ }

      { /* Category slider */ }
      <div className="rts__section overflow-hidden cat__slider__bg pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-between mb-50 gap-4 position-relative mtn-1">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-start wow animated fadeInUp">
                <h3 className="rts__section__title section__mb">Parcourir la catégorie d'emploi</h3>
                <p className="rts__section__desc">À la recherche de votre prochaine opportunité de carrière. Ne cherchez pas plus loin</p>
              </div>
            </div>
            <div className="rts__slider__control align-items-end position-relative position-md-absolute right-md-0 bottom-md-0 z-3 d-flex gap-2 max-content">
              <div className="rts__slide__next slider__btn">
                <i className="fa-sharp fa-solid fa-chevron-left" />
              </div>
              <div className="rts__slide__prev slider__btn">
                <i className="fa-sharp fa-solid fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cat__slider overflow-hidden swiper-data" data-swiper='{"slidesPerView": 4, "spaceBetween": 30,"loop": true,"speed": 1000,"autoplay":{"delay":"7000"},"pagination":{"el":".rts__pagination","clickable":true},"navigation":{"nextEl":".rts__slide__next","prevEl":".rts__slide__prev"},"breakpoints":{"0":{"slidesPerView":1},"490":{"slidesPerView":1.5},"768":{"slidesPerView":2},"1024":{"slidesPerView":3},"1200":{"slidesPerView":3.5},"1400":{"slidesPerView":4}}}'>
              <div className="swiper-wrapper">
                {['Développement', 'Design & Arts', 'Comptabilité', 'Marketing'].map((cat, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="single__cat d-flex gap-4">
                      <div className={`single__cat__icon color-${index + 1}`}>
                        <img src={`assets/img/home-1/cat/${index + 1}.svg`} alt="" />
                      </div>
                      <div className="single__cat__link d-flex flex-column">
                        <a href="job-list-1.html" aria-label="cat__label">{cat}</a>
                        <span>130+ Jobs</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Category slider end */ }

      { /* Current open positions section */ }
      <section className="rts__section section__padding">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-center wow animated fadeInUp">
                <h3 className="rts__section__title section__mb">Il y a plus de 1 000 emplois dans Jobpath</h3>
                <p className="rts__section__desc">Des postes de débutant aux rôles de direction, parcourez-les.</p>
              </div>
            </div>
          </div>
          {/* <div className="row g-30 wow animated fadeInUp" data-wow-delay=".0s">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="col-lg-6 col-xl-4 col-md-6" key={index}>
                <div className="rts__job__card">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="company__icon">
                      <img src={`assets/img/home-1/company/company-${index + 1}.svg`} alt="" />
                    </div>
                    <div className="featured__option">
                      {index === 0 && <span>En vedette</span>}
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-4 flex-wrap">
                    <div className="d-flex gap-1 align-items-center">
                      <i className="fa-light fa-location-dot" /> New york, USA
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <i className="fa-light fa-briefcase" /> {index % 2 === 0 ? 'Temps Plein' : 'Temps Partiel'}
                    </div>
                  </div>
                  <div className="h6 job__title my-3">
                    <a href={`job-details-${index + 1}.html`} aria-label="job">Job Title {index + 1}</a>
                  </div>
                  <p>Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.</p>
                  <div className="job__tags d-flex flex-wrap gap-3 mt-4">
                    <a href="#">Creative</a>
                    <a href="#">user interface</a>
                    <a href="#">web ui</a>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="row g-30">
                      {jobs.map((job) => (
                        <div className="col-xl-6 col-md-6 col-lg-12" key={job.id}>
                          <div className="rts__job__card">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="company__icon">
                                <img src={job.user.profile.profile_picture_path} alt="" />
                              </div>
                              <div className="featured__option"></div>
                            </div>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                              <div className="d-flex gap-1 align-items-center">
                                <i className="fa-light fa-location-dot" /> {job.location}
                              </div>
                              <div className="d-flex gap-1 align-items-center">
                                <i className="fa-light fa-briefcase" /> {job.contract_type}
                              </div>
                            </div>
                            <div className="h6 job__title my-3">
                              <a href={`/jobs/${job.id}`}>{job.title}</a>
                            </div>
                            <p>{job.description}</p>
                            <div className="job__tags d-flex flex-wrap gap-2 mt-4">
                              <a href="#">Créatif</a>
                              <a href="#">Interface utilisateur</a>
                              <a href="#">Interface utilisateur Web</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
        </div>
      </section>
      { /* Current open positions end */ }

      { /* Why are we popular section */ }
      <div className="rts__section pb-120">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="rts__image__section">
                <img src="assets/img/home-1/we-are/image.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rts__content__section ms-lg-4 ms-md-0 wow animated fadeInUp">
                <h3 className="fw-bold mb-4">Pourquoi nous sommes les plus populaires</h3>
                <p>Que vous soyez un professionnel expérimenté ou un jeune diplômé désireux de plonger dans le marché du travail, nous avons quelque chose pour tout le monde. Des experts en technologie aux experts en marketing, des gourous de la finance aux créatifs esprits, notre gamme diversifiée d’annonces s’adresse à une variété de compétences et d'intérêts.</p>
                <div className="mt-40 rts__listing">
                  <div className="single__listing d-flex align-items-center gap-4">
                    <span className="icon"><i className="fa-regular fa-check" /></span>
                    <span>Emploi de qualité</span>
                  </div>
                  <div className="single__listing d-flex align-items-center gap-4">
                    <span className="icon"><i className="fa-regular fa-check" /></span>
                    <span>Atteignez des centaines de contacts</span>
                  </div>
                  <div className="single__listing d-flex align-items-center gap-4">
                    <span className="icon"><i className="fa-regular fa-check" /></span>
                    <span>Pas de frais supplémentaires</span>
                  </div>
                  <div className="single__listing d-flex align-items-center gap-4">
                    <span className="icon"><i className="fa-regular fa-check" /></span>
                    <span>Emploi international</span>
                  </div>
                </div>
                <a href="job-list-2.html" className="rts__btn common__btn fill__btn mt-50">
                  Explorez davantage <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Why are we popular end */ }

      { /* Testimonial section */ }
      <div className="rts__section section__padding rts__testimonial__background">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-center wow animated fadeInUp mb-60">
                <h3 className="rts__section__title section__mb">Ce que disent nos clients</h3>
                <p className="rts__section__desc">À la recherche de votre prochaine opportunité de carrière. Ne cherchez pas plus loin</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rts__testimonial__active overflow-hidden swiper-data" data-swiper='{"slidesPerView": 1,"autoplay": true,"loop": true,"navigation": {"nextEl": ".rts__slide__next","prevEl": ".rts__slide__prev"}}'>
                <div className="swiper-wrapper">
                  {/* Example testimonials */}
                  {['Alexander Joy', 'Anna Smith'].map((name, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="rts__single__testimonial text-center">
                        <div className="rts__quote mb-40">
                          <img className="opacity-50" src="assets/img/icon/quote.svg" alt="" />
                        </div>
                        <div className="testimonial__text h6">Contrairement à la croyance populaire, Lorem Ipsum n’est pas un simple hasard texte.</div>
                        <div className="d-flex align-items-center justify-content-center mx-auto gap-3 pt-40 max-content">
                          <div className="author__image">
                            <img src="assets/img/home-1/testimonial/author.jpg" alt="" />
                          </div>
                          <div className="author__content text-start">
                            <span className="h6">{name}</span>
                            <p>Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rts__slider__control d-lg-flex justify-content-between g-0 position-absolute top-50  translate-middle-y d-none">
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
      { /* Testimonial section end */ }

      { /* Fun fact section */ }
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30 justify-content-center wow animated slideInUp">
            <div className="col-lg-3 col-md-6">
              <div className="rts__single__counter">
                <h2 className="fw-bold ms-lg-3 mx-auto heading__color"><span className="counter">20</span>K</h2>
                <p className="h6 mb-0 fw-semibold">Employeur heureux</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="rts__single__counter">
                <h2 className="fw-bold ms-lg-3 mx-auto heading__color"><span className="counter">11</span>K</h2>
                <p className="h6 mb-0 fw-semibold">Positions d'ouverture</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="rts__single__counter">
                <h2 className="fw-bold ms-lg-3 mx-auto heading__color"><span className="counter">1</span>M</h2>
                <p className="h6 mb-0 fw-semibold">Utilisateurs actifs quotidiens</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="rts__single__counter">
                <h2 className="fw-bold ms-lg-3 mx-auto heading__color"><span className="counter">100</span>+</h2>
                <p className="h6 mb-0 fw-semibold">Catégories d'emploi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Fun fact section end */ }

      { /* Pricing section */ }
      <div className="rts__section pt--10">
        <div className="container">
          <div className="row position-relative justify-content-lg-between justify-content-sm-center gap-4 mb-60">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-md-start text-sm-center">
                <h3 className="rts__section__title section__mb">Plan tarifaire</h3>
                <p className="rts__section__desc">À la recherche de votre prochaine opportunité de carrière.</p>
              </div>
            </div>
            <div className="d-flex align-items-end max-content gap-2 position-lg-absolute right-md-0 bottom-md-0">
              <p className="mb-0">Mensuel</p>
              <label htmlFor="pricing__toogle" className="switch">
                <input type="checkbox" name="pricing__toogle" className="pricing__toogle" id="pricing__toogle" />
                <span className="slider round" />
              </label>
              <p className="mb-0">Annuel</p>
            </div>
          </div>
          <div className="monthly__pricing active">
            <div className="row g-30">
              {['Gratuit', 'Basic', 'Standard'].map((plan, index) => (
                <div className="col-lg-5 col-xl-4 col-md-6" key={index}>
                  <div className="rts__pricing__box">
                    <div className="h6 fw-medium lh-1 mb-2 text-primary">{plan}</div>
                    <div className="plan__price lh-1 mb-40">
                      <span className="h2">{index === 0 ? 'Gratuit/' : (index === 1 ? '99$/' : '199$/')}</span>
                      {index === 0 ? 'Mois' : 'An'}
                    </div>
                    <ul className="plan__feature">
                      <li><i className="fa-sharp fa-solid fa-check" /> Accès illimité à +100 Emplois</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> 10+ Emplois en Vedette</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Durée d'emploi pour 30 jours</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Obtenez 10+ emplois</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Essayez gratuitement, pour toujours!</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Emploi Individuel</li>
                    </ul>
                    <a href="#" className="rts__btn pricing__btn  no__fill__btn mt-40">Commencez maintenant</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="yearly__pricing">
            <div className="row g-30">
              {['Gratuit/An', '399$/An', '599$/An'].map((plan, index) => (
                <div className="col-lg-5 col-xl-4 col-md-6" key={index}>
                  <div className="rts__pricing__box">
                    <div className="h6 fw-medium lh-1 mb-2 text-primary">{plan.split('/')[0]}</div>
                    <div className="plan__price lh-1 mb-40">
                      <span className="h2">{plan.split('/')[1]}</span>
                    </div>
                    <ul className="plan__feature">
                      <li><i className="fa-sharp fa-solid fa-check" /> Accès illimité à +100 Emplois</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> 10+ Emplois en Vedette</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Durée d'emploi pour 30 jours</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Obtenez 10+ emplois</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Essayez gratuitement, pour toujours!</li>
                      <li><i className="fa-sharp fa-solid fa-check" /> Emploi Individuel</li>
                    </ul>
                    <a href="#" className="rts__btn pricing__btn  no__fill__btn mt-40">Get Started Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      { /* Pricing section end */ }

      { /* Blog section */ }
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="rts__section__content text-center wow animated fadeIn mb-60">
                <h3 className="rts__section__title section__mb">Lire nos dernières nouvelles</h3>
                <p className="rts__section__desc">Vous êtes à la recherche d'une nouvelle opportunité de carrière ? Ne cherchez pas plus loin.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-lg-start g-30">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="col-lg-6 col-xl-4 col-md-10" key={index}>
                <div className="rts__single__blog">
                  <a href="blog-details.html" className="blog__img">
                    <img src={`assets/img/home-1/blog/${index + 1}.webp`} className="mb-2" alt="blog" />
                  </a>
                  <div className="blog__meta">
                    <div className="blog__meta__info d-flex gap-3 my-3">
                      <span className="d-flex gap-1 align-items-center">
                        <img className="svg" src="assets/img/icon/calender.svg" alt="" /> 20 March, 2022
                      </span>
                      <a href="#" className="d-flex gap-1 align-items-center">
                        <img className="svg" src="assets/img/icon/user.svg" alt="" /> Jon Adom
                      </a>
                    </div>
                    <a href="blog-details.html" className="h6 fw-semibold">Blog Titre {index + 1}</a>
                    <a href="blog-details.html" className="readmore__btn d-flex mt-3 gap-2 align-items-center">
                    Lire la suite <i className="fa-light fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      { /* Blog section end */ }

      <Connexion
        isLoginModalOpen={isLoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isSignupModalOpen={isSignupModalOpen}
        setSignupModalOpen={setSignupModalOpen}
        isForgotPasswordModalOpen={isForgotPasswordModalOpen}
        setForgotPasswordModalOpen={setForgotPasswordModalOpen}
      />
      <Footer />
      <Myscript />
    </>
  );
}