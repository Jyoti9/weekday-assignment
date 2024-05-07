import { useEffect, useState } from "react"
import JobItem from "./JobItem";
import { fetchData } from "../store";
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
export default function JobList(){
    const storestate = useSelector((state)=> state.job);
    const loading = storestate.isLoading;
    const dispatch = useDispatch();
    useEffect(()=> {
     dispatch(fetchData());
    },[])
   const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop -10 >
      document.documentElement.offsetHeight ||
    loading
  ) {
    return;
  }
  fetchData();
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [loading]);
return (
 
    <div className="jobList">
      {storestate.jobList.map((job) => (
        <JobItem key={job.jdUid} data={job} />
      ))}
    </div>
);
}