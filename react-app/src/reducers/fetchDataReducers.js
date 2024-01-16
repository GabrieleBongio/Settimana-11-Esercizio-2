import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SEARCH_SUCCESS,
  FETCH_DATA_COMPANY_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/fetchData";

const initialState = {
  searchData: null,
  companyData: null,
  loading: false,
  error: null,
};

const fetchDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null, searchData: null, companyData: null };
    case FETCH_DATA_SEARCH_SUCCESS:
      return { ...state, loading: false, searchData: action.payload };
    case FETCH_DATA_COMPANY_SUCCESS:
      return { ...state, loading: false, companyData: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default fetchDataReducers;
