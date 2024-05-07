import { useEffect } from "react"
import JobItem from "./JobItem";
import { fetchData } from "../store";
import {useSelector, useDispatch} from 'react-redux';

export default function JobList(){
    const storestate = useSelector((state)=> state);
    const dispatch = useDispatch();
    useEffect(()=> {
     dispatch(fetchData());
    },[])
return (
  <div className="jobList">
    {storestate.jobList.map((job) => (
      <JobItem key={job.jdUid} data={job} />
    ))}
  </div>
);
}