import { createSlice, configureStore, current } from "@reduxjs/toolkit";
const initState = { jobList: [], allJobs: [], isLoading: false}; //jobList for resultant job and alljobs for all fetched jobs
const filterInit = {
  jobRole: [],
  location: [],
  minJdSalary: "",
  minExp: "",
  companyName: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: filterInit,
  reducers: {
    updateField(state, action) {
      state[action.payload.label] = action.payload.value;
      if(action.payload.value === '' || action.payload.value === undefined || !action.payload.value.length ){
        checkAllFilter(current(state));
      }
    },
  },
});
const jobSlice = createSlice({
  name: "job",
  initialState: initState,
  reducers: {
    changeData(state, action) {
      state.allJobs = action.payload;
      if(!state.jobList.length){
        state.jobList = state.allJobs;
      }
      console.log(state.jobList);
    },
    changeLoading(state){
            state.isLoading = !state.isLoading;
    },
    filterData(state, action) {
      console.log(action.payload);
      const stateReal = current(state);
    const copySource = !state.jobList.length ? [...stateReal.allJobs] : [...stateReal.jobList]
      const copyData = copySource;
      if (action.payload.key === "jobRole") {
        const filters = action.payload.values.reduce((reducer, item) => {
          reducer.push(item.value);
          return reducer;
        }, []);
        if (filters.length) {
          state.jobList = copyData.filter((item) =>
            filters.includes(item[action.payload.key])
          );
        } else {
          checkAllFilter();
        }
      } else if (
        action.payload.key === "minExp" ||
        action.payload.key === "maxJdSalary"
      ) {
        state.jobList = copyData.filter(
          (item) =>
            action.payload.values.value >= item[action.payload.key] &&
            item[action.payload.key] !== null
        );
      } else if (action.payload.key === "location") {
        console.log("sjbsj");
        const filters = action.payload.values.reduce((reducer, item) => {
          reducer.push(item.value);
          return reducer;
        }, []);
        if (filters.length == 1 && filters.includes("remote")) {
          state.jobList = copyData.filter(
            (item) => "remote" === item[action.payload.key]
          );
        } else if (filters.length > 1 && filters.includes("remote")) {
          state.jobList = copyData.filter(
            (item) =>
              "remote" === item[action.payload.key] ||
              "remote" !== item[action.payload.key]
          );
        } else if (filters.length == 1 && !filters.includes("remote")) {
          state.jobList = copyData.filter(
            (item) => "remote" !== item[action.payload.key]
          );
        }
      } else if (action.payload.key === "companyName") {
        console.log(action.payload,'company')
         state.jobList = copyData.filter((item) =>
           item[action.payload.key]
             .toLowerCase()
             .includes(action.payload.values.toLowerCase().trim())
         );
      }
    },
  },
});
export function fetchData() {
jobActions.changeLoading();
  return (dispatch) => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit: 30, offset: 0 }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        jobActions.changeLoading();
        dispatch(jobActions.changeData(result.jdList));
      })
      .catch((error) => console.error(error));
  };
}
function checkAllFilter(filters){
    console.log('ss')
   for (var key in filters) {
     jobActions.filterData({values: filters.key,key: key})
   }
}
export const jobActions = jobSlice.actions;
export const filterActions = filterSlice.actions;
const store = configureStore({
  reducer: { job: jobSlice.reducer, filter: filterSlice.reducer },
});
export default store;
