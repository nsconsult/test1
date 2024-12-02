/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import apiService from "../services/apiService";
import Connexion from "@/components/Connexion";
interface JobsCategorie {
  id: number;
  name: string;
};
interface JobList {
  id: number;
  user: {
    created_at: "";
    email: "";
    email_verified: "";
    email_verified_at: "";
    id: "";
    name: "";
    profile: {
      id: "";
      user_id: "";
      first_name: "";
      last_name: "";
      birth_date: "";
      profile_picture_path: "";
    };
  };
  user_id: "";
  title: "";
  description: "";
  category_id: "";
  location: "";
  experience_level: "";
  contract_type: "";
  min_salary: "";
  max_salary: "";
  deadline: "";
}

export default function Home() {
  // const router = useRouter();
  const searchParams = useSearchParams(); // Utilisation de useSearchParams
  const [jobs, setJobs] = useState<JobList[]>([]);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // État pour le chargement
  const [searchTerm, setSearchTerm] = useState<string>(""); // État pour le mot clé de recherche
  const [filteredJobs, setFilteredJobs] = useState<JobList[]>([]); // État pour les jobs filtrés
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [jobsCategorie, setJobsCategorie] = useState<JobsCategorie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // État pour la catégorie sélectionnée
  // const { location, categorie } = router.query;
  useEffect(() => {
    // Simuler le chargement des jobs ou récupérer les données via une API
    // Remplacez ceci par votre logique de chargement
    const fetchJobs = async () => {
      // Ajoutez votre logique ici pour récupérer les jobs
      const fetchedJobs = await fetch("/api/jobs"); // Exemple d'appel API
      const data = await fetchedJobs.json();
      setJobs(data);
      setLoading(false);
    };
    fetchJobs();
  }, []);
  const handleLocationClick = (location: string) => {
    setSelectedLocation(location); // Mettre à jour l'emplacement sélectionné
};
useEffect(() => {
  // Filtrer les jobs en fonction du terme de recherche, de l'emplacement et du type de travail
  const filtered = jobs.filter(job => 
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      // (location ? job.location === location : true) && // Filtrer par emplacement
      // (categorie ? job.category_id === categorie : true) && // Filtrer par type de travail
      (selectedLocation ? job.location === selectedLocation : true) && // Filtrer par emplacement sélectionné
      (selectedCategory !== null ? job.category_id === selectedCategory.toString() : true) // Filtrer par catégorie sélectionnée
  );
  setFilteredJobs(filtered);
}, [searchTerm, selectedLocation, selectedCategory, jobs]); // Dépendances

useEffect(() => {
  // Obtenez les paramètres de recherche de l'URL
  const location = searchParams.get('location') || '';
  const category = searchParams.get('category') || '';

  // Mettez à jour les sélections en fonction des paramètres
  if (location) setSelectedLocation(location);
  if (category) setSelectedCategory(Number(category));
}, [searchParams]); // Écoute les changements des paramètres

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Mettre à jour le mot clé de recherche
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await apiService.getAllResources("job_listings/user");
        const categories = await apiService.getAllResources('job_categories');
        if (!Array.isArray(jobsData)) {
          console.error("jobsData doit être un tableau");
          return [];
        }
        if (Array.isArray(jobsData)) {
          const locations = jobsData.map((job) => job.location);
          const unique = [...new Set(locations)];
          setLocations(unique);
        }
        setLoading(false); // Arrêter le chargement après avoir traité les données
        setJobsCategorie(categories);
        setJobs(jobsData);
      } catch (error) {
        console.error(error);
      }
    };
    loadJobs();
  }, []);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await apiService.getAllResources("job_listings/user");
        setJobs(jobsData);
      } catch (error) {
        console.error(error);
      }
    };
    loadJobs();
  }, []);
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId); // Permet de désélectionner la catégorie
};
  // console.log("Jobs: ", jobs);
  return (
          
    <>
    <Suspense>
      <Css />
      <Header setLoginModalOpen={setLoginModalOpen} />
      {/* xxx */}

      <div>
        {/* breadcrumb area */}
        <div className="rts__section breadcrumb__background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
                <div className="breadcrumb__area max-content breadcrumb__padding z-2">
                  <h1 className="breadcrumb-title h3 mb-3">
                    Liste des emplois
                  </h1>
                  <nav>
                    <ul className="breadcrumb m-0 lh-1">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Accueil</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Liste des emplois
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
                        className="mb-3 font-20 fw-medium text-dark text-capitalize"
                      >
                        Filtrer par Titre
                      </label>
                      <div className="position-relative">
                        <input
                          // className="form-control"
                          type="text"
                          id="search"
                          placeholder="Entrez le titre"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <i className="fa-light fa-magnifying-glass" />
                      </div>
                    </div>
                    {/* job location */}
                    <div className="search__item">
                      <h6 className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        Filtrer par Lieu
                      </h6>
                      <div className="position-relative">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Positions d'emploi</span>
                          

                          <ul className="list">
                <li
                    data-value=""
                    onClick={() => handleLocationClick('')} // Pour "Tous les emplacements"
                    className={`option ${selectedLocation === '' ? 'selected' : ''}`}
                >
                    Tous les emplacements
                </li>
                {locations.map((location, index) => (
                    <li
                        key={index}
                        data-value={location}
                        onClick={() => handleLocationClick(location)}
                        className={`option ${selectedLocation === location ? 'selected' : ''}`} 
                    >
                        {location}
                    </li>
                ))}
            </ul>
            {loading && <p> </p> }
                        </div>
                        <i className="fa-light fa-location-dot" />
                      </div>
                    </div>
                    {/* job category */}
                    <div className="search__item">
                      <h6 className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        Filtrer par catégorie
                      </h6>
                      <div className="position-relative">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Choisir une catégorie</span>
                          <ul className="list">
                            <li
                              data-value=""
                              data-display="-- Selectionner --"
                              className="option selected focus"
                            >
                              Choisir une catégorie
                            </li>
                            {jobsCategorie.map((categorie) => (
                    <li
                        key={categorie.id}
                        data-value={categorie.id}
                        onClick={() => handleCategoryClick(categorie.id)}
                        className={`option ${selectedCategory === categorie.id ? 'selected' : ''}`} 
                    >
                        {categorie.name}
                    </li>
                ))}
                            
                          </ul>
                        </div>
                        <i className="rt-briefcase" />
                      </div>
                    </div>
                    {/* job post time */}
                    {/* <div className="search__item">
                      <h6 className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        Date de publication
                      </h6>
                      <div className="position-relative">
                        
                        <input
                          // className="form-control"
                          type="date"
                          id="search"
                          // placeholder="Entrez le titre"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <i className="fa-light fa-clock" />
                      </div>
                    </div> */}
                    {/* job type */}
                    {/* <div className="search__item">
                      <div className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        Type d'emploi
                      </div>
                      <div className="search__item__list">
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="fulltime"
                              id="fulltime"
                            />
                            <label htmlFor="fulltime">Temps plein</label>
                          </div>
                          <span>(130)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input type="checkbox" name="part" id="part" />
                            <label htmlFor="part">Temps partiel</label>
                          </div>
                          <span>(80)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="temporary"
                              id="temporary"
                            />
                            <label htmlFor="temporary">Stage</label>
                          </div>
                          <span>(150)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="freelance"
                              id="freelance"
                            />
                            <label htmlFor="freelance">Freelance</label>
                          </div>
                          <span>(130)</span>
                        </div>
                      </div>
                    </div> */}
                    {/* experience label */}
                    {/* <div className="search__item">
                      <div className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        expérience Label
                      </div>
                      <div className="search__item__list">
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input type="checkbox" name="5year" id="5year" />
                            <label htmlFor="5year">5 ans</label>
                          </div>
                          <span>(10)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input type="checkbox" name="4year" id="4year" />
                            <label htmlFor="4year">4 ans</label>
                          </div>
                          <span>(15)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input type="checkbox" name="3year" id="3year" />
                            <label htmlFor="3year">3 ans</label>
                          </div>
                          <span>(50)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="fresher"
                              id="fresher"
                            />
                            <label htmlFor="fresher">Débutant</label>
                          </div>
                          <span>(130)</span>
                        </div>
                      </div>
                    </div> */}
                    {/* salary label */}
                    {/* <div className="search__item">
                      <div className="mb-3 font-20 fw-medium text-dark text-capitalize">
                        salaire proposé
                      </div>
                      <div className="search__item__list">
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="under500"
                              id="under500"
                            />
                            <label htmlFor="under500">
                              Moins de 80 000 FCFA
                            </label>
                          </div>
                          <span>(10)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="5000_10000"
                              id="5000_10000"
                            />
                            <label htmlFor="5000_10000">
                              80 000 - 100 000 FCFA
                            </label>
                          </div>
                          <span>(44)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="10000_15000"
                              id="10000_15000"
                            />
                            <label htmlFor="10000_15000">
                              100 000 - 150 000 FCFA
                            </label>
                          </div>
                          <span>(27)</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between list">
                          <div className="d-flex gap-2 align-items-center checkbox">
                            <input
                              type="checkbox"
                              name="15000_20000"
                              id="15000_20000"
                            />
                            <label htmlFor="15000_20000">
                              150 000 - 200 000 FCFA
                            </label>
                          </div>
                          <span>(85)</span>
                        </div>
                      </div>
                    </div> */}
                    {/* <button
                      type="submit"
                      className="rts__btn no__fill__btn max-content mx-auto job__search__btn font-sm"
                      aria-label="Search"
                    >
                      Trouver un emploi
                    </button> */}
                  </form>
                </div>
                {/* job alert */}
                <div className="job__alert job__search__section">
                  <form action="#" className="d-flex flex-column row-35">
                    <div className="search__item">
                      <label
                        htmlFor="alert"
                        className="mb-3 font-20 fw-medium text-dark text-capitalize"
                      >
                        Alerte emploi
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          id="alert"
                          placeholder="Entrez le type d'emploi"
                          required
                        />
                        <i className="fa-light fa-magnifying-glass" />
                      </div>
                    </div>
                    {/* email frequency */}
                    <div className="search__item no-icon">
                      <label
                        htmlFor="frequency"
                        className="mb-3 font-20 fw-medium text-dark text-capitalize"
                      >
                        Fréquence des courriels
                      </label>
                      <div className="position-relative">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Quotidiennement</span>
                          <ul className="list">
                            <li
                              data-value="Nothing"
                              data-display="Daily"
                              className="option selected focus"
                            >
                              Quotidiennement
                            </li>
                            <li data-value={1} className="option">
                              Hebdomadaire
                            </li>
                            <li data-value={2} className="option">
                              Mensuel
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rts__btn fill__btn py-3 rounded-2 job__search"
                      aria-label="Search"
                    >
                      Sauvegarder l'alerte emploi
                    </button>
                  </form>
                </div>
                {/* job alert end */}
              </div>
              <div className="col-lg-7 col-xl-8">
                <div className="top__query mb-40 d-flex flex-wrap gap-4 gap-xl-0 justify-content-between align-items-center">
                  <span className="text-dark font-20 fw-medium">
                    Affichage de 1 à {filteredJobs.length > 0 ? filteredJobs.length : jobs.length} sur {filteredJobs.length > 0 ? filteredJobs.length : jobs.length} résultats
                  </span>
                  <div className="d-flex flex-wrap align-items-center gap-4">
                    <form action="#" className="category-select">
                      <div className="position-relative">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Toutes les catégories</span>
                          <ul className="list">
                            
                            {jobsCategorie.map((categorie) => (
                    <li
                        key={categorie.id}
                        data-value={categorie.id}
                        onClick={() => handleCategoryClick(categorie.id)}
                        className={`option ${selectedCategory === categorie.id ? 'selected' : ''}`} 
                    >
                        {categorie.name}
                    </li>
                ))}
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
                        <i className="rt-hamburger" /> Grille
                      </button>
                      {/* <button
                        className="rts__btn no__fill__btn list-style nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#list"
                      >
                        <i className="rt-list" /> Liste
                      </button> */}
                    </div>
                  </div>
                </div>
                {/* Job Listings */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane grid__style fade show active"
                    role="tabpanel"
                    id="grid"
                  >
                    {filteredJobs.length === 0 && (
                        <p>Aucun emploi trouvé avec ce(s) filtre(s)</p>
                    )}
                    <div className="row g-30">
                      {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job) => (
                        <div
                          className="col-xl-6 col-md-6 col-lg-12"
                          key={job.id}
                        >
                          <div className="rts__job__card">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="company__icon">
                                <img
                                  src={job.user.profile.profile_picture_path}
                                  alt=""
                                />
                              </div>
                              <div className="featured__option"></div>
                            </div>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                              <div className="d-flex gap-1 align-items-center">
                                <i className="fa-light fa-location-dot" />{" "}
                                {job.location}
                              </div>
                              <div className="d-flex gap-1 align-items-center">
                                <i className="fa-light fa-briefcase" />{" "}
                                {job.contract_type}
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
                  <div
                    className="tab-pane fade list__style"
                    role="tabpanel"
                    id="list"
                  >
                    <div className="row g-30">{/* single item */}</div>
                  </div>
                </div>
                {/* Fin de la liste des Emplois */}
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
                      Télécharger gratuitement!
                    </h3>
                    <p className="wow animated fadeInUp" data-wow-delay=".2s">
                      La recherche d'un nouvel emploi peut être à la fois
                      passionnante et décourageante. Naviguer sur le marché du
                      travail implique d'explorer différentes pistes.{" "}
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
      
      {/* xxx */}
      <Footer />
      <Myscript />
      </Suspense>
    </>
    
  );
}
