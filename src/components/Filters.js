import Select from "react-select";
import { InputBase } from "@mui/material";
import { filterActions, jobActions } from "../store";
import {useDispatch, useSelector} from 'react-redux';
import {
  roleoptions,
  payOptions,
  experienceOptions,
  employeeOptions,
  remoteOptions,
} from "../constant";
export default function Filters() {
    const dispatch = useDispatch();
    const filterState = useSelector((state)=> state.filter)
    console.log(filterState);
    function onChangeRole(values,key){
        console.log(values);
         dispatch(jobActions.filterData({ values, key }));
         dispatch(filterActions.updateField({label: key, value: values}));
    }
  
  return (
    <>
      <div className="filter-wrap">
        <Select
          options={roleoptions}
          isMulti
          name="roles"
          onChange={(event) => onChangeRole(event, "jobRole")}
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
          name="experience"
          className="basic-multi-select"
          onChange={(event) => onChangeRole(event, "minExp")}
          classNamePrefix="select"
          placeholder="Experience"
        />
        <Select
          options={remoteOptions}
          isMulti
          name="remote"
          className="basic-multi-select"
          onChange={(event) => onChangeRole(event, "location")}
          classNamePrefix="select"
          placeholder="Remote"
        />
        <Select
          options={payOptions}
          name="pay"
          className="basic-multi-select"
          onChange={(event) => onChangeRole(event, "maxJdSalary")}
          classNamePrefix="select"
          placeholder="Minimum base pay salary"
        />
        <InputBase
          placeholder="Search Company Name"
          className="company-input"
          onChange={(event) => onChangeRole(event.target.value, "companyName")}
        />
      </div>
    </>
  );
}
