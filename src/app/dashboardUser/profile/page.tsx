/* eslint-disable @next/next/no-img-element */
"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Css from "@/components/CssEntrepise";
import Header from "@/components/HeaderCandidat";
import Footer from "@/components/FooterEntrepise";
import Myscript from "@/components/ScriptEntreprise";
import Sidebar from "@/components/SidbarDemandeur";
import apiService from "@/app/services/apiService";
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
type ProfileFields = {
  id: string;
  user_id: string;
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
};
export default function Home() {
  // const [file, setFile] = useState<File | null>(null);
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);
  ///image
  const [, setProfile] = useState<Profile[]>([]);
  // const [image, setImage] = useState(null); // État pour l'image
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
  const loadProfile = async () => {
    try {
      const jobsData = await apiService.getAllResources("user_profiles");
      console.log(jobsData[0]);


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
  
  const handleSavePersonnalInfo = async (userId:string) => {
    const updatedFields: Partial<ProfileFields> = {};
  
    // Itérer sur les clés de l'objet updateProfile
    for (const key in updateProfile) {
      // Vérifier si le champ a une valeur
      if (updateProfile[key as keyof ProfileFields]) {
        updatedFields[key as keyof ProfileFields] = updateProfile[key as keyof ProfileFields];
      }
    }
  
    try {
      await apiService.updateResource(`user_profiles`, userId, updatedFields);
      loadProfile();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSavePersonnalInfoUser = async (userid:string) => {
    const updatedFields: Partial<ProfileFields> = {};
  
    // Itérer sur les clés de l'objet updateProfile
    for (const key in updateProfile) {
      // Vérifier si le champ a une valeur
      if (updateProfile[key as keyof ProfileFields]) {
        updatedFields[key as keyof ProfileFields] = updateProfile[key as keyof ProfileFields];
      }
    }
  
    try {
      await apiService.updateResource(`users`, userid, updatedFields);
      loadProfile();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSavePersonnalInfo = async (userId:unknown) => {
  //   // e.preventDefault();
  
  //   // Filtrer les champs modifiés
  //   const updatedProfile = {};
  //   Object.keys(updateProfile).forEach((key) => {
  //     const newValue = updateProfile[key];
  //     const oldValue = profile?.[key];
  
  //     if (newValue !== oldValue && newValue !== undefined && newValue !== "") {
  //       updatedProfile[key] = newValue;
  //     }
  //   });
  
  //   if (Object.keys(updatedProfile).length === 0) {
  //     console.warn("Aucun champ n'a été modifié.");
  //     return;
  //   }
  
  //   try {
  //     await apiService.updateResource(`user_profiles`, userId, updatedProfile);
  //     loadProfile();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleSavePersonnalInfoUser = async (userid:unknown) => {
  //   // e.preventDefault();
  
  //   // Filtrer les champs modifiés
  //   const updatedProfile = {};
  //   Object.keys(updateProfile).forEach((key) => {
  //     const newValue = updateProfile[key];
  //     const oldValue = profile?.[key];
  
  //     if (newValue !== oldValue && newValue !== undefined && newValue !== "") {
  //       updatedProfile[key] = newValue;
  //     }
  //   });
  
  //   if (Object.keys(updatedProfile).length === 0) {
  //     console.warn("Aucun champ n'a été modifié.");
  //     return;
  //   }
  
  //   try {
  //     await apiService.updateResource(`users`, userid, updatedProfile);
  //     loadProfile();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  
  const had = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      Object.values(e.target.files).forEach((file) => {
        formData.append("file", file);
      });

      const response = await fetch("/api/image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("Upload ok : " + result.name);
        try {
          await apiService.updateResource(`user_profiles`, updateProfile.user_id, {
            profile_picture_path: result.path,
          });
          loadProfile(); 
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Upload failed");
      }
    }
  };

  useEffect(() => {
    loadProfile();
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
              <div className="my__profile__tab radius-16 bg-white">
                <nav>
                  <div className="nav nav-tabs">
                    <a className="nav-link active" href="#info">
                      Company Details
                    </a>
                    <a className="nav-link " href="#social">
                      Social Links
                    </a>
                    {/* <a className="nav-link " href="#member">
                      Member
                    </a> */}
                    <a className="nav-link" href="#address">
                      Contact Information
                    </a>
                  </div>
                </nav>
                <div className="my__details" id="info">
                  <div className="info__top">
                    <div className="author__image">
                      <img
                        className="p-4"
                        src={updateProfile.profile_picture_path}
                        alt=""
                      />
                    </div>
                    <div className="select__image">
                      <label htmlFor="file" className="file-upload__label">
                        Ajouter une photo
                      </label>
                      <input
                        type="file"
                        className="file-upload__input"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={had}
                        required
                      />
                    </div>
                    {/* <input type="file" name="file" onChange={had} /> */}
                    <div className="delete__data">
                      <i className="fa-light fa-trash-can" />
                    </div>
                  </div>
                  <div className="info__field">
                    <div className="row row-cols-sm-2 row-cols-1 g-3">
                      <div className="rt-input-group">
                        <label htmlFor="name">Nom</label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          value={updateProfile.name}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              name: e.target.value,
                            })
                          }
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          value={updateProfile.email}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              email: e.target.value,
                            })
                          }
                          placeholder="jobpath@gmqail.com"
                          required
                        />
                      </div>
                    <button
                      onClick={()=>handleSavePersonnalInfoUser(updateProfile.user_id)}
                      type="submit"
                      className="rts__btn fill__btn"
                    >
                      Enregistrer
                    </button>
                    </div>
                    <div className="row row-cols-sm-2 row-cols-1 g-3">
                      <div className="rt-input-group">
                        <label htmlFor="phone">Téléphone</label>
                        <input
                          className="form-control"
                          type="text"
                          id="phone"
                          value={updateProfile.phone}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              phone: e.target.value,
                            })
                          }
                          placeholder={"+880171234567"}
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="url">Site web</label>
                        <input
                          className="form-control"
                          type="url"
                          id="url"
                          value={updateProfile.website}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              website: e.target.value,
                            })
                          }
                          placeholder="jobpath.com"
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="row row-cols-sm-2 row-cols-1 g-3">
                      <div className="rt-input-group">
                        <label htmlFor="fd">Founded Date</label>
                        <input
                          value={updateProfile.founded_date}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              founded_date: e.target.value,
                            })
                          }
                          className="form-control"
                          type="date"
                          placeholder="DD/MM/YY"
                          id="fd"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="cs">Company Size</label>
                        <input
                          value={updateProfile.company_size}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              company_size: e.target.value,
                            })
                          }
                          className="form-control"
                          type="number"
                          placeholder="20"
                          id="cs"
                          name="cs"
                          required
                        />
                        {/* <select name="cs" id="cs" className="form-select">
                          <option value={18}>10-20</option>
                          <option value={19}>20-30</option>
                          <option value={20}>30-40</option>
                          <option value={21}>40-50</option>
                          <option value={22}>50-60</option>
                        </select> 
                      </div>
                    </div>*/}
                    {/*<div className="row row-cols-sm-2 row-cols-1 g-3">
                      <div className="rt-input-group">
                        <label htmlFor="cc">Company categories</label>
                        <select name="cc" id="cc" className="form-select">
                          <option value={18}>Design &amp; Development</option>
                          <option value={19}>Digital Marketing</option>
                          <option value={20}>Writing &amp; Translation</option>
                          <option value={21}>Music &amp; Audio</option>
                          <option value={22}>Video &amp; Animation</option>
                        </select> 
                        <input
                          value={updateProfile.company_categories}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              company_categories: e.target.value,
                            })
                          }
                          className="form-control"
                          type="text"
                          placeholder="Design"
                          id="cc"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="pv">Public For Profile View</label>
                        <select
                          name="pv"
                          id="pv"
                          className="form-select"
                          value={updateProfile.public_profile_view}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              public_profile_view: e.target.value,
                            })
                          }
                        >
                          <option value="" disabled>Selectionner</option>
                          <option value={1}>Yes</option>
                          <option value={2}>No</option>
                        </select>
                      </div>
                    </div>*/}

                    {/* editor area */}
                    <div className="rt-input-group">
                      <div className="textarea" />
                      <textarea
                        className="form-control"
                        value={updateProfile.description}
                        onChange={(e) =>
                          setupdateProfile({
                            ...updateProfile,
                            description: e.target.value,
                          })
                        }
                        name="Description"
                        id="Description"
                        placeholder="Description"
                      ></textarea>
                    </div>
                    
                    <button
                      onClick={()=>handleSavePersonnalInfo(updateProfile.user_id)}
                      type="submit"
                      className="rts__btn fill__btn"
                    >
                      Enregistrer
                    </button>
                    {/* editor area end */}
                  </div>
                </div>
              </div>
              {/* social links */}
              <h6 className="fw-medium mt-4 mb-4">Réseau social</h6>
              <div
                className="social__links p-30 radius-16 bg-white"
                id="social"
              >
                <div className="info__field">
                  <div className="row row-cols-sm-2 row-cols-1 g-3">
                    <div className="rt-input-group">
                      <label htmlFor="Facebook">Facebook</label>
                      <input
                        className="form-control"
                        type="url"
                        id="Facebook"
                        placeholder="WWW.facebook.com/jobpath"
                        value={updateProfile.facebook}
                        onChange={(e) =>
                          setupdateProfile({
                            ...updateProfile,
                            facebook: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="rt-input-group">
                      <label htmlFor="Linkedin">Linkedin</label>
                      <input
                        className="form-control"
                        type="url"
                        id="Linkedin"
                        value={updateProfile.linkedin}
                        onChange={(e) =>
                          setupdateProfile({
                            ...updateProfile,
                            linkedin: e.target.value,
                          })
                        }
                        placeholder="WWW.Linkedin.com/jobpath"
                        required
                      />
                    </div>
                  </div>
                  <div className="row row-cols-sm-2 row-cols-1 g-3">
                    <div className="rt-input-group">
                      <label htmlFor="Behance">Behance</label>
                      <input
                        className="form-control"
                        type="url"
                        id="Behance"
                        value={updateProfile.behance}
                        onChange={(e) =>
                          setupdateProfile({
                            ...updateProfile,
                            behance: e.target.value,
                          })
                        }
                        placeholder="WWW.behance.com/jobpath"
                        required
                      />
                    </div>
                    <div className="rt-input-group">
                      <label htmlFor="Dribbble">Dribbble</label>
                      <input
                        className="form-control"
                        type="url"
                        id="Dribbble"
                        value={updateProfile.dribbble}
                        onChange={(e) =>
                          setupdateProfile({
                            ...updateProfile,
                            dribbble: e.target.value,
                          })
                        }
                        placeholder="WWW.dribbble.com/jobpath"
                        required
                      />
                    </div>
                    <button
                      onClick={()=>handleSavePersonnalInfo(updateProfile.user_id)}
                      type="submit"
                      className="rts__btn fill__btn"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
              {/* social links end */}
              {/* Member area */}
              {/* <h6 className="fw-medium mt-4 mb-4">Member</h6>
             
              {/* Member area end */}
              {/* address area */}
              <h6 className="fw-medium mt-4 mb-4">Addresse</h6>
              <div
                className="social__links radius-16 p-30 bg-white"
                id="address"
              >
                <div className="info__field">
                  <div className="row row-cols-md-2 row-cols-1">
                    <div className="info__field">
                      <div className="rt-input-group">
                        <label htmlFor="Country">Pays</label>
                        <input
                          className="form-control"
                          type="text"
                          id="Country"
                          value={updateProfile.country}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              country: e.target.value,
                            })
                          }
                          placeholder="Togo"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="State">Vile</label>
                        <input
                          className="form-control"
                          type="text"
                          id="State"
                          value={updateProfile.state}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              state: e.target.value,
                            })
                          }
                          placeholder="Togo"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="pr">Présent Addresse</label>
                        <input
                          className="form-control"
                          type="text"
                          id="pr"
                          value={updateProfile.address}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              address: e.target.value,
                            })
                          }
                          placeholder="2715 Ash Dr. San Jose,USA"
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="ps"> Code Postal</label>
                        <input
                          className="form-control"
                          type="text"
                          id="ps"
                          value={updateProfile.postal_code}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              postal_code: e.target.value,
                            })
                          }
                          placeholder={"8340"}
                          required
                        />
                      </div>
                      <div className="rt-input-group">
                        <label htmlFor="lt">latitude</label>
                        <input
                          className="form-control"
                          type="text"
                          id="lt"
                          value={updateProfile.latitude}
                          onChange={(e) =>
                            setupdateProfile({
                              ...updateProfile,
                              latitude: e.target.value,
                            })
                          }
                          placeholder={"0.0"}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="info__field">
                        <h6 className="font-20 fw-medium mb-2 mt-4 mt-md-0">
                          My location
                        </h6>
                        <div className="gmap">
                          <div className="user__location">
                            <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=reacthemes+(reacthemes)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
                          </div>
                        </div>
                        <div className="rt-input-group">
                          <label htmlFor="longitude">longitude</label>
                          <input
                            className="form-control"
                            type="text"
                            id="longitude"
                            value={updateProfile.longitude}
                            onChange={(e) =>
                              setupdateProfile({
                                ...updateProfile,
                                longitude: e.target.value,
                              })
                            }
                            placeholder="0.00.000.0000"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={()=>handleSavePersonnalInfo(updateProfile.user_id)}
                      type="submit"
                      className="rts__btn fill__btn"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
              {/* address area end */}
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
