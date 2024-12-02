/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FormEvent } from 'react'
import { BASE_URL } from '@/app/services/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify'; // Importer ToastContainer et toast
import 'react-toastify/dist/ReactToastify.css'; // Les styles de react-toastify

const API_URL = BASE_URL;

interface ConnexionProps {
  isLoginModalOpen: boolean;
  setLoginModalOpen: (isOpen: boolean) => void;
  isSignupModalOpen: boolean;
  setSignupModalOpen: (isOpen: boolean) => void;
  isForgotPasswordModalOpen: boolean;
  setForgotPasswordModalOpen: (isOpen: boolean) => void;
}

export default function Connexion({
  isLoginModalOpen,
  setLoginModalOpen,
  isSignupModalOpen,
  setSignupModalOpen,
  isForgotPasswordModalOpen,
  setForgotPasswordModalOpen,
}: ConnexionProps) {
  const router = useRouter();
  const [role, setRole] = useState<number>(2);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // État pour le chargement

  const handleOpenSignup = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const handleOpenForgotPassword = () => {
    setLoginModalOpen(false);
    setForgotPasswordModalOpen(true);
  };

  function handleRole(selectedRole: number) {
    setRole(selectedRole);
  }

  async function handelSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setErro(null);
    setIsLoading(true); // Démarrer le chargement
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const roled = String(role);
    
    const response = await fetch(API_URL + "auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role: roled }),
    });

    setIsLoading(false); // Arrêter le chargement après la réponse

    if (response.ok) {
      toast.success("Inscription réussie! \n Veuillez vous connecter", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      
      setSignupModalOpen(false);
      setLoginModalOpen(true);
    } else {
      const data = await response.json();
      setError(data.password);
      setErro(data.email);
      console.log(data);
    }
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true); // Démarrer le chargement
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    setIsLoading(false); // Arrêter le chargement après la réponse

    if (response.ok) {
      const data = await response.json();
      const user = data.user;
      redirectToDashboard(parseInt(user.role));
    } else {
      const data = await response.json();
      setError(data.error);
      console.log(data.error);
    }
  }

  async function handlePasswordReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setInfo(null);
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    const response = await fetch(API_URL + 'password/recover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      setInfo(data.status);
    } else {
      const data = await response.json();
      setError(data.Erreur);
      console.log(data);
    }
  }

  const redirectToDashboard = (role: number) => {
    switch (role) {
      case 1:
        router.push('/dashboardAdmin');
        break;
      case 2:
        router.push('/jobs');
        break;
      case 3:
        router.push('/dashboardEntreprise');
        break;
      case 4:
        router.push('/dashboardEducation');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <>
      {/* Modal de connexion */}
      {isLoginModalOpen && (
        <div className="modal similar__modal fade show" style={{ display: "block" }} id="loginModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="max-content similar__form form__padding">
                <div className="d-flex mb-3 align-items-center justify-content-between">
                  <h6 className="mb-0">Se connecter à Tépé</h6>
                  <button type="button" onClick={() => setLoginModalOpen(false)} aria-label="Close">
                    <i className="fa-regular fa-xmark text-primary" />
                  </button>
                </div>
                <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                  <div className="form-group">
                    <label htmlFor="email" className="fw-medium text-dark mb-3">Votre Email</label>
                    <div className="position-relative">
                      <input className="form-control text-black" type="email" name="email" id="email" placeholder="Enter your email" required />
                      <i className="fa-light fa-user icon" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="fw-medium text-dark mb-3">Mot de Passe</label>
                    <div className="position-relative">
                      <input className="form-control text-black" type="password" name="password" id="password" placeholder="Enter your password" required />
                      <i className="fa-light fa-lock icon" />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center fw-medium">
                    <div className="form-check">
                      <input className="form-control form-check-input" type="checkbox" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">Souvenez-vous de moi</label>
                    </div>
                    <a href="#" onClick={handleOpenForgotPassword} className="forgot__password text-para">Mot de Passe Oublié?</a>
                  </div>
                  {error && <p className="text-danger mb-4">{error}</p>}
                  <div className="form-group my-3">
                    <button type="submit" className="rts__btn w-100 fill__btn">Login</button>
                  </div>
                </form>
                <div className="d-block has__line text-center"><p>Ou</p></div>
                <div className="d-flex gap-4 flex-wrap justify-content-center mt-20 mb-20">
                  <div className="is__social google">
                    <button>
                      <img src="assets/img/icon/google-small.svg" alt="" /> Continuer avec Google
                    </button>
                  </div>
                  <div className="is__social facebook">
                    <button>
                      <img src="assets/img/icon/facebook-small.svg" alt="" /> Continuer avec Facebook
                    </button>
                  </div>
                </div>
                <span className="d-block text-center fw-medium">
                  Vous n'avez pas de compte?{" "}
                  <a href="#" onClick={handleOpenSignup} className="text-primary">Inscrivez-vous!</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'inscription */}
      {isSignupModalOpen && (
        <div className="modal similar__modal fade show" style={{ display: "block" }} id="signupModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="max-content similar__form form__padding">
                <div className="d-flex mb-3 align-items-center justify-content-between">
                  <h6 className="mb-0">Créer un compte Gratuit</h6>
                  <button type="button" onClick={() => setSignupModalOpen(false)} aria-label="Close">
                    <i className="fa-regular fa-xmark text-primary" />
                  </button>
                </div>
                <div className="tab__switch flex-wrap flex-sm-nowrap nav-tab mt-30 mb-30">
                  <button
                    onClick={() => handleRole(2)}
                    className={`rts__btn nav-link ${role === 2 ? 'active' : ''}`}
                  >
                    <i className="fa-light fa-user" />
                    Candidat
                  </button>
                  <button
                    onClick={() => handleRole(3)}
                    className={`rts__btn nav-link ${role === 3 ? 'active' : ''}`}
                  >
                    <i className="rt-briefcase" /> Employeur
                  </button>
                </div>
                <form onSubmit={handelSignup} className="d-flex flex-column gap-3">
                  <div className="form-group">
                    <label htmlFor="name" className="fw-medium text-dark mb-3">Votre Nom</label>
                    <div className="position-relative">
                      <input className='form-control' type="text" name="name" id="name" placeholder="Candidate" required />
                      <i className="fa-light fa-user icon" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="fw-medium text-dark mb-3">Votre Email</label>
                    <div className="position-relative">
                      <input className='form-control' type="email" name="email" id="email" placeholder="Enter your email" required />
                      {erro && <p className="text-danger mb-4">{erro}</p>}
                      <i className="fa-sharp fa-light fa-envelope icon" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="fw-medium text-dark mb-3">Mot de Passe</label>
                    <div className="position-relative">
                      <input className='form-control' type="password" name="password" id="password" placeholder="Enter your password" required />
                      {error && <p className="text-danger mb-4">{error}</p>}
                      <i className="fa-light fa-lock icon" />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    <button type="submit" className="rts__btn w-100 fill__btn">S'inscrire</button>
                  </div>
                </form>
                <div className="d-block has__line text-center"><p>Or</p></div>
                <div className="d-flex flex-wrap justify-content-center gap-4 mt-20 mb-20">
                  <div className="is__social google">
                    <button>
                      <img src="assets/img/icon/google-small.svg" alt="" /> Continuer avec Google
                    </button>
                  </div>
                  <div className="is__social facebook">
                    <button>
                      <img src="assets/img/icon/facebook-small.svg" alt="" /> Continuer avec Facebook
                    </button>
                  </div>
                </div>
                <span className="d-block text-center fw-medium">
                  Vous avez un compte?{" "}
                  <a href="#" onClick={() => {
                    setSignupModalOpen(false);
                    setLoginModalOpen(true);
                  }} className="text-primary">Connexion</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Réinitialisation de Mot de Passe */}
      {isForgotPasswordModalOpen && (
        <div className="modal similar__modal fade show" style={{ display: "block" }} id="forgotModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="max-content similar__form form__padding">
                <div className="d-flex mb-3 align-items-center justify-content-between">
                  <h6 className="mb-0">Mot de Passe Oublié</h6>
                  <button type="button" onClick={() => setForgotPasswordModalOpen(false)} aria-label="Close">
                    <i className="fa-regular fa-xmark text-primary" />
                  </button>
                </div>
                <form onSubmit={handlePasswordReset} className="d-flex flex-column gap-3">
                  <div className="form-group">
                    <label htmlFor="fmail" className="fw-medium text-dark mb-3">Votre Email</label>
                    <div className="position-relative">
                      <input className='form-control' type="email" name="email" id="fmail" placeholder="Entrez votre email" required />
                      <i className="fa-sharp fa-light fa-envelope icon" />
                    </div>
                  </div>
                  <div className="form-group my-3">
                    {error && <p className="text-danger mb-4">{error}</p>}
                    {info && <p className="text-success mb-4">{info}</p>}
                    <button className="rts__btn w-100 fill__btn">Réinitialiser Mot de Passe</button>
                  </div>
                </form>
                <span className="d-block text-center fw-medium">
                  Vous Rappelez-vous du Mot de Passe?{" "}
                  <a href="#" onClick={() => {
                    setForgotPasswordModalOpen(false);
                    setLoginModalOpen(true);
                  }} className="text-primary">Connectez-vous</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Veuillez patienter...</span>
            </div>
            <p>Veuillez patienter...</p>
          </div>
        </div>
      )}

      {/* Conteneur d'alertes Toast */}
      <ToastContainer 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }} 
      toastStyle={{
        width: '400px',
        fontSize: '18px',
        textAlign: 'center',
      }}
      />
    </>
  );
}