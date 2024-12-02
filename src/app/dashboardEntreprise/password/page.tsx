"use client";
import React, { useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderEntreprise";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarEntreprise";
import apiService from "@/app/services/apiService";

export default function Home() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [user,setUser]=useState({
    id: "",
  name: "",
  email: "",
  role: "",
  });
  useEffect(() => {
    const laodUser = async () => {
      try {
          const userData = await apiService.getAllResources('users/auth');
          setUser({
            id:userData.id,
            name: userData.name,
  email: userData.email,
  role: userData.role
          });
          console.log(userData);
      } catch (error) {
        console.error(error);
      }
    };
  
    laodUser();
  },[]);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSavePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!passwordData.newPassword) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage("Le mot de passe ne correspond pas.");
      return;
    }

    try {
      const response = await apiService.updateResource(`users`, user.id, {
        password_confirmation: passwordData.newPassword,
        password: passwordData.newPassword,
      });

      if (response.success) {
        setSuccessMessage("Mot de passe mis à jour avec succès.");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        setErrorMessage("Échec de la mise à jour du mot de passe.");
      }
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de la mise à jour."+error);
    }
  };

  return (
    <>
      <Css />
      <Header />
      {/* xxx */}
      <div className="template-dashboard">
        <div className="dashboard__content d-flex">
          <Sidebar />
          <div className="dashboard__right">
            <div className="dash__content ">
              {/* sidebar menu */}
              <div className="sidebar__menu d-md-block d-lg-none">
                <div className="sidebar__action">
                  <i className="fa-sharp fa-regular fa-bars" /> Sidebar
                </div>
              </div>
              {/* sidebar menu end */}
              <div className="candidate__passwordchange">
                <h6 className="mb-3">Changer le mot de passe</h6>
                <div className="change__password">
                  <div className="password__change__form">
                    <h6 className="text-center fw-semibold mb-30">
                      Mot de passe
                    </h6>
                    <form onSubmit={handleSavePassword}>
                      
                      {successMessage && (
                          <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {successMessage}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div></>
                      
                      )}
                      {errorMessage && (
                          <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {errorMessage}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div></>
                      
                      )}
                      
                      {/* single item */}
                      {/* <div className="rts-input-group">
                        <label htmlFor="currentPassword">
                          Current Password
                        </label>
                        <div className="input-box">
                          <input
                            className="bg-light"
                            type="password"
                            name="currentPassword"
                            id="currentPassword"
                            placeholder="Entrez votre mot de passe actuel"
                            value={passwordData.currentPassword}
                            onChange={handleInputChange}
                          />
                          <svg
                            className="password__icon"
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.4 17.7977C9.4 18.1159 9.27357 18.4211 9.04853 18.6462C8.82348 18.8712 8.51826 18.9977 8.2 18.9977C7.88174 18.9977 7.57652 18.8712 7.35147 18.6462C7.12643 18.4211 7 18.1159 7 17.7977C7 17.4794 7.12643 17.1742 7.35147 16.9491C7.57652 16.7241 7.88174 16.5977 8.2 16.5977C8.51826 16.5977 8.82348 16.7241 9.04853 16.9491C9.27357 17.1742 9.4 17.4794 9.4 17.7977ZM14.2 17.7977C14.2 18.1159 14.0736 18.4211 13.8485 18.6462C13.6235 18.8712 13.3183 18.9977 13 18.9977C12.6817 18.9977 12.3765 18.8712 12.1515 18.6462C11.9264 18.4211 11.8 18.1159 11.8 17.7977C11.8 17.4794 11.9264 17.1742 12.1515 16.9491C12.3765 16.7241 12.6817 16.5977 13 16.5977C13.3183 16.5977 13.6235 16.7241 13.8485 16.9491C14.0736 17.1742 14.2 17.4794 14.2 17.7977ZM19 17.7977C19 18.1159 18.8736 18.4211 18.6485 18.6462C18.4235 18.8712 18.1183 18.9977 17.8 18.9977C17.4817 18.9977 17.1765 18.8712 16.9515 18.6462C16.7264 18.4211 16.6 18.1159 16.6 17.7977C16.6 17.4794 16.7264 17.1742 16.9515 16.9491C17.1765 16.7241 17.4817 16.5977 17.8 16.5977C18.1183 16.5977 18.4235 16.7241 18.6485 16.9491C18.8736 17.1742 19 17.4794 19 17.7977Z"
                              fill="black"
                            />
                            <path
                              d="M11.8 24.9976H8.2C4.8064 24.9976 3.1084 24.9976 2.0548 23.9428C1 22.8892 1 21.1912 1 17.7976C1 14.404 1 12.706 2.0548 11.6524C3.1084 10.5976 4.8064 10.5976 8.2 10.5976H17.8C21.1936 10.5976 22.8916 10.5976 23.9452 11.6524C25 12.706 25 14.404 25 17.7976C25 21.1912 25 22.8892 23.9452 23.9428C22.8916 24.9976 21.1936 24.9976 17.8 24.9976H16.6M5.8 10.5976V8.19763C5.8 7.78963 5.8336 7.38763 5.8996 6.99763M19.9732 6.39763C19.6465 5.13602 18.9836 3.98667 18.0552 3.07204C17.1269 2.15742 15.9678 1.51177 14.7014 1.2039C13.4351 0.896023 12.1089 0.937454 10.8643 1.32378C9.61961 1.7101 8.50307 2.42684 7.6336 3.39763"
                              stroke="#939393"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div> */}
                      {/* single item end */}
                      {/* single item */}
                      <div className="rts-input-group">
                        <label htmlFor="currentPassword">Nouveau Mot de Passe</label>
                        <div className="input-box">
                          <input
                            className="bg-light"
                            type="password"
                            name="newPassword"
                            id="Newpassword"
                            placeholder="Entrez votre nouveau mot de passe"
                            value={passwordData.newPassword}
                            onChange={handleInputChange}
                          />
                          <svg
                            className="password__icon"
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.4 17.7977C9.4 18.1159 9.27357 18.4211 9.04853 18.6462C8.82348 18.8712 8.51826 18.9977 8.2 18.9977C7.88174 18.9977 7.57652 18.8712 7.35147 18.6462C7.12643 18.4211 7 18.1159 7 17.7977C7 17.4794 7.12643 17.1742 7.35147 16.9491C7.57652 16.7241 7.88174 16.5977 8.2 16.5977C8.51826 16.5977 8.82348 16.7241 9.04853 16.9491C9.27357 17.1742 9.4 17.4794 9.4 17.7977ZM14.2 17.7977C14.2 18.1159 14.0736 18.4211 13.8485 18.6462C13.6235 18.8712 13.3183 18.9977 13 18.9977C12.6817 18.9977 12.3765 18.8712 12.1515 18.6462C11.9264 18.4211 11.8 18.1159 11.8 17.7977C11.8 17.4794 11.9264 17.1742 12.1515 16.9491C12.3765 16.7241 12.6817 16.5977 13 16.5977C13.3183 16.5977 13.6235 16.7241 13.8485 16.9491C14.0736 17.1742 14.2 17.4794 14.2 17.7977ZM19 17.7977C19 18.1159 18.8736 18.4211 18.6485 18.6462C18.4235 18.8712 18.1183 18.9977 17.8 18.9977C17.4817 18.9977 17.1765 18.8712 16.9515 18.6462C16.7264 18.4211 16.6 18.1159 16.6 17.7977C16.6 17.4794 16.7264 17.1742 16.9515 16.9491C17.1765 16.7241 17.4817 16.5977 17.8 16.5977C18.1183 16.5977 18.4235 16.7241 18.6485 16.9491C18.8736 17.1742 19 17.4794 19 17.7977Z"
                              fill="black"
                            />
                            <path
                              d="M11.8 24.9976H8.2C4.8064 24.9976 3.1084 24.9976 2.0548 23.9428C1 22.8892 1 21.1912 1 17.7976C1 14.404 1 12.706 2.0548 11.6524C3.1084 10.5976 4.8064 10.5976 8.2 10.5976H17.8C21.1936 10.5976 22.8916 10.5976 23.9452 11.6524C25 12.706 25 14.404 25 17.7976C25 21.1912 25 22.8892 23.9452 23.9428C22.8916 24.9976 21.1936 24.9976 17.8 24.9976H16.6M5.8 10.5976V8.19763C5.8 7.78963 5.8336 7.38763 5.8996 6.99763M19.9732 6.39763C19.6465 5.13602 18.9836 3.98667 18.0552 3.07204C17.1269 2.15742 15.9678 1.51177 14.7014 1.2039C13.4351 0.896023 12.1089 0.937454 10.8643 1.32378C9.61961 1.7101 8.50307 2.42684 7.6336 3.39763"
                              stroke="#939393"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* single item end */}
                      {/* single item */}
                      <div className="rts-input-group">
                        <label htmlFor="currentPassword">Confirmer le Mot de Passe</label>
                        <div className="input-box">
                          <input
                            className="bg-light"
                            type="password"
                            name="confirmPassword"
                            id="Retypepassword"
                            placeholder="Enter your Retype password"
                            value={passwordData.confirmPassword}
                            onChange={handleInputChange}
                          />
                          <svg
                            className="password__icon"
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.4 17.7977C9.4 18.1159 9.27357 18.4211 9.04853 18.6462C8.82348 18.8712 8.51826 18.9977 8.2 18.9977C7.88174 18.9977 7.57652 18.8712 7.35147 18.6462C7.12643 18.4211 7 18.1159 7 17.7977C7 17.4794 7.12643 17.1742 7.35147 16.9491C7.57652 16.7241 7.88174 16.5977 8.2 16.5977C8.51826 16.5977 8.82348 16.7241 9.04853 16.9491C9.27357 17.1742 9.4 17.4794 9.4 17.7977ZM14.2 17.7977C14.2 18.1159 14.0736 18.4211 13.8485 18.6462C13.6235 18.8712 13.3183 18.9977 13 18.9977C12.6817 18.9977 12.3765 18.8712 12.1515 18.6462C11.9264 18.4211 11.8 18.1159 11.8 17.7977C11.8 17.4794 11.9264 17.1742 12.1515 16.9491C12.3765 16.7241 12.6817 16.5977 13 16.5977C13.3183 16.5977 13.6235 16.7241 13.8485 16.9491C14.0736 17.1742 14.2 17.4794 14.2 17.7977ZM19 17.7977C19 18.1159 18.8736 18.4211 18.6485 18.6462C18.4235 18.8712 18.1183 18.9977 17.8 18.9977C17.4817 18.9977 17.1765 18.8712 16.9515 18.6462C16.7264 18.4211 16.6 18.1159 16.6 17.7977C16.6 17.4794 16.7264 17.1742 16.9515 16.9491C17.1765 16.7241 17.4817 16.5977 17.8 16.5977C18.1183 16.5977 18.4235 16.7241 18.6485 16.9491C18.8736 17.1742 19 17.4794 19 17.7977Z"
                              fill="black"
                            />
                            <path
                              d="M11.8 24.9976H8.2C4.8064 24.9976 3.1084 24.9976 2.0548 23.9428C1 22.8892 1 21.1912 1 17.7976C1 14.404 1 12.706 2.0548 11.6524C3.1084 10.5976 4.8064 10.5976 8.2 10.5976H17.8C21.1936 10.5976 22.8916 10.5976 23.9452 11.6524C25 12.706 25 14.404 25 17.7976C25 21.1912 25 22.8892 23.9452 23.9428C22.8916 24.9976 21.1936 24.9976 17.8 24.9976H16.6M5.8 10.5976V8.19763C5.8 7.78963 5.8336 7.38763 5.8996 6.99763M19.9732 6.39763C19.6465 5.13602 18.9836 3.98667 18.0552 3.07204C17.1269 2.15742 15.9678 1.51177 14.7014 1.2039C13.4351 0.896023 12.1089 0.937454 10.8643 1.32378C9.61961 1.7101 8.50307 2.42684 7.6336 3.39763"
                              stroke="#939393"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* single item end */}
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="rts__btn fill__btn">
                        Mettre à jour 
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-30">
              <p className="copyright">
                Copyright © 2024 All Rights Reserved by jobpath
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* xxx */}
      <Footer />
      <Myscript />
    </>
  );
}
