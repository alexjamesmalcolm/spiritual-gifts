import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./BadResultsLink.module.css";

const BadResultsLink = () => (
  <div className={styles.container}>
    <Helmet>
      <title>Spiritual Gifts - No results found</title>
    </Helmet>
    <p>No results found at this link</p>
    <Link to="/">Return Home</Link>
  </div>
);

export default BadResultsLink;
