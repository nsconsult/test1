/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Button, notification } from 'antd';
import Css from "@/components/Css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Myscript from "@/components/Script";
import apiServices from "@/app/services/apiService";
import Modal from "react-modal";
import Connexion from "@/components/Connexion";
import apiService, { BASE_URL, user_token } from "@/app/services/apiService";
import "react-quill/dist/quill.snow.css";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify"; // Importer ToastContainer et toast
import "react-toastify/dist/ReactToastify.css"; // Les styles de react-toastify

interface Jobs {
  id: number;
  title?: string;
  description?: string;
  category_id?: string;
  location?: string;
  experience_level?: string;
  contract_type?: string;
  min_salary?: string;
  max_salary?: string;
  deadline?: string;
  created_at?: EpochTimeStamp;
}


export default function Home({ params }: { params: { id: string } }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] =
    useState(false);
  const [jobsData, setJobsData] = useState<Jobs | null>(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [resume_path, setResume_path] = useState("");
  const [error, setError] = useState("");
  const id = params.id;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [user, setUser] = useState({ id: "", name: "", email: "", role: "" });

  const notificationTypes = ['success', 'error', 'info', 'warning'] as const; // Types de notification disponibles

  type NotificationType = (typeof notificationTypes)[number]; // Utilisation de l'union de type
  
  const openNotification = (type: NotificationType, message: string) => {
    notification[type]({
      message: message,
      duration: 3, // Délai de 3 secondes
    });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await apiService.getAllResources("users/auth");
        setUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
        });
        // console.log("Utilisateur: ", userData);
      } catch (error) {
        console.error("Aucun utilisateur connecté");
      }
    };
    loadUser();
  }, []);
  const formatTimestampToDate = (timestamp: any) => {
    const date = new Date(timestamp); // Assurez-vous que `timestamp` est en millisecondes
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
  
    if (selectedFile) {
      setFile(selectedFile);
      
      // Appel à handleUpload après une mise à jour de l'état
      handleUpload(selectedFile);
    }
  };
  
  const handleUpload = async (file: File) => {
    if (!file) {
      setError("Veuillez sélectionner un fichier !");
      return;
    }
  
    // Vérifiez le type de fichier
    if (file.type !== "application/pdf") {
      setError("Veuillez télécharger un fichier PDF.");
      return;
    }
  
    // Vérifiez la taille du fichier (2 Mo)
    if (file.size > 2 * 1024 * 1024) {
      setError("Le fichier ne doit pas dépasser 2 Mo.");
      return;
    }
  
    setError(""); // Réinitialiser l'erreur si tout est bon
    // Traitement du fichier (si nécessaire)
    // console.log("Fichier valide :", file);
  
    const formData = new FormData();
    formData.append("file", file);
    // console.log("Fichier téléversé: " + file.name);
  
    const response = await fetch("/api/image", {
      method: "POST",
      body: formData,
    });
  
    const result = await response.json();
    if (result.success) {
      // console.log("Résultat : ", result);
      openNotification('success', "Fichier téléversé avec succès !");
      setResume_path(result.path);
    } else {
      console.log("Upload failed");
    }
  };
  if (resume_path) {
    // console.log("resume path", resume_path);
  }

  const handleEditorChange = (content: any) => {
    setContent(content);
  };

  const handleApplication = async () => {
    if (user.role == "2") {
      const response = await fetch(BASE_URL + "applications", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_listing_id: id,
          user_id: user.id,
          cover_letter: content,
          resume_path: resume_path,
        }),
      });
      if (response.ok) {
        // alert("Vous avez postulé avec succès à cette offre. Rendez-vous sur votre tableau de bord pour voir la candidature et la suivre.");
        openNotification('success', "Vous avez postulé avec succès !");
        setModalIsOpen(false);
      } else {
        // Handle errors
      }
    } else if (user.role == "1") {
      toast.error(
        "Vous n'êtes pas autorisé à postuler en tant qu'administrateur \n Veuillez vous connecter comme utilisateur pour postuler",
        {
          position: "top-center", // Centrer la notification en haut
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        }
      );
      return;
    } else if (user.role == "3") {
      toast.error(
        "Vous n'êtes pas autorisé à postuler en tant qu'entreprise \n Veuillez vous connecter comme utilisateur pour postuler",
        {
          position: "top-center", // Centrer la notification en haut
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          closeButton: <button onClick={() => toast.dismiss()}>Fermer</button>,
        }
      );
      return;
    } else if (user.role == "4") {
      toast.error(
        "Vous n'êtes pas autorisé à postuler en tant qu'institution éducative \n Veuillez vous connecter comme utilisateur pour postuler",
        {
          position: "top-center", // Centrer la notification en haut
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          closeButton: <button onClick={() => toast.dismiss()}>Fermer</button>,
        }
      );
      return;
    }
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await apiServices.getResourceById("job_listings", id);
        setJobsData(jobsData);
      } catch (error) {
        console.error(error);
      }
    };
    loadJobs();
  }, [id]);

  // console.log("Jobs data :", jobsData);
  // console.log("Upload ok : ",  file?.name);

  return (
    <>
      <Css />
      <Header setLoginModalOpen={setLoginModalOpen} />
      <div>
        {/* breadcrumb area */}
        <div className="rts__section breadcrumb__background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
                <div className="breadcrumb__area max-content breadcrumb__padding">
                  <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center">
                    <div className="d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                      <div className="company__icon rounded-2 bg-white">
                        <img src="assets/img/home-1/company/apple.svg" alt="" />
                      </div>
                      <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2">
                        <h3 className="job__title h3 mb-0">
                          {jobsData?.title}
                        </h3>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2">
                          <div className="d-flex gap-2 align-items-center">
                            <i className="fa-light fa-location-dot" />{" "}
                            {jobsData?.location}
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <i className="fa-light rt-briefcase" />{" "}
                            {jobsData?.contract_type}
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <i className="fa-light fa-clock" /> Depuis le{" "}
                            {formatTimestampToDate(jobsData?.created_at)}
                          </div>
                          <div className="d-flex gap-2 fw-medium align-items-center">
                            <i className="fa-light rt-price-tag" />{" "}
                            {jobsData?.min_salary} - {jobsData?.max_salary} FCFA
                            /Mois
                          </div>
                        </div>
                        <div className="job__tags d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
                          <a href="#">Creative</a>
                          <a href="#">User Interface</a>
                          <a href="#">Web UI</a>
                        </div>
                      </div>
                    </div>
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
          {/* Job details content here... */}
          <div className="container">
            <div className="row g-30">
              <div className="col-lg-8">
                <div className="rts__job__details">
                  <div className="rts__tab active__link mb-30">
                    <nav>
                      <div className="nav nav-tabs">
                        <a className="nav-link active" href="#all">
                          Tous
                        </a>
                        <a className="nav-link" href="#description">
                          Description
                        </a>
                        <a className="nav-link" href="#responsibility">
                          Responsabilités
                        </a>
                        <a className="nav-link" href="#requirements">
                          Exigences
                        </a>
                        <a className="nav-link" href="#skill">
                          Compétences et Expérience
                        </a>
                        <a className="nav-link" href="#salary">
                          Salaire et avantages
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div id="description" className="mb-30">
                    <h6 className="fw-semibold mb-20">
                      Description de l'emploi
                    </h6>
                    <p>{jobsData?.description}</p>
                  </div>
                  {/* Additional details sections here... */}
                  <div className="d-flex flex-wrap gap-4 mt-40 mb-60">
                    {user.role == "2" && (
                      <button
                        className="rts__btn apply__btn fw-bold"
                        onClick={() => setModalIsOpen(true)}
                      >
                        Postuler
                      </button>
                    )}
                    {user.role == "" && (
                      <button
                        className="rts__btn apply__btn fw-bold"
                        onClick={() => setLoginModalOpen(true)}
                      >
                        Se Connecter pour Postuler
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {/* Sidebar or related jobs section here... */}
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            content: {
              backgroundColor: "white",
              border: "none",
              zIndex: 200,
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "40px",
              opacity: "1",
            },
          }}
        >
          <Editor
            apiKey="zqv1hew65pxye67h2eqgnlklknv3zaxraaxtteldp0rapsh6"
            initialValue="Lettre de motivation"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "anchor",
                "autolink",
                "charmap",
                "codesample",
                "emoticons",
                "image",
                "link",
                "lists",
                "media",
                "searchreplace",
                "table",
                "visualblocks",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | removeformat",
            }}
            onEditorChange={handleEditorChange}
          />
          <div>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            {/* <button className="rts__btn apply__btn fw-bold" onClick={handleUpload}>Téléversez votre CV</button> */}
            {message && (
              <p style={{ backgroundColor: "white", color: "red" }}>
                {message}
              </p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="d-flex justify-content-between gap-20">
            <button
              className="small__btn fill__btn border-6 font-xs"
              onClick={() => setModalIsOpen(false)}
            >
              Fermer
            </button>
            <button
              className="small__btn fill__btn border-6 font-xs"
              onClick={handleApplication}
            >
              Postuler
            </button>
          </div>
        </Modal>

        <ToastContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          toastStyle={{
            width: "300px",
            fontSize: "15px",
            textAlign: "left",
          }}
        />
      </div>
      <Footer />
      <Myscript />
    </>
  );
}
