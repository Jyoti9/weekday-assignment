import {createSlice, configureStore} from '@reduxjs/toolkit';
const initState = {jobList: []}
const jobSlice =  createSlice({
    name: 'job',
    initialState: initState,
    reducers: {
        changeData(state,action){
           state.jobList = action.payload
        }
    }
})
export function fetchData(){
    return (dispatch)=>{
           fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ limit: 20, offset: 0 }),
           })
             .then((response) => response.json())
             .then((result) => {
               console.log(result);
               dispatch(jobActions.changeData(result.jdList));
             })
             .catch((error) => console.error(error));
    }
}
export const jobActions = jobSlice.actions;
const store = configureStore({reducer: jobSlice.reducer});
export default store;