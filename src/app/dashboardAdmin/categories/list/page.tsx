"use client";

import React, { useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderEntreprise";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarAdmin";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import apiService from "@/app/services/apiService";
interface JobsListing {
  profile: {
    state: string;
    country: string;
    profile_picture_path:string;
    company_categories:string;
  };
  name: string;
  job_listings: {
    length:number;
  };
  applications: {
    length:string;
  };
  id: number;
  user_id:number;
    title: string,
    description: string,
    category_id: number,
    location: string,
    experience_level: string,
    contract_type: string,
    min_salary: number,
    max_salary: number,
    created_at:string
};


export default function Home() {
  const router = useRouter();
  const [jobsList, setJobsList] = useState<JobsListing[]>([]);
 
  const handleEdit = async (id: number) => {
    router.push(`/dashboardAdmin/job/${id}`);
  };
  const handleShow = async (show: number) => {
    router.push(`/dashboardAdmin/job/show/${show}`);
  };
  const handleDelete = (id:number) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF5757',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteJob(id);
      }
    });
  };
  const deleteJob = async (id: number) => {
    try {
      await apiService.deleteResource('job_listings',id);
      loadJobs();
    } catch (error) {
      console.error(error);
    }
  };
  
  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
  };
  const loadJobs = async () => {
    try {
      const jobsData = await apiService.getAllResources('job_categories');
      setJobsList(jobsData);
      console.log(jobsData);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadJobs();
  }, []);

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
    <div className="applied__job__info radius-16">
      <div className="job__filter">
        <div className="search__job">
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
        <div className="filter__job">
            <h6 className="current ">Liste des categories</h6>
        </div>
      </div>
      <div className="applied__job__list">
      {jobsList.map((list) => (
        <div key={list.id} className="single__applied__job">
          <div className="single__applied__job__content">
            {/* <div className="icon">
              <img src="/assets/img/icon/apple.svg" alt="" />
            </div> */}
            <div className="content">
              <a href="#">
                <h6>{list.name}</h6>
              </a>
              <div className="content__info">
                {/* <span>
                  <i className="fa-light fa-location-dot" /> 
                </span>
                <span>
                  <i className="fa-light fa-briefcase" />
                  
                </span> */}
              </div>
            </div>
          </div>
          <div className="middle__content ">
            <div className="job__post">
              <div className="icon__text">
                <i className="fa-light fa-clock" />
              </div>
              <div className="content">
                <span>Publié: {formatDate(list.created_at)}</span>
                <span></span>
              </div>
            </div>
            <div className="applied__status">
              <span> </span>
            </div>
          </div>
          <div className="action">
            <button onClick={() => handleEdit(list.id)} className="action__btn">
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2449 17.0633H1.93724V4.7556H9.33304L10.4519 3.63672H1.93724C1.64049 3.63672 1.3559 3.7546 1.14607 3.96443C0.936241 4.17426 0.818359 4.45885 0.818359 4.7556V17.0633C0.818359 17.36 0.936241 17.6446 1.14607 17.8545C1.3559 18.0643 1.64049 18.1822 1.93724 18.1822H14.2449C14.5417 18.1822 14.8263 18.0643 15.0361 17.8545C15.2459 17.6446 15.3638 17.36 15.3638 17.0633V8.67168L14.2449 9.79057V17.0633Z"
                  fill="#0B0D28"
                />
                <path
                  d="M17.8246 3.07061L15.9258 1.17527C15.8415 1.09092 15.7414 1.024 15.6312 0.978343C15.521 0.932683 15.4028 0.90918 15.2835 0.90918C15.1641 0.90918 15.046 0.932683 14.9358 0.978343C14.8255 1.024 14.7254 1.09092 14.6412 1.17527L6.91646 8.93097L6.29105 11.6362C6.26441 11.7673 6.26721 11.9027 6.29925 12.0326C6.3313 12.1626 6.39179 12.2838 6.47638 12.3876C6.56097 12.4914 6.66755 12.5752 6.78846 12.6329C6.90937 12.6907 7.0416 12.721 7.17564 12.7217C7.24492 12.7293 7.31483 12.7293 7.38411 12.7217L10.1168 12.1199L17.8246 4.35291C17.9091 4.2688 17.9761 4.16887 18.0218 4.05885C18.0676 3.94883 18.0911 3.83088 18.0911 3.71176C18.0911 3.59264 18.0676 3.47469 18.0218 3.36467C17.9761 3.25465 17.9091 3.15472 17.8246 3.07061ZM9.5308 11.0794L7.46863 11.535L7.94755 9.49339L13.7622 3.64989L15.3511 5.23591L9.5308 11.0794ZM15.9878 4.60038L14.3989 3.01437L15.2722 2.12575L16.8724 3.72301L15.9878 4.60038Z"
                  fill="#0B0D28"
                />
              </svg>
            </button>
            <button onClick={() => handleShow(list.id)} className="action__btn">
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
            <button onClick={() => handleDelete(list.id)} className="action__btn">
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
            <button className="action__operation pending">En cours</button>
          </div>
        </div>
            ))}
        
      </div>
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
  <div className="d-flex justify-content-center mt-30">
    <p className="copyright">Copyright © 2024 All Rights Reserved by jobpath</p>
  </div>
</div>

        </div>
      </div>
      <Footer />
      <Myscript />
    </>
  );
}