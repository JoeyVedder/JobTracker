import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      {/* Render job title */}
      <h2 className="job-title">{job.title}</h2>
      
      {/* Render job company */}
      <p className="job-company">{job.company}</p>
      
      {/* Render job salary */}
      {job.salary && <p className="job-salary">Salary: ${job.salary}</p>}
      
      {/* Render job status with className based on status (lowercased) */}
      <p className={`job-status ${job.status.toLowerCase()}`}>
        Status: {job.status}
      </p>
      {/* Delete Button */}
      <button className="delete-button" onClick={() => onDelete(job.id)}></button>
    </div>
  );
};

export default JobCard;