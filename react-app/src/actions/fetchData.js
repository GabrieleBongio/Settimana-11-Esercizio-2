export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SEARCH_SUCCESS = "FETCH_DATA_SEARCH_SUCCESS";
export const FETCH_DATA_COMPANY_SUCCESS = "FETCH_DATA_COMPANY_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSearchSuccess = (data) => ({ type: FETCH_DATA_SEARCH_SUCCESS, payload: data });
const fetchDataCompanySuccess = (data) => ({ type: FETCH_DATA_COMPANY_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchDataSearch = (query) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      const { data } = await resp.json();
      dispatch(fetchDataSearchSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDataCompany = (company) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + company);
      const { data } = await resp.json();
      dispatch(fetchDataCompanySuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
