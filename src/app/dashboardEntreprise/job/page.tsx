"use client";

import React, { useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderEntreprise";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarEntreprise";
import apiServices from '@/app/services/apiService';
import { useRouter } from "next/navigation";

interface JobsCategorie {
  id: number;
  name: string;
};

export default function Home() {
  const [jobsCategorie, setJobsCategorie] = useState<JobsCategorie[]>([]);
  const [newJob, setNewJob] = useState({
    user_id:'',
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
  const router = useRouter();
  const [user,setUser]=useState({
    id: "",
  name: "",
  email: "",
  role: "",
  profile_picture_path:""
  });
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await apiServices.getAllResources('job_categories');
        const userData = await apiServices.getAllResources('users/auth');
          setUser({
            id:userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            profile_picture_path:userData.profile.profile_picture_path
          });
        setNewJob((prevState) => ({
          ...prevState,
          user_id: userData.id
        }));
        console.log(userData);
        
        setJobsCategorie(jobsData);
      } catch (error) {
        console.error(error);
      }
    };
    loadJobs();
  }, []);

  const handleCreateJob = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const createdJob = await apiServices.createResource('job_listings', newJob);
      setJobsCategorie([...jobsCategorie, createdJob]);
      setNewJob({
        user_id:user.id,
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
      router.push('/dashboardEntreprise/job/list');
    } catch (error) {
      console.error(error);
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
                      <img className="p-4" src={user.profile_picture_path} alt="" />
                    </div>
                  </div>
                  <form onSubmit={handleCreateJob}>
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
                            required
                          />
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="jt">Deadline</label>
                          <input
                            className="form-control"
                            type="date"
                            id="jt"
                            placeholder="Software Engineer"
                            value={newJob.deadline}
                            onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                            required
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
                            required
                          />
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                        <div className="rt-input-group">
                          <label htmlFor="ws">Niveau Expérience</label>
                          <select
                            name="ws"
                            id="ws"
                            className="form-select"
                            value={newJob.experience_level}
                            onChange={(e) => setNewJob({ ...newJob, experience_level: e.target.value })}
                          >
                                                        <option value="" disabled>Selectionner</option>
                            <option value={'junior'}>Junior</option>
                            <option value={'mid'}>Confirmé</option>
                            <option value={'senior'}>Senior</option>
                          </select>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="wd">Type de Contart</label>
                          <select
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
                          </select>
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                        <div className="rt-input-group">
                          <label htmlFor="categoriejob">Categorie de travail</label>
                          <select
                            name="categoriejob"
                            id="categoriejob"
                            className="form-select"
                            value={newJob.category_id}
                            onChange={(e) => setNewJob({ ...newJob, category_id: e.target.value })}
                          >
                            <option value="" disabled>Selectionner</option>
                            {jobsCategorie.map((categorie) => (
                              <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="location">Lieu du travail</label>
                          <input
                            className="form-control"
                            type="text"
                            id="location"
                            value={newJob.location}
                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="row row-cols-sm-2 row-cols-1 g-3">
                        <div className="rt-input-group">
                          <label htmlFor="salarymin">Salary Min</label>
                          <input
                            className="form-control"
                            type="text"
                            id="salarymin"
                            value={newJob.min_salary}
                            onChange={(e) => setNewJob({ ...newJob, min_salary: e.target.value })}
                            required
                          />
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="sm">Salary Max</label>
                          <input
                            className="form-control"
                            type="text"
                            id="sm"
                            value={newJob.max_salary}
                            onChange={(e) => setNewJob({ ...newJob, max_salary: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <button type="submit" className="rts__btn fill__btn">Post Job</button>
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