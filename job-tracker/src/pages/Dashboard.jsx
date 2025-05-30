import { useEffect, useState } from "react";
import JobForm from "../components/JobForm";
import JobCard from "../components/JobCard";
import "./Dashboard.css";

const Dashboard = () => {
  // Initialize jobs state and load from localStorage if available
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  // Save jobs to localStorage whenever the jobs state changes
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add a new job to the jobs list
  const addJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  // Delete a job from the jobs list
  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  return (
    <div className="dashboard">
      <h1>Job Application Tracker</h1>
      <JobForm addJob={addJob} />
      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onDelete={deleteJob} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;