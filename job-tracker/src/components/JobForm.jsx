import './JobForm.css';
import { useState } from "react";

const JobForm = ({ addJob }) => {
  // Form state for title, company, salary, and status
  const [formState, setFormState] = useState({
    title: '',
    company: '',
    salary: '',
    status: 'applied', // Default status
  });

  // Handle input changes and update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formState.title || !formState.company) {
      alert("Title and Company are required fields, please fill them out.");
      return;
    }

    // Construct a new job object with a unique ID
    const newJob = {
      id: Date.now(), // Unique ID based on timestamp
      title: formState.title,
      company: formState.company,
      salary: formState.salary ? parseFloat(formState.salary) : null, // Convert salary to number if provided
      status: formState.status,
    };

    // Add the new job and reset the form
    addJob(newJob);
    setFormState({
      title: '',
      company: '',
      salary: '',
      status: 'applied', // Reset to default status
    });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      {/* Input for title */}
      <div>
        <label htmlFor="title">Job Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Input for company */}
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          required
        />
      </div>

      {/* Input for salary (optional) */}
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formState.salary}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      {/* Select for status */}
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formState.status}
          onChange={handleChange}
        >
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offered">Offered</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Submit button */}
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;