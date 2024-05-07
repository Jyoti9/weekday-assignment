import Select from "react-select";
import { InputBase } from "@mui/material";
export default function Filters() {
    const options = [
      { value: "chocolate", label: "android" },
      { value: "frontend", label: "frontend" },
      { value: "ios", label: "ios" },
      { value: "tech lead", label: "tech lead" },
      { value: "backend", label: "backend" },
    ];
     const employeeOptions = [
       { value: "1-10", label: "1-10" },
       { value: "11-20", label: "11-20" },
       { value: "21-50", label: "21-50" },
       { value: "50-100", label: "50-100" },
       { value: "100+", label: "100+" },
     ];
       const experienceOptions = [
         { value: "1", label: "1" },
         { value: "2", label: "2" },
         { value: "3", label: "3" },
         { value: "4", label: "4" },
         { value: "5", label: "5" },
         { value: "6", label: "6" },
         { value: "7", label: "7" },
         { value: "8", label: "8" },
         { value: "9", label: "9" },
       ];
        const payOptions = [
          { label: "0L", value: "0" },
          { label: "10L", value: "1" },
          { label: "20L", value: "2" },
          { label: "30L", value: "3" },
          { label: "40L", value: "4" },
          { label: "50L", value: "5" },
          { label: "60L", value: "6" },
          { label: "70L", value: "7" },
        ];
        const remoteOptions = [
          { value: "remote", label: "remote" },
           { value: "hybrid", label: "hybrid" },
          { value: "inoffice", label: "In-office" }
        ];
  return (
    <>
      <div className="filter-wrap">
        <Select
          options={options}
          isMulti
          name="roles"
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Roles"
        />
        <Select
          options={employeeOptions}
          isMulti
          name="employee"
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Number of Employees"
        />
        <Select
          options={experienceOptions}
          isMulti
          name="experience"
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Experience"
        />
        <Select
          options={remoteOptions}
          isMulti
          name="remote"
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Remote"
        />
        <Select
          options={payOptions}
          isMulti
          name="pay"
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Minimum base pay salary"
        />
        <InputBase
          placeholder="Search Company Name"
          className="company-input"
        />
      </div>
    </>
  );
}
