import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
export default function JobItem({ data }) {
    const [showjob, setShowjob] = useState(false);
  return (
    <Paper className="jobitem" elevation={3}>
      <div className="date-posted">
        <Box>
          {" "}
          ⏳ Posted 10 days ago{/* its not coming in api so placed dummy */}
        </Box>
      </div>
      <div className="company-info">
        <img src={data.logoUrl} />
        <div className="info">
          <p className="name">{data.companyName}</p>
          <p className="role">{data.jobRole}</p>
          <p className="loc">{data.location}</p>
        </div>
      </div>
      <p className="salary">
        Estimated Salary: ₹{data.minJdSalary || 0} - {data.maxJdSalary || "-"}{" "}
        LPA ✅
      </p>
      <div className="company">
        <p>About Company: </p>
        <h3>About us</h3>
        <p className="jobData">{data.jobDetailsFromCompany}</p>
        {!showjob && (
          <button className="view-job" onClick={() => setShowjob(!showjob)}>
            View Job
          </button>
        )}
      </div>
      {data.minExp && (
        <div className="exp-block">
          <p>Minimum Experience</p>
          <h3>{data.minExp} Years</h3>
        </div>
      )}
      <div className="btn-wrapper">
        <Button variant="contained" color="success" size="large">
          ⚡ Easy Apply
        </Button>
        <Button
          variant="contained"
          className="referral-btn"
          color="success"
          size="large"
        >
          <Stack sx={{ marginRight: "10px" }} direction="row" spacing={1}>
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
          </Stack>
          Unlock Referral asks
        </Button>
      </div>
    </Paper>
  );
}
