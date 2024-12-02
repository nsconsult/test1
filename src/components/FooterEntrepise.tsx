"use client"
import { useEffect, useState } from "react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
    return(
      <>
      {isLoading?(
    <div className="loader-wrapper">
    <div className="loader"></div>
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div>
  ):('')}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header p-0 mb-5 mt-4">
          <a href="index-2.html" className="offcanvas-title" id="offcanvasLabel">
            <img src="/assets/img/logo/header__one.png" alt="logo" />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        {/* login offcanvas */}
        <div className="mb-4 d-block d-sm-none">
          <div className="header__right__btn d-flex justify-content-center gap-3">
            <a
              href="#"
              className="small__btn no__fill__btn border-6 font-xs"
              aria-label="Login Button"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              {" "}
              <i className="rt-login" />
              Sign In
            </a>
            <a
              href="#"
              className="small__btn d-xl-flex fill__btn border-6 font-xs"
              aria-label="Job Posting Button"
            >
              Add Job
            </a>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div className="rts__offcanvas__menu overflow-hidden">
            <div className="offcanvas__menu" />
          </div>
          <p className="max-auto font-20 fw-medium text-center text-decoration-underline mt-4">
            Our Social Links
          </p>
          <div className="rts__social d-flex justify-content-center gap-3 mt-3">
            <a target="_blank" href="https://facebook.com/" aria-label="facebook">
              <i className="fa-brands fa-facebook" />
            </a>
            <a target="_blank" href="https://instagram.com/" aria-label="instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a target="_blank" href="https://linkedin.com/" aria-label="linkedin">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a target="_blank" href="https://pinterest.com/" aria-label="pinterest">
              <i className="fa-brands fa-pinterest" />
            </a>
            <a target="_blank" href="https://youtube.com/" aria-label="youtube">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      {/* THEME PRELOADER START */}
      
      {/* THEME PRELOADER END */}
      <button type="button" className="rts__back__top" id="rts-back-to-top">
        <i className="fas fa-arrow-up" />
      </button>
    </>
    
    )
}