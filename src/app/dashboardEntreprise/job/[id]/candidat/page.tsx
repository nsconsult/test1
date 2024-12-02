"use client";
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import React, { useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderEntreprise";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarEntreprise";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import apiService from "@/app/services/apiService";
import axios from 'axios';
interface Application {
  job_listing: {
    title:string,
      contract_type:string,
      experience_level:string,
      min_salary:string,
      max_salary:string,
  };
  statut: number;
  user:{
    email: string;
    name:string;
    profile: {
      profile_picture_path: string;
      title:string;
      address:string;
    };
  };
  id: number;
  user_id: number;
  job_listing_id: number;
  cover_letter: string;
  resume_path: string;
  status: string;
  created_at: string;
}

export default function Home({ params }: { params: { id: string } }) {
  const jobid = parseInt(params.id);
  const router = useRouter();
  const [applicationList, setApplicationList] = useState<Application[]>([]);
  const [applicationAppliedList, setApplicationAppliedList] = useState<
    Application[]
  >([]);
  const [applicationRemoveList, setApplicationRemoveList] = useState<
    Application[]
  >([]);

  // const [application, setApplication] = useState({
  //   id: "",
  //   user_id: "",
  //   job_listing_id: "",
  //   cover_letter: "",
  //   resume_path: "",
  //   status: "",
  //   created_at: "",
  // });
  // const handleEdit = async (id: number) => {
  //   router.push(`/dashboardEntreprise/job/${id}`);
  // };
  const handleShow = async (show: number) => {
    router.push(`/dashboardEntreprise/candidat/show/${show}`);
  };
  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous voulez vraiment rejeter cette candidature?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF5757",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, rejeter!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteJob(id);
      }
    });
  };
  const deleteJob = async (id: number) => {
    try {
      await apiService.updateResource("applications", id,{status:"rejected"});
      laodsApplication();
    } catch (error) {
      console.error(error);
    }
  };

  const handleApply = (id: number) => {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous voulez vraiment accepter cette candidature?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF5757",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, accepter!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        appliedJob(id);
      }
    });
  };
  const appliedJob = async (id: number) => {
    try {
      await apiService.updateResource("applications", id,{status:"accepted"});
      laodsApplication();
    } catch (error) {
      console.error(error);
    }
  };

  const downloadAllCVs = async (list:Application[]) => {
    const zip = new JSZip();
  
    
    for (const job of list) {
      const resumePath = job.resume_path; 
      const fileName = resumePath.split('/').pop();
      if (fileName) {
        try {
          const response = await axios.get(resumePath, { responseType: 'blob' });
          zip.file(fileName, response.data);
        } catch (error) {
          console.error(`Erreur lors du téléchargement du CV : ${error}`);
        }
      }
    }
  
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'cv.zip');
    });
  };

  const downloadCSV = (list:Application[]) => {
    const headers = ['Nom', 'Email', 'Titre du poste', 'Type de contrat', 'Niveau d\'expérience', 'Salaire minimum', 'Salaire maximum', 'Statut'];
  
    const rows = list.map((job) => [
      job.user.name,
      job.user.email,
      job.job_listing.title,
      job.job_listing.contract_type,
      job.job_listing.experience_level,
      job.job_listing.min_salary,
      job.job_listing.max_salary,
      job.statut === 1 ? 'En cours' : 'Fermé',
    ]);
  
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    saveAs(blob, 'candidatures.csv');
  };

  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", options);
  };
  const laodsApplication = async () => {
    try {
      const applicationData = await apiService.getAllResources("applications");
      console.log(jobid);
      
      const filteredapplicationData = applicationData.filter(
        (application: { job_listing_id: number }) => application.job_listing_id == jobid
      );
      console.log('aa', applicationData);
      
      const filteredapplicationDataApplied = filteredapplicationData.filter(
        (application: { status: string }) => application.status === "accepted"
      );
      const filteredapplicationDataRemoved = filteredapplicationData.filter(
        (application: { status: string }) => application.status === "rejected"
      );
      console.log(filteredapplicationData);
      
      setApplicationList(filteredapplicationData);
      setApplicationAppliedList(filteredapplicationDataApplied);
      setApplicationRemoveList(filteredapplicationDataRemoved);
      } catch (error) {
      console.error(error);
    }
  };
  function handleDownload(fileUrl:string) {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  useEffect(() => {
    laodsApplication();
  }, []);
console.log("Applications ", applicationList );
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
              <h6 className="fw-semibold mb-30">Liste des candidatures</h6>
              <div className="candidate__filter__area">
                <h6 className="font-20">Candidatures</h6>
                <div className="candidate__filter">
                  <ul
                    className="candidate__filter__shorting"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Total: {applicationList.length}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Applied: {applicationAppliedList.length}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Rejected: {applicationRemoveList.length}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="candidate__filter__area">
                <h6 className="font-20">Telecharger candidatures</h6>
                <div className="candidate__filter">
                  
                  <div className="shortlist__action">
                        <button
                            onClick={() => downloadCSV(applicationList)}
                            className="action__item__long"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_441_6)">
                                <path
                                  d="M14.5547 5.22949C14.7488 5.22949 14.9062 5.0721 14.9062 4.87793V1.05469C14.9062 0.473133 14.4331 0 13.8516 0H1.05469C0.473133 0 0 0.473133 0 1.05469V16.9453C0 17.5269 0.473133 18 1.05469 18H13.8516C14.4331 18 14.9062 17.5269 14.9062 16.9453V14.3553C14.9062 14.1611 14.7488 14.0037 14.5547 14.0037C14.3606 14.0037 14.2031 14.1611 14.2031 14.3553V16.9453C14.2031 17.1392 14.0454 17.2969 13.8516 17.2969H1.05469C0.860836 17.2969 0.703125 17.1392 0.703125 16.9453V1.05469C0.703125 0.860836 0.860836 0.703125 1.05469 0.703125H13.8516C14.0454 0.703125 14.2031 0.860836 14.2031 1.05469V4.87793C14.2031 5.0721 14.3606 5.22949 14.5547 5.22949Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M7.45312 1.89844C5.66968 1.89844 4.21875 3.34937 4.21875 5.13281C4.21875 6.05802 4.60934 6.89361 5.23413 7.48368C5.24584 7.49619 5.25828 7.50804 5.27189 7.51883C5.84743 8.04544 6.61338 8.36715 7.45309 8.36715C8.2928 8.36715 9.05875 8.0454 9.63429 7.51883C9.64789 7.50804 9.66034 7.49616 9.67205 7.48368C10.2969 6.89361 10.6875 6.05802 10.6875 5.13281C10.6875 3.34937 9.23657 1.89844 7.45312 1.89844ZM7.45312 7.66406C6.87906 7.66406 6.34925 7.47169 5.92414 7.14839C6.23313 6.60048 6.80973 6.25781 7.45312 6.25781C8.09652 6.25781 8.67312 6.60048 8.98211 7.14839C8.55696 7.47169 8.02719 7.66406 7.45312 7.66406ZM6.89062 4.99219V4.76367C6.89062 4.45352 7.14298 4.20117 7.45312 4.20117C7.76327 4.20117 8.01562 4.45352 8.01562 4.76367V4.99219C8.01562 5.30234 7.76327 5.55469 7.45312 5.55469C7.14298 5.55469 6.89062 5.30234 6.89062 4.99219ZM9.49008 6.63339C9.2308 6.24885 8.87147 5.94977 8.45427 5.76513C8.61985 5.55114 8.71875 5.28307 8.71875 4.99219V4.76367C8.71875 4.06578 8.15101 3.49805 7.45312 3.49805C6.75524 3.49805 6.1875 4.06578 6.1875 4.76367V4.99219C6.1875 5.28307 6.28639 5.55114 6.45198 5.76513C6.03478 5.94977 5.67545 6.24885 5.41617 6.63339C5.10578 6.21316 4.92188 5.69415 4.92188 5.13281C4.92188 3.73707 6.05739 2.60156 7.45312 2.60156C8.84886 2.60156 9.98437 3.73707 9.98437 5.13281C9.98437 5.69415 9.80047 6.21316 9.49008 6.63339Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 15.3984H7.45312C7.25899 15.3984 7.10156 15.5558 7.10156 15.75C7.10156 15.9442 7.25899 16.1016 7.45312 16.1016H9.35156C9.54569 16.1016 9.70312 15.9442 9.70312 15.75C9.70312 15.5558 9.54569 15.3984 9.35156 15.3984Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 13.4297H4.35938C4.16524 13.4297 4.00781 13.5871 4.00781 13.7812C4.00781 13.9754 4.16524 14.1328 4.35938 14.1328H9.35156C9.54569 14.1328 9.70312 13.9754 9.70312 13.7812C9.70312 13.5871 9.54569 13.4297 9.35156 13.4297Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 11.4609H4.35938C4.16524 11.4609 4.00781 11.6183 4.00781 11.8125C4.00781 12.0067 4.16524 12.1641 4.35938 12.1641H9.35156C9.54569 12.1641 9.70312 12.0067 9.70312 11.8125C9.70312 11.6183 9.54569 11.4609 9.35156 11.4609Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 9.5952C3.04094 9.5298 2.95023 9.49219 2.85742 9.49219C2.76493 9.49219 2.67422 9.5298 2.60887 9.5952C2.54348 9.66059 2.50586 9.75129 2.50586 9.84375C2.50586 9.93621 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85742 10.1953C2.95023 10.1953 3.04059 10.1577 3.10629 10.0923C3.17168 10.0269 3.20934 9.93621 3.20934 9.84375C3.20934 9.75129 3.17172 9.66059 3.10629 9.5952Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 11.5639C3.04059 11.4986 2.95023 11.4609 2.85742 11.4609C2.76493 11.4609 2.67461 11.4986 2.60887 11.5639C2.54348 11.6293 2.50586 11.72 2.50586 11.8125C2.50586 11.905 2.54344 11.9957 2.60887 12.0611C2.67461 12.1264 2.76493 12.1641 2.85742 12.1641C2.95023 12.1641 3.04059 12.1264 3.10629 12.0611C3.17168 11.9957 3.20934 11.905 3.20934 11.8125C3.20934 11.72 3.17172 11.6293 3.10629 11.5639Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 13.5327C3.04059 13.4673 2.95023 13.4297 2.85742 13.4297C2.76493 13.4297 2.67461 13.4673 2.60887 13.5327C2.54348 13.5981 2.50586 13.6888 2.50586 13.7812C2.50586 13.8737 2.54344 13.9644 2.60887 14.0298C2.67422 14.0952 2.76493 14.1328 2.85742 14.1328C2.95023 14.1328 3.04094 14.0952 3.10629 14.0298C3.17168 13.9644 3.20934 13.8737 3.20934 13.7812C3.20934 13.6888 3.17172 13.5981 3.10629 13.5327Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 9.49219H4.35938C4.16524 9.49219 4.00781 9.64958 4.00781 9.84375C4.00781 10.0379 4.16524 10.1953 4.35938 10.1953H9.35156C9.54569 10.1953 9.70312 10.0379 9.70312 9.84375C9.70312 9.64958 9.54569 9.49219 9.35156 9.49219Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M17.2616 4.58126C16.92 4.38407 16.5221 4.33169 16.1411 4.43375C15.7602 4.53584 15.4417 4.78018 15.2446 5.12172L10.8204 12.7845C10.7962 12.8265 10.7809 12.8731 10.7755 12.9213L10.4641 15.7107C10.4486 15.8495 10.5167 15.9843 10.6377 16.0542C10.6923 16.0857 10.7529 16.1013 10.8134 16.1013C10.887 16.1013 10.9602 16.0783 11.0219 16.0328L13.2819 14.3684C13.321 14.3396 13.3537 14.3031 13.3779 14.2611L17.802 6.59832C18.2091 5.89322 17.9667 4.98837 17.2616 4.58126ZM11.252 14.9901L11.4146 13.5335L12.4321 14.121L11.252 14.9901ZM12.9448 13.605L11.6052 12.8316L15.1554 6.68241L16.495 7.45585L12.9448 13.605ZM17.1931 6.24672L16.8466 6.84694L15.5069 6.07351L15.8535 5.47328C15.9568 5.29437 16.1235 5.1664 16.3231 5.11293C16.5227 5.05942 16.7311 5.08692 16.91 5.1902C17.0889 5.29349 17.2169 5.46027 17.2703 5.65982C17.3238 5.85937 17.2964 6.06781 17.1931 6.24672Z"
                                  fill="#939393"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_441_6">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Télécharger les Candidatures
                          </button>
                          <button
                            onClick={() => downloadAllCVs(applicationList)}
                            className="action__item__long"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_441_6)">
                                <path
                                  d="M14.5547 5.22949C14.7488 5.22949 14.9062 5.0721 14.9062 4.87793V1.05469C14.9062 0.473133 14.4331 0 13.8516 0H1.05469C0.473133 0 0 0.473133 0 1.05469V16.9453C0 17.5269 0.473133 18 1.05469 18H13.8516C14.4331 18 14.9062 17.5269 14.9062 16.9453V14.3553C14.9062 14.1611 14.7488 14.0037 14.5547 14.0037C14.3606 14.0037 14.2031 14.1611 14.2031 14.3553V16.9453C14.2031 17.1392 14.0454 17.2969 13.8516 17.2969H1.05469C0.860836 17.2969 0.703125 17.1392 0.703125 16.9453V1.05469C0.703125 0.860836 0.860836 0.703125 1.05469 0.703125H13.8516C14.0454 0.703125 14.2031 0.860836 14.2031 1.05469V4.87793C14.2031 5.0721 14.3606 5.22949 14.5547 5.22949Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M7.45312 1.89844C5.66968 1.89844 4.21875 3.34937 4.21875 5.13281C4.21875 6.05802 4.60934 6.89361 5.23413 7.48368C5.24584 7.49619 5.25828 7.50804 5.27189 7.51883C5.84743 8.04544 6.61338 8.36715 7.45309 8.36715C8.2928 8.36715 9.05875 8.0454 9.63429 7.51883C9.64789 7.50804 9.66034 7.49616 9.67205 7.48368C10.2969 6.89361 10.6875 6.05802 10.6875 5.13281C10.6875 3.34937 9.23657 1.89844 7.45312 1.89844ZM7.45312 7.66406C6.87906 7.66406 6.34925 7.47169 5.92414 7.14839C6.23313 6.60048 6.80973 6.25781 7.45312 6.25781C8.09652 6.25781 8.67312 6.60048 8.98211 7.14839C8.55696 7.47169 8.02719 7.66406 7.45312 7.66406ZM6.89062 4.99219V4.76367C6.89062 4.45352 7.14298 4.20117 7.45312 4.20117C7.76327 4.20117 8.01562 4.45352 8.01562 4.76367V4.99219C8.01562 5.30234 7.76327 5.55469 7.45312 5.55469C7.14298 5.55469 6.89062 5.30234 6.89062 4.99219ZM9.49008 6.63339C9.2308 6.24885 8.87147 5.94977 8.45427 5.76513C8.61985 5.55114 8.71875 5.28307 8.71875 4.99219V4.76367C8.71875 4.06578 8.15101 3.49805 7.45312 3.49805C6.75524 3.49805 6.1875 4.06578 6.1875 4.76367V4.99219C6.1875 5.28307 6.28639 5.55114 6.45198 5.76513C6.03478 5.94977 5.67545 6.24885 5.41617 6.63339C5.10578 6.21316 4.92188 5.69415 4.92188 5.13281C4.92188 3.73707 6.05739 2.60156 7.45312 2.60156C8.84886 2.60156 9.98437 3.73707 9.98437 5.13281C9.98437 5.69415 9.80047 6.21316 9.49008 6.63339Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 15.3984H7.45312C7.25899 15.3984 7.10156 15.5558 7.10156 15.75C7.10156 15.9442 7.25899 16.1016 7.45312 16.1016H9.35156C9.54569 16.1016 9.70312 15.9442 9.70312 15.75C9.70312 15.5558 9.54569 15.3984 9.35156 15.3984Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 13.4297H4.35938C4.16524 13.4297 4.00781 13.5871 4.00781 13.7812C4.00781 13.9754 4.16524 14.1328 4.35938 14.1328H9.35156C9.54569 14.1328 9.70312 13.9754 9.70312 13.7812C9.70312 13.5871 9.54569 13.4297 9.35156 13.4297Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 11.4609H4.35938C4.16524 11.4609 4.00781 11.6183 4.00781 11.8125C4.00781 12.0067 4.16524 12.1641 4.35938 12.1641H9.35156C9.54569 12.1641 9.70312 12.0067 9.70312 11.8125C9.70312 11.6183 9.54569 11.4609 9.35156 11.4609Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 9.5952C3.04094 9.5298 2.95023 9.49219 2.85742 9.49219C2.76493 9.49219 2.67422 9.5298 2.60887 9.5952C2.54348 9.66059 2.50586 9.75129 2.50586 9.84375C2.50586 9.93621 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85742 10.1953C2.95023 10.1953 3.04059 10.1577 3.10629 10.0923C3.17168 10.0269 3.20934 9.93621 3.20934 9.84375C3.20934 9.75129 3.17172 9.66059 3.10629 9.5952Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 11.5639C3.04059 11.4986 2.95023 11.4609 2.85742 11.4609C2.76493 11.4609 2.67461 11.4986 2.60887 11.5639C2.54348 11.6293 2.50586 11.72 2.50586 11.8125C2.50586 11.905 2.54344 11.9957 2.60887 12.0611C2.67461 12.1264 2.76493 12.1641 2.85742 12.1641C2.95023 12.1641 3.04059 12.1264 3.10629 12.0611C3.17168 11.9957 3.20934 11.905 3.20934 11.8125C3.20934 11.72 3.17172 11.6293 3.10629 11.5639Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 13.5327C3.04059 13.4673 2.95023 13.4297 2.85742 13.4297C2.76493 13.4297 2.67461 13.4673 2.60887 13.5327C2.54348 13.5981 2.50586 13.6888 2.50586 13.7812C2.50586 13.8737 2.54344 13.9644 2.60887 14.0298C2.67422 14.0952 2.76493 14.1328 2.85742 14.1328C2.95023 14.1328 3.04094 14.0952 3.10629 14.0298C3.17168 13.9644 3.20934 13.8737 3.20934 13.7812C3.20934 13.6888 3.17172 13.5981 3.10629 13.5327Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 9.49219H4.35938C4.16524 9.49219 4.00781 9.64958 4.00781 9.84375C4.00781 10.0379 4.16524 10.1953 4.35938 10.1953H9.35156C9.54569 10.1953 9.70312 10.0379 9.70312 9.84375C9.70312 9.64958 9.54569 9.49219 9.35156 9.49219Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M17.2616 4.58126C16.92 4.38407 16.5221 4.33169 16.1411 4.43375C15.7602 4.53584 15.4417 4.78018 15.2446 5.12172L10.8204 12.7845C10.7962 12.8265 10.7809 12.8731 10.7755 12.9213L10.4641 15.7107C10.4486 15.8495 10.5167 15.9843 10.6377 16.0542C10.6923 16.0857 10.7529 16.1013 10.8134 16.1013C10.887 16.1013 10.9602 16.0783 11.0219 16.0328L13.2819 14.3684C13.321 14.3396 13.3537 14.3031 13.3779 14.2611L17.802 6.59832C18.2091 5.89322 17.9667 4.98837 17.2616 4.58126ZM11.252 14.9901L11.4146 13.5335L12.4321 14.121L11.252 14.9901ZM12.9448 13.605L11.6052 12.8316L15.1554 6.68241L16.495 7.45585L12.9448 13.605ZM17.1931 6.24672L16.8466 6.84694L15.5069 6.07351L15.8535 5.47328C15.9568 5.29437 16.1235 5.1664 16.3231 5.11293C16.5227 5.05942 16.7311 5.08692 16.91 5.1902C17.0889 5.29349 17.2169 5.46027 17.2703 5.65982C17.3238 5.85937 17.2964 6.06781 17.1931 6.24672Z"
                                  fill="#939393"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_441_6">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Télécharger les Cv
                          </button>
                          </div>
                          
                </div>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  <div className="short__list__candidate">
                    {/* single item */}
                    {applicationList.map((list) => (
                      <div key={list.id} className="single__shortlist__item">
                        <div className="author__info">
                          <div className="author__meta">
                            <div className="author__image">
                              <img
                                src={list.user.profile.profile_picture_path}
                                alt=""
                              />
                            </div>
                            <div className="author__name">
                              <h6 className="fw-semibold mb-1">
                                {list.user.name}
                              </h6>
                              <p className="mb-0">{list.user.profile.title}</p>
                            </div>
                          </div>
                          <div className="author__info__list">
                            <span>
                              <i className="fa-light fa-location-dot" />{" "}
                              {list.user.profile.address}
                            </span>
                            <span>
                              <i className="fa-light fa-clock" />{" "}
                              {formatDate(list.created_at)}
                            </span>
                          </div>
                        </div>
                        
                <button
                            className="action__operation pending"
                          >
                            {list.status =='pending' &&('En cours') }
                  {list.status =='accepted' &&('Accepté') }
                  {list.status =='rejected' &&('Rejeté') }
                          </button>
                        <div className="shortlist__action">
                          <button
                            onClick={() => handleDownload(list.resume_path)}
                            className="action__item__long"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_441_6)">
                                <path
                                  d="M14.5547 5.22949C14.7488 5.22949 14.9062 5.0721 14.9062 4.87793V1.05469C14.9062 0.473133 14.4331 0 13.8516 0H1.05469C0.473133 0 0 0.473133 0 1.05469V16.9453C0 17.5269 0.473133 18 1.05469 18H13.8516C14.4331 18 14.9062 17.5269 14.9062 16.9453V14.3553C14.9062 14.1611 14.7488 14.0037 14.5547 14.0037C14.3606 14.0037 14.2031 14.1611 14.2031 14.3553V16.9453C14.2031 17.1392 14.0454 17.2969 13.8516 17.2969H1.05469C0.860836 17.2969 0.703125 17.1392 0.703125 16.9453V1.05469C0.703125 0.860836 0.860836 0.703125 1.05469 0.703125H13.8516C14.0454 0.703125 14.2031 0.860836 14.2031 1.05469V4.87793C14.2031 5.0721 14.3606 5.22949 14.5547 5.22949Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M7.45312 1.89844C5.66968 1.89844 4.21875 3.34937 4.21875 5.13281C4.21875 6.05802 4.60934 6.89361 5.23413 7.48368C5.24584 7.49619 5.25828 7.50804 5.27189 7.51883C5.84743 8.04544 6.61338 8.36715 7.45309 8.36715C8.2928 8.36715 9.05875 8.0454 9.63429 7.51883C9.64789 7.50804 9.66034 7.49616 9.67205 7.48368C10.2969 6.89361 10.6875 6.05802 10.6875 5.13281C10.6875 3.34937 9.23657 1.89844 7.45312 1.89844ZM7.45312 7.66406C6.87906 7.66406 6.34925 7.47169 5.92414 7.14839C6.23313 6.60048 6.80973 6.25781 7.45312 6.25781C8.09652 6.25781 8.67312 6.60048 8.98211 7.14839C8.55696 7.47169 8.02719 7.66406 7.45312 7.66406ZM6.89062 4.99219V4.76367C6.89062 4.45352 7.14298 4.20117 7.45312 4.20117C7.76327 4.20117 8.01562 4.45352 8.01562 4.76367V4.99219C8.01562 5.30234 7.76327 5.55469 7.45312 5.55469C7.14298 5.55469 6.89062 5.30234 6.89062 4.99219ZM9.49008 6.63339C9.2308 6.24885 8.87147 5.94977 8.45427 5.76513C8.61985 5.55114 8.71875 5.28307 8.71875 4.99219V4.76367C8.71875 4.06578 8.15101 3.49805 7.45312 3.49805C6.75524 3.49805 6.1875 4.06578 6.1875 4.76367V4.99219C6.1875 5.28307 6.28639 5.55114 6.45198 5.76513C6.03478 5.94977 5.67545 6.24885 5.41617 6.63339C5.10578 6.21316 4.92188 5.69415 4.92188 5.13281C4.92188 3.73707 6.05739 2.60156 7.45312 2.60156C8.84886 2.60156 9.98437 3.73707 9.98437 5.13281C9.98437 5.69415 9.80047 6.21316 9.49008 6.63339Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 15.3984H7.45312C7.25899 15.3984 7.10156 15.5558 7.10156 15.75C7.10156 15.9442 7.25899 16.1016 7.45312 16.1016H9.35156C9.54569 16.1016 9.70312 15.9442 9.70312 15.75C9.70312 15.5558 9.54569 15.3984 9.35156 15.3984Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 13.4297H4.35938C4.16524 13.4297 4.00781 13.5871 4.00781 13.7812C4.00781 13.9754 4.16524 14.1328 4.35938 14.1328H9.35156C9.54569 14.1328 9.70312 13.9754 9.70312 13.7812C9.70312 13.5871 9.54569 13.4297 9.35156 13.4297Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 11.4609H4.35938C4.16524 11.4609 4.00781 11.6183 4.00781 11.8125C4.00781 12.0067 4.16524 12.1641 4.35938 12.1641H9.35156C9.54569 12.1641 9.70312 12.0067 9.70312 11.8125C9.70312 11.6183 9.54569 11.4609 9.35156 11.4609Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 9.5952C3.04094 9.5298 2.95023 9.49219 2.85742 9.49219C2.76493 9.49219 2.67422 9.5298 2.60887 9.5952C2.54348 9.66059 2.50586 9.75129 2.50586 9.84375C2.50586 9.93621 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85742 10.1953C2.95023 10.1953 3.04059 10.1577 3.10629 10.0923C3.17168 10.0269 3.20934 9.93621 3.20934 9.84375C3.20934 9.75129 3.17172 9.66059 3.10629 9.5952Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 11.5639C3.04059 11.4986 2.95023 11.4609 2.85742 11.4609C2.76493 11.4609 2.67461 11.4986 2.60887 11.5639C2.54348 11.6293 2.50586 11.72 2.50586 11.8125C2.50586 11.905 2.54344 11.9957 2.60887 12.0611C2.67461 12.1264 2.76493 12.1641 2.85742 12.1641C2.95023 12.1641 3.04059 12.1264 3.10629 12.0611C3.17168 11.9957 3.20934 11.905 3.20934 11.8125C3.20934 11.72 3.17172 11.6293 3.10629 11.5639Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 13.5327C3.04059 13.4673 2.95023 13.4297 2.85742 13.4297C2.76493 13.4297 2.67461 13.4673 2.60887 13.5327C2.54348 13.5981 2.50586 13.6888 2.50586 13.7812C2.50586 13.8737 2.54344 13.9644 2.60887 14.0298C2.67422 14.0952 2.76493 14.1328 2.85742 14.1328C2.95023 14.1328 3.04094 14.0952 3.10629 14.0298C3.17168 13.9644 3.20934 13.8737 3.20934 13.7812C3.20934 13.6888 3.17172 13.5981 3.10629 13.5327Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 9.49219H4.35938C4.16524 9.49219 4.00781 9.64958 4.00781 9.84375C4.00781 10.0379 4.16524 10.1953 4.35938 10.1953H9.35156C9.54569 10.1953 9.70312 10.0379 9.70312 9.84375C9.70312 9.64958 9.54569 9.49219 9.35156 9.49219Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M17.2616 4.58126C16.92 4.38407 16.5221 4.33169 16.1411 4.43375C15.7602 4.53584 15.4417 4.78018 15.2446 5.12172L10.8204 12.7845C10.7962 12.8265 10.7809 12.8731 10.7755 12.9213L10.4641 15.7107C10.4486 15.8495 10.5167 15.9843 10.6377 16.0542C10.6923 16.0857 10.7529 16.1013 10.8134 16.1013C10.887 16.1013 10.9602 16.0783 11.0219 16.0328L13.2819 14.3684C13.321 14.3396 13.3537 14.3031 13.3779 14.2611L17.802 6.59832C18.2091 5.89322 17.9667 4.98837 17.2616 4.58126ZM11.252 14.9901L11.4146 13.5335L12.4321 14.121L11.252 14.9901ZM12.9448 13.605L11.6052 12.8316L15.1554 6.68241L16.495 7.45585L12.9448 13.605ZM17.1931 6.24672L16.8466 6.84694L15.5069 6.07351L15.8535 5.47328C15.9568 5.29437 16.1235 5.1664 16.3231 5.11293C16.5227 5.05942 16.7311 5.08692 16.91 5.1902C17.0889 5.29349 17.2169 5.46027 17.2703 5.65982C17.3238 5.85937 17.2964 6.06781 17.1931 6.24672Z"
                                  fill="#939393"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_441_6">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Download Cv
                          </button>
                          <button
                            onClick={() => handleShow(list.id)}
                            className="action__item"
                          >
                            {/* <span className="notification__item">10</span> */}
                            <svg
                              width={22}
                              height={16}
                              viewBox="0 0 22 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          {list.status==="pending" &&
                          <button onClick={()=>handleApply(list.id)} className="action__item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"
                                fill="#939393"
                              ></path>
                            </svg>
                          </button>}
                          {list.status==="pending" &&
                          
                          <button
                            onClick={() => handleDelete(list.id)}
                            className="action__item"
                          >
                            <svg
                              width={20}
                              height={22}
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 4.25H12C12 3.71957 11.7893 3.21086 11.4142 2.83579C11.0391 2.46071 10.5304 2.25 10 2.25C9.46957 2.25 8.96086 2.46071 8.58579 2.83579C8.21071 3.21086 8 3.71957 8 4.25ZM6.5 4.25C6.5 3.79037 6.59053 3.33525 6.76642 2.91061C6.94231 2.48597 7.20012 2.10013 7.52513 1.77513C7.85013 1.45012 8.23597 1.19231 8.66061 1.01642C9.08525 0.84053 9.54037 0.75 10 0.75C10.4596 0.75 10.9148 0.84053 11.3394 1.01642C11.764 1.19231 12.1499 1.45012 12.4749 1.77513C12.7999 2.10013 13.0577 2.48597 13.2336 2.91061C13.4095 3.33525 13.5 3.79037 13.5 4.25H19.25C19.4489 4.25 19.6397 4.32902 19.7803 4.46967C19.921 4.61032 20 4.80109 20 5C20 5.19891 19.921 5.38968 19.7803 5.53033C19.6397 5.67098 19.4489 5.75 19.25 5.75H17.93L16.76 17.861C16.6702 18.789 16.238 19.6502 15.5477 20.2768C14.8573 20.9034 13.9583 21.2504 13.026 21.25H6.974C6.04186 21.2501 5.1431 20.903 4.45295 20.2765C3.7628 19.6499 3.33073 18.7888 3.241 17.861L2.07 5.75H0.75C0.551088 5.75 0.360322 5.67098 0.21967 5.53033C0.0790175 5.38968 0 5.19891 0 5C0 4.80109 0.0790175 4.61032 0.21967 4.46967C0.360322 4.32902 0.551088 4.25 0.75 4.25H6.5ZM8.5 9C8.5 8.80109 8.42098 8.61032 8.28033 8.46967C8.13968 8.32902 7.94891 8.25 7.75 8.25C7.55109 8.25 7.36032 8.32902 7.21967 8.46967C7.07902 8.61032 7 8.80109 7 9V16.5C7 16.6989 7.07902 16.8897 7.21967 17.0303C7.36032 17.171 7.55109 17.25 7.75 17.25C7.94891 17.25 8.13968 17.171 8.28033 17.0303C8.42098 16.8897 8.5 16.6989 8.5 16.5V9ZM12.25 8.25C12.4489 8.25 12.6397 8.32902 12.7803 8.46967C12.921 8.61032 13 8.80109 13 9V16.5C13 16.6989 12.921 16.8897 12.7803 17.0303C12.6397 17.171 12.4489 17.25 12.25 17.25C12.0511 17.25 11.8603 17.171 11.7197 17.0303C11.579 16.8897 11.5 16.6989 11.5 16.5V9C11.5 8.80109 11.579 8.61032 11.7197 8.46967C11.8603 8.32902 12.0511 8.25 12.25 8.25ZM4.734 17.717C4.78794 18.2736 5.04724 18.7903 5.46137 19.1661C5.87549 19.542 6.41475 19.7501 6.974 19.75H13.026C13.5853 19.7501 14.1245 19.542 14.5386 19.1661C14.9528 18.7903 15.2121 18.2736 15.266 17.717L16.424 5.75H3.576L4.734 17.717Z"
                                fill="#FF5757"
                              />
                            </svg>
                          </button>
                          }
                        </div>
                      </div>
                    ))}
                    {/* single item end */}
                    {/* pagination */}
                    <div className="rts__pagination d-block mx-auto pt-40 max-content">
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
                    {/* pagination end */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex={0}
                >
                  <div className="short__list__candidate">
                    {/* single item */}
                    {applicationAppliedList.map((list) => (
                      <div key={list.id} className="single__shortlist__item">
                        <div className="author__info">
                          <div className="author__meta">
                            <div className="author__image">
                              <img
                                src={list.user.profile.profile_picture_path}
                                alt=""
                              />
                            </div>
                            <div className="author__name">
                              <h6 className="fw-semibold mb-1">
                                {list.user.name}
                              </h6>
                              <p className="mb-0">{list.user.profile.title}</p>
                            </div>
                          </div>
                          <div className="author__info__list">
                            <span>
                              <i className="fa-light fa-location-dot" />{" "}
                              {list.user.profile.address}
                            </span>
                            <span>
                              <i className="fa-light fa-clock" />{" "}
                              {formatDate(list.created_at)}
                            </span>
                          </div>
                        </div>
                        <div className="shortlist__action">
                        <button
                            onClick={() => handleDownload(list.resume_path)}
                            className="action__item__long"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_441_6)">
                                <path
                                  d="M14.5547 5.22949C14.7488 5.22949 14.9062 5.0721 14.9062 4.87793V1.05469C14.9062 0.473133 14.4331 0 13.8516 0H1.05469C0.473133 0 0 0.473133 0 1.05469V16.9453C0 17.5269 0.473133 18 1.05469 18H13.8516C14.4331 18 14.9062 17.5269 14.9062 16.9453V14.3553C14.9062 14.1611 14.7488 14.0037 14.5547 14.0037C14.3606 14.0037 14.2031 14.1611 14.2031 14.3553V16.9453C14.2031 17.1392 14.0454 17.2969 13.8516 17.2969H1.05469C0.860836 17.2969 0.703125 17.1392 0.703125 16.9453V1.05469C0.703125 0.860836 0.860836 0.703125 1.05469 0.703125H13.8516C14.0454 0.703125 14.2031 0.860836 14.2031 1.05469V4.87793C14.2031 5.0721 14.3606 5.22949 14.5547 5.22949Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M7.45312 1.89844C5.66968 1.89844 4.21875 3.34937 4.21875 5.13281C4.21875 6.05802 4.60934 6.89361 5.23413 7.48368C5.24584 7.49619 5.25828 7.50804 5.27189 7.51883C5.84743 8.04544 6.61338 8.36715 7.45309 8.36715C8.2928 8.36715 9.05875 8.0454 9.63429 7.51883C9.64789 7.50804 9.66034 7.49616 9.67205 7.48368C10.2969 6.89361 10.6875 6.05802 10.6875 5.13281C10.6875 3.34937 9.23657 1.89844 7.45312 1.89844ZM7.45312 7.66406C6.87906 7.66406 6.34925 7.47169 5.92414 7.14839C6.23313 6.60048 6.80973 6.25781 7.45312 6.25781C8.09652 6.25781 8.67312 6.60048 8.98211 7.14839C8.55696 7.47169 8.02719 7.66406 7.45312 7.66406ZM6.89062 4.99219V4.76367C6.89062 4.45352 7.14298 4.20117 7.45312 4.20117C7.76327 4.20117 8.01562 4.45352 8.01562 4.76367V4.99219C8.01562 5.30234 7.76327 5.55469 7.45312 5.55469C7.14298 5.55469 6.89062 5.30234 6.89062 4.99219ZM9.49008 6.63339C9.2308 6.24885 8.87147 5.94977 8.45427 5.76513C8.61985 5.55114 8.71875 5.28307 8.71875 4.99219V4.76367C8.71875 4.06578 8.15101 3.49805 7.45312 3.49805C6.75524 3.49805 6.1875 4.06578 6.1875 4.76367V4.99219C6.1875 5.28307 6.28639 5.55114 6.45198 5.76513C6.03478 5.94977 5.67545 6.24885 5.41617 6.63339C5.10578 6.21316 4.92188 5.69415 4.92188 5.13281C4.92188 3.73707 6.05739 2.60156 7.45312 2.60156C8.84886 2.60156 9.98437 3.73707 9.98437 5.13281C9.98437 5.69415 9.80047 6.21316 9.49008 6.63339Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 15.3984H7.45312C7.25899 15.3984 7.10156 15.5558 7.10156 15.75C7.10156 15.9442 7.25899 16.1016 7.45312 16.1016H9.35156C9.54569 16.1016 9.70312 15.9442 9.70312 15.75C9.70312 15.5558 9.54569 15.3984 9.35156 15.3984Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 13.4297H4.35938C4.16524 13.4297 4.00781 13.5871 4.00781 13.7812C4.00781 13.9754 4.16524 14.1328 4.35938 14.1328H9.35156C9.54569 14.1328 9.70312 13.9754 9.70312 13.7812C9.70312 13.5871 9.54569 13.4297 9.35156 13.4297Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 11.4609H4.35938C4.16524 11.4609 4.00781 11.6183 4.00781 11.8125C4.00781 12.0067 4.16524 12.1641 4.35938 12.1641H9.35156C9.54569 12.1641 9.70312 12.0067 9.70312 11.8125C9.70312 11.6183 9.54569 11.4609 9.35156 11.4609Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 9.5952C3.04094 9.5298 2.95023 9.49219 2.85742 9.49219C2.76493 9.49219 2.67422 9.5298 2.60887 9.5952C2.54348 9.66059 2.50586 9.75129 2.50586 9.84375C2.50586 9.93621 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85742 10.1953C2.95023 10.1953 3.04059 10.1577 3.10629 10.0923C3.17168 10.0269 3.20934 9.93621 3.20934 9.84375C3.20934 9.75129 3.17172 9.66059 3.10629 9.5952Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 11.5639C3.04059 11.4986 2.95023 11.4609 2.85742 11.4609C2.76493 11.4609 2.67461 11.4986 2.60887 11.5639C2.54348 11.6293 2.50586 11.72 2.50586 11.8125C2.50586 11.905 2.54344 11.9957 2.60887 12.0611C2.67461 12.1264 2.76493 12.1641 2.85742 12.1641C2.95023 12.1641 3.04059 12.1264 3.10629 12.0611C3.17168 11.9957 3.20934 11.905 3.20934 11.8125C3.20934 11.72 3.17172 11.6293 3.10629 11.5639Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 13.5327C3.04059 13.4673 2.95023 13.4297 2.85742 13.4297C2.76493 13.4297 2.67461 13.4673 2.60887 13.5327C2.54348 13.5981 2.50586 13.6888 2.50586 13.7812C2.50586 13.8737 2.54344 13.9644 2.60887 14.0298C2.67422 14.0952 2.76493 14.1328 2.85742 14.1328C2.95023 14.1328 3.04094 14.0952 3.10629 14.0298C3.17168 13.9644 3.20934 13.8737 3.20934 13.7812C3.20934 13.6888 3.17172 13.5981 3.10629 13.5327Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 9.49219H4.35938C4.16524 9.49219 4.00781 9.64958 4.00781 9.84375C4.00781 10.0379 4.16524 10.1953 4.35938 10.1953H9.35156C9.54569 10.1953 9.70312 10.0379 9.70312 9.84375C9.70312 9.64958 9.54569 9.49219 9.35156 9.49219Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M17.2616 4.58126C16.92 4.38407 16.5221 4.33169 16.1411 4.43375C15.7602 4.53584 15.4417 4.78018 15.2446 5.12172L10.8204 12.7845C10.7962 12.8265 10.7809 12.8731 10.7755 12.9213L10.4641 15.7107C10.4486 15.8495 10.5167 15.9843 10.6377 16.0542C10.6923 16.0857 10.7529 16.1013 10.8134 16.1013C10.887 16.1013 10.9602 16.0783 11.0219 16.0328L13.2819 14.3684C13.321 14.3396 13.3537 14.3031 13.3779 14.2611L17.802 6.59832C18.2091 5.89322 17.9667 4.98837 17.2616 4.58126ZM11.252 14.9901L11.4146 13.5335L12.4321 14.121L11.252 14.9901ZM12.9448 13.605L11.6052 12.8316L15.1554 6.68241L16.495 7.45585L12.9448 13.605ZM17.1931 6.24672L16.8466 6.84694L15.5069 6.07351L15.8535 5.47328C15.9568 5.29437 16.1235 5.1664 16.3231 5.11293C16.5227 5.05942 16.7311 5.08692 16.91 5.1902C17.0889 5.29349 17.2169 5.46027 17.2703 5.65982C17.3238 5.85937 17.2964 6.06781 17.1931 6.24672Z"
                                  fill="#939393"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_441_6">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Download Cv
                          </button>
                          <button
                            onClick={() => handleShow(list.id)}
                            className="action__item"
                          >
                            {/* <span className="notification__item">10</span> */}
                            <svg
                              width={22}
                              height={16}
                              viewBox="0 0 22 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          
                        </div>
                      </div>
                    ))}
                    {/* single item end */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex={0}
                >
                  <div className="short__list__candidate">
                    {/* single item */}
                    {applicationRemoveList.map((list) => (
                      <div key={list.id} className="single__shortlist__item">
                        <div className="author__info">
                          <div className="author__meta">
                            <div className="author__image">
                              <img
                                src={list.user.profile.profile_picture_path}
                                alt=""
                              />
                            </div>
                            <div className="author__name">
                              <h6 className="fw-semibold mb-1">
                                {list.user.name}
                              </h6>
                              <p className="mb-0">{list.user.profile.title}</p>
                            </div>
                          </div>
                          <div className="author__info__list">
                            <span>
                              <i className="fa-light fa-location-dot" />
                              {list.user.profile.address}
                            </span>
                            <span>
                              <i className="fa-light fa-clock" />{" "}
                              {formatDate(list.created_at)}
                            </span>
                          </div>
                        </div>
                        <div className="shortlist__action">
                        <button
                            onClick={() => handleDownload(list.resume_path)}
                            className="action__item__long"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_441_6)">
                                <path
                                  d="M14.5547 5.22949C14.7488 5.22949 14.9062 5.0721 14.9062 4.87793V1.05469C14.9062 0.473133 14.4331 0 13.8516 0H1.05469C0.473133 0 0 0.473133 0 1.05469V16.9453C0 17.5269 0.473133 18 1.05469 18H13.8516C14.4331 18 14.9062 17.5269 14.9062 16.9453V14.3553C14.9062 14.1611 14.7488 14.0037 14.5547 14.0037C14.3606 14.0037 14.2031 14.1611 14.2031 14.3553V16.9453C14.2031 17.1392 14.0454 17.2969 13.8516 17.2969H1.05469C0.860836 17.2969 0.703125 17.1392 0.703125 16.9453V1.05469C0.703125 0.860836 0.860836 0.703125 1.05469 0.703125H13.8516C14.0454 0.703125 14.2031 0.860836 14.2031 1.05469V4.87793C14.2031 5.0721 14.3606 5.22949 14.5547 5.22949Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M7.45312 1.89844C5.66968 1.89844 4.21875 3.34937 4.21875 5.13281C4.21875 6.05802 4.60934 6.89361 5.23413 7.48368C5.24584 7.49619 5.25828 7.50804 5.27189 7.51883C5.84743 8.04544 6.61338 8.36715 7.45309 8.36715C8.2928 8.36715 9.05875 8.0454 9.63429 7.51883C9.64789 7.50804 9.66034 7.49616 9.67205 7.48368C10.2969 6.89361 10.6875 6.05802 10.6875 5.13281C10.6875 3.34937 9.23657 1.89844 7.45312 1.89844ZM7.45312 7.66406C6.87906 7.66406 6.34925 7.47169 5.92414 7.14839C6.23313 6.60048 6.80973 6.25781 7.45312 6.25781C8.09652 6.25781 8.67312 6.60048 8.98211 7.14839C8.55696 7.47169 8.02719 7.66406 7.45312 7.66406ZM6.89062 4.99219V4.76367C6.89062 4.45352 7.14298 4.20117 7.45312 4.20117C7.76327 4.20117 8.01562 4.45352 8.01562 4.76367V4.99219C8.01562 5.30234 7.76327 5.55469 7.45312 5.55469C7.14298 5.55469 6.89062 5.30234 6.89062 4.99219ZM9.49008 6.63339C9.2308 6.24885 8.87147 5.94977 8.45427 5.76513C8.61985 5.55114 8.71875 5.28307 8.71875 4.99219V4.76367C8.71875 4.06578 8.15101 3.49805 7.45312 3.49805C6.75524 3.49805 6.1875 4.06578 6.1875 4.76367V4.99219C6.1875 5.28307 6.28639 5.55114 6.45198 5.76513C6.03478 5.94977 5.67545 6.24885 5.41617 6.63339C5.10578 6.21316 4.92188 5.69415 4.92188 5.13281C4.92188 3.73707 6.05739 2.60156 7.45312 2.60156C8.84886 2.60156 9.98437 3.73707 9.98437 5.13281C9.98437 5.69415 9.80047 6.21316 9.49008 6.63339Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 15.3984H7.45312C7.25899 15.3984 7.10156 15.5558 7.10156 15.75C7.10156 15.9442 7.25899 16.1016 7.45312 16.1016H9.35156C9.54569 16.1016 9.70312 15.9442 9.70312 15.75C9.70312 15.5558 9.54569 15.3984 9.35156 15.3984Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 13.4297H4.35938C4.16524 13.4297 4.00781 13.5871 4.00781 13.7812C4.00781 13.9754 4.16524 14.1328 4.35938 14.1328H9.35156C9.54569 14.1328 9.70312 13.9754 9.70312 13.7812C9.70312 13.5871 9.54569 13.4297 9.35156 13.4297Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 11.4609H4.35938C4.16524 11.4609 4.00781 11.6183 4.00781 11.8125C4.00781 12.0067 4.16524 12.1641 4.35938 12.1641H9.35156C9.54569 12.1641 9.70312 12.0067 9.70312 11.8125C9.70312 11.6183 9.54569 11.4609 9.35156 11.4609Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 9.5952C3.04094 9.5298 2.95023 9.49219 2.85742 9.49219C2.76493 9.49219 2.67422 9.5298 2.60887 9.5952C2.54348 9.66059 2.50586 9.75129 2.50586 9.84375C2.50586 9.93621 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85742 10.1953C2.95023 10.1953 3.04059 10.1577 3.10629 10.0923C3.17168 10.0269 3.20934 9.93621 3.20934 9.84375C3.20934 9.75129 3.17172 9.66059 3.10629 9.5952Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 11.5639C3.04059 11.4986 2.95023 11.4609 2.85742 11.4609C2.76493 11.4609 2.67461 11.4986 2.60887 11.5639C2.54348 11.6293 2.50586 11.72 2.50586 11.8125C2.50586 11.905 2.54344 11.9957 2.60887 12.0611C2.67461 12.1264 2.76493 12.1641 2.85742 12.1641C2.95023 12.1641 3.04059 12.1264 3.10629 12.0611C3.17168 11.9957 3.20934 11.905 3.20934 11.8125C3.20934 11.72 3.17172 11.6293 3.10629 11.5639Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M3.10629 13.5327C3.04059 13.4673 2.95023 13.4297 2.85742 13.4297C2.76493 13.4297 2.67461 13.4673 2.60887 13.5327C2.54348 13.5981 2.50586 13.6888 2.50586 13.7812C2.50586 13.8737 2.54344 13.9644 2.60887 14.0298C2.67422 14.0952 2.76493 14.1328 2.85742 14.1328C2.95023 14.1328 3.04094 14.0952 3.10629 14.0298C3.17168 13.9644 3.20934 13.8737 3.20934 13.7812C3.20934 13.6888 3.17172 13.5981 3.10629 13.5327Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M9.35156 9.49219H4.35938C4.16524 9.49219 4.00781 9.64958 4.00781 9.84375C4.00781 10.0379 4.16524 10.1953 4.35938 10.1953H9.35156C9.54569 10.1953 9.70312 10.0379 9.70312 9.84375C9.70312 9.64958 9.54569 9.49219 9.35156 9.49219Z"
                                  fill="#939393"
                                />
                                <path
                                  d="M17.2616 4.58126C16.92 4.38407 16.5221 4.33169 16.1411 4.43375C15.7602 4.53584 15.4417 4.78018 15.2446 5.12172L10.8204 12.7845C10.7962 12.8265 10.7809 12.8731 10.7755 12.9213L10.4641 15.7107C10.4486 15.8495 10.5167 15.9843 10.6377 16.0542C10.6923 16.0857 10.7529 16.1013 10.8134 16.1013C10.887 16.1013 10.9602 16.0783 11.0219 16.0328L13.2819 14.3684C13.321 14.3396 13.3537 14.3031 13.3779 14.2611L17.802 6.59832C18.2091 5.89322 17.9667 4.98837 17.2616 4.58126ZM11.252 14.9901L11.4146 13.5335L12.4321 14.121L11.252 14.9901ZM12.9448 13.605L11.6052 12.8316L15.1554 6.68241L16.495 7.45585L12.9448 13.605ZM17.1931 6.24672L16.8466 6.84694L15.5069 6.07351L15.8535 5.47328C15.9568 5.29437 16.1235 5.1664 16.3231 5.11293C16.5227 5.05942 16.7311 5.08692 16.91 5.1902C17.0889 5.29349 17.2169 5.46027 17.2703 5.65982C17.3238 5.85937 17.2964 6.06781 17.1931 6.24672Z"
                                  fill="#939393"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_441_6">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Download Cv
                          </button>
                          <button
                            onClick={() => handleShow(list.id)}
                            className="action__item"
                          >
                            <svg
                              width={22}
                              height={16}
                              viewBox="0 0 22 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
                                stroke="#0B0D28"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          
                        </div>
                      </div>
                    ))}
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
      <Footer />
      <Myscript />
    </>
  );
}
