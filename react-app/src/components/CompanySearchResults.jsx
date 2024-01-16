import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourites, removeFavourites } from "../actions/favourites";
import { fetchDataCompany } from "../actions/fetchData";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const fetchData = useSelector((state) => state.fetchData);
  const { companyData, loading, error } = fetchData;
  const [isInFavourites, setIsInFavourites] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (favourites.includes(params.company)) {
      setIsInFavourites(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchDataCompany(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleRemove = () => {
    dispatch(removeFavourites(params.company));
    setIsInFavourites(false);
  };

  const handleAdd = () => {
    dispatch(addFavourites(params.company));
    setIsInFavourites(true);
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {isInFavourites ? (
            <Button variant="outline-success" className="m-4" onClick={handleRemove}>
              Remove from favourites
            </Button>
          ) : (
            <Button variant="success" className="m-4" onClick={handleAdd}>
              Add to favourites
            </Button>
          )}
          <Link
            to="/favourites"
            className="btn btn-outline-info
          "
          >
            Favourites
          </Link>
          {loading && <p className="mb-3">Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {companyData && companyData.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
      <div className="mt-5 text-end pt-5">
        <Link to={"/"} className="mt-5 btn btn-outline-info">
          Return to Home
        </Link>
      </div>
    </Container>
  );
};

export default CompanySearchResults;
