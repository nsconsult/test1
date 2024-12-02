/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import apiService from "@/app/services/apiService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface Profile {
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
}
export default function Header(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const router=useRouter();
  const [, setProfile] = useState<Profile[]>([]);
  const [updateProfile, setupdateProfile] = useState({
    id: "",
    user_id: "",
    name: "",
    email: "",
    birth_date: "",
    phone: "",
    address: "",
    profile_picture_path: "",
    education: "",
    experience: "",
    skills: "",
    website: "",
    founded_date: "",
    company_size: "",
    company_categories: "",
    public_profile_view: "",
    description: "",
    photo: "",
    facebook: "",
    linkedin: "",
    behance: "",
    dribbble: "",
    country: "",
    state: "",
    postal_code: "",
    latitude: "",
    longitude: "",
  });
  useEffect(()=>{
    const loadProfile = async () => {
      try {
        const jobsData = await apiService.getAllResources("user_profiles");
        // console.log(jobsData[0]);
  
  
        // const filteredJobs = jobsData.filter((job: { user_id: number; }) => job.user_id === userId);
        setProfile(jobsData[0]);
        // console.log(filteredJobs);
        setupdateProfile({
          id: jobsData[0].id,
          user_id: jobsData[0].user.id,
          name: jobsData[0].user.name,
          email: jobsData[0].user.email,
          birth_date: "",
          phone: jobsData[0].phone,
          address: jobsData[0].address,
          profile_picture_path: jobsData[0].profile_picture_path,
          education: "",
          experience: "",
          skills: "",
          website: jobsData[0].website,
          founded_date: jobsData[0].founded_date,
          company_size: jobsData[0].company_size,
          company_categories: jobsData[0].company_categories,
          public_profile_view: jobsData[0].public_profile_view,
          description: jobsData[0].description,
          photo: jobsData[0].photo,
          facebook: jobsData[0].facebook,
          linkedin: jobsData[0].linkedin,
          behance: jobsData[0].behance,
          dribbble: jobsData[0].dribbble,
          country: jobsData[0].country,
          state: jobsData[0].state,
          postal_code: jobsData[0].postal_code,
          latitude: jobsData[0].latitude,
          longitude: jobsData[0].longitude,
        });
      } catch (error) {
        console.error(error);
      }
    };
    loadProfile();
  },[]);
  async function handleLogout(event:any) {
    event.preventDefault();

    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to log out');
    }
  }
    return(
      <>
      {isLoading?(
        <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
      ):('')}
      <header className="rts__section rts__dashboard__header position-fixed w-100">
      <div className="container-fluid g-0">
        <div className="rts__menu__background mw-100 px-20 mobile__padding rounded-0">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <div className="rts__logo">
                <a href="/">
                  <img
                    className="logo__image"
                    src="/assets/img/logo/header__one.png"
                    width={160}
                    height={40}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="navigation d-none d-lg-block">
                <nav className="navigation__menu" id="offcanvas__menu">
                  <ul className="list-unstyled">
                    <li className="navigation__menu--item has-child">
                      <Link href="/" className="navigation__menu--item__link" replace>
                        Accueil
                      </Link>
                      
                    </li>
                    <li className="navigation__menu--item has-child">
                      <Link href="/jobs" className="navigation__menu--item__link" replace>
                      Emplois
                      </Link>
                      
                    </li>
                    <li className="navigation__menu--item has-child">
                      <Link href="/employers" className="navigation__menu--item__link" replace>
                      Employeurs
                      </Link>
                    
                    </li>
                    <li className="navigation__menu--item has-child ">
                      <Link href="/candidats" className="navigation__menu--item__link" replace>
                        Candidats
                      </Link>
                      
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a href="" className="navigation__menu--item__link">
                        Pages
                      </a>
                      <ul className="submenu sub__style" role="menu">
                        <li role="menuitem" className="has-child has-arrow">
                          <Link href="/blog" replace>Blog</Link>
                        </li>
                        <li role="menuitem">
                          <Link href="/about" replace>A propos</Link>
                        </li>
                        <li role="menuitem">
                          <Link href="/faq" replace>Faq</Link>
                        </li>
                        <li role="menuitem">
                          <Link href="/tos" replace>Terms &amp; Conditions</Link>
                        </li>
                        <li role="menuitem">
                          <Link href="/privacy" replace>Privacy Policy</Link>
                        </li>
                        <li role="menuitem">
                          <Link href="/pricing" replace>Pricing</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item has-child ">
                      <Link href="/contact" className="navigation__menu--item__link" replace>
                        Contact
                      </Link>
                      
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center">
                <div className="header__right__btn d-flex align-items-center gap-30">
                  
                  <div className="user__info ">
                    <div
                      className="d-flex gap-3 align-items-center pointer"
                      data-bs-toggle="dropdown"
                    >
                      <div className="user__image if__employer">
                        <img
                          className="rounded-5"
                          width={48}
                          height={48}
                          src={updateProfile.profile_picture_path}
                          alt=""
                        />
                      </div>
                      <div className="user__name d-none d-xl-block">
                        <h6 className="font-20 mb-1 text-capitalize fw-medium lh-sm">
                        {updateProfile.name}
                        </h6>
                        <span></span>
                      </div>
                      <div className="dropdown__option d-none d-xl-block">
                        <div className="dropdown__icon ">
                          <i className="fa-light fa-chevron-down" />
                        </div>
                      </div>
                    </div>
                    <ul className="rts__dropdown dropdown-menu top-25">
                      {/* <li>
                        <a className="dropdown-item" href="employer-dashboard.html">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-profile.html"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-alert.html"
                        >
                          Job Alert
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-shortlist.html"
                        >
                          Shortlist Job
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-package.html"
                        >
                          Packages
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-message.html"
                        >
                          Message
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-passwordchange.html"
                        >
                          Change Password
                        </a>
                      </li> */}
                      <li>
                        <a onClick={handleLogout} className="dropdown-item" href="#">
                          se deconnecter
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="dropdown-item"
                          href="employer-dash-deleteprofile.html"
                        >
                          Delete Account
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <Link
                    href="/dashboardEntreprise/job"
                    className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                    aria-label="Job Posting Button"
                    replace
                  >
                    Ajouter un emploi
                  </Link>
                  <button
                    className="d-md-block d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas"
                    aria-controls="offcanvas"
                  >
                    <i className="fa-sharp fa-regular fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>    
    </>
    )
}
