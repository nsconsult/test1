"use client";
import React, { useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderEntreprise";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarEntreprise";
import apiServices from '@/app/services/apiService';

interface JobsCategorie {
  id: number;
  name: string;
}
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
  deadline?:string;
}

export default function Home({ params }: { params: { show: string } }) {
  const [jobsCategorie, setJobsCategorie] = useState<JobsCategorie[]>([]);
  const [jobsData, setJobsData] = useState<Jobs | null>(null);
  const id = params.show;
  const [newJob, setNewJob] = useState<Jobs>({
    id: 0,
    title: '',
    description: '',
    category_id: '',
    location: '',
    experience_level: '',
    contract_type: '',
    min_salary: '',
    max_salary: '',
    deadline:''
  });
  useEffect(() => {
    const loadJobs = async () => {
      try {
        if (jobsData === null) {
          const jobsCategorieData = await apiServices.getAllResources('job_categories');
          const jobsData = await apiServices.getResourceById('job_listings', id);
  
          setJobsData(jobsData);
          setJobsCategorie(jobsCategorieData);
          setNewJob({
            id: jobsData.id,
            title: jobsData.title || '',
            description: jobsData.description || '',
            category_id: jobsData.category_id || '',
            location: jobsData.location || '',
            experience_level: jobsData.experience_level || '',
            contract_type: jobsData.contract_type || '',
            min_salary: jobsData.min_salary || '',
            max_salary: jobsData.max_salary || '',
            deadline: jobsData.deadline || ''
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    loadJobs();
  }, [id]);


  return (
    <>
      <Css />
      <Header />
      {/* xxx */}
      <div className="template-dashboard">
        <div className="dashboard__content d-flex">
          <Sidebar />
          <div className="dashboard__right">
            <div className="dash__content">
              <div className="my__profile__tab radius-16 bg-white">
                <nav>
                  <div className="nav nav-tabs">
                    <a className="nav-link active" href="#info">{"Detail de l'entreprise"}</a>
                    <a className="nav-link" href="#address">{"Contact Information"}</a>
                  </div>
                </nav>
                <div className="my__details" id="info">
                <div className="info__top">
                     <div className="author__image">
                       {/* <img className="p-4" src="/assets/img/icon/google.svg" alt="" /> */}
                     </div>
                   </div>
                  <form>
                    <div className="info__field">
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                        <div className="rt-input-group">
                          <label htmlFor="jt">Titre</label>
                          <input
                            className="form-control"
                            type="text"
                            id="jt"
                            placeholder="Software Engineer"
                            value={newJob.title}
                            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                            required readOnly
                          />
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="jt">Deadline</label>
                          <input
                            className="form-control"
                            type="text"
                            id="jt"
                            placeholder="Software Engineer"
                            value={newJob.deadline}
                            onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                            required readOnly
                          />
                        </div>
                      </div>
                      <div className="row row-cols-1">
                        <div className="rt-input-group">
                          <label htmlFor="jd">Description</label>
                          <textarea
                            className="form-control"
                            id="jd"
                            placeholder="Enter Job Description"
                            value={newJob.description}
                            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                            required readOnly
                          />
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                        <div className="rt-input-group">
                          <label htmlFor="ws">Niveau Expérience</label>
                          <input
                            className="form-control"
                            type="text"
                            id="jt"
                            placeholder="Software Engineer"
                            value={newJob.experience_level}
                            onChange={(e) => setNewJob({ ...newJob, experience_level: e.target.value })}
                            required readOnly
                          />
                          {/* <select
                            name="ws"
                            id="ws"
                            className="form-select"
                            value={newJob.experience_level}
                            onChange={(e) => setNewJob({ ...newJob, experience_level: e.target.value })}
                          aria-readonly>
                            <option value="" disabled>Selectionner</option>
                            <option value={'junior'}>Junior</option>
                            <option value={'mid'}>Confirmé</option>
                            <option value={'senior'}>Senior</option>
                          </select> */}
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="wd">Type de Contrat</label>
                          <input
                            className="form-control"
                            type="text"
                            id="jt"
                            placeholder="Software Engineer"
                            value={newJob.contract_type}
                            onChange={(e) => setNewJob({ ...newJob, contract_type: e.target.value })}
                            required readOnly
                          />
                          {/* <select
                            name="wd"
                            id="wd"
                            className="form-select"
                            value={newJob.contract_type}
                            onChange={(e) => setNewJob({ ...newJob, contract_type: e.target.value })}
                          >
                            <option value="" disabled>Selectionner</option>
                            <option value={"full_time"}>Temps Plein</option>
                            <option value={"part_time"}>Temps Partiel</option>
                            <option value={"internship"}>Internship</option>
                          </select> */}
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                      <div className="rt-input-group">
                          <label htmlFor="cat">Catégorie</label>
                          <select
                            name="cat"
                            id="cat"
                            className="form-select"
                            value={newJob.category_id}
                            onChange={(e) => setNewJob({ ...newJob, category_id: e.target.value })}
                          >
                            <option value="" disabled>Selectionner</option>
                            {jobsCategorie.map((category) => (
                              <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="loc">Localisation</label>
                          <input
                            className="form-control"
                            type="text"
                            id="loc"
                            placeholder="Localisation"
                            value={newJob.location}
                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                            readOnly/>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="min_salary">Salaire Minimum</label>
                          <input
                            className="form-control"
                            type="text"
                            id="min_salary"
                            placeholder="Salaire Minimum"
                            value={newJob.min_salary}
                            onChange={(e) => setNewJob({ ...newJob, min_salary: e.target.value })}
                            readOnly/>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="max_salary">Salaire Maximum</label>
                          <input
                            className="form-control"
                            type="text"
                            id="max_salary"
                            placeholder="Salaire Maximum"
                            value={newJob.max_salary}
                            onChange={(e) => setNewJob({ ...newJob, max_salary: e.target.value })}
                            readOnly/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
