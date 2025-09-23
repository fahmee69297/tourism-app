import { useLocation, Link } from "react-router-dom";
import { packages } from "./data/packagesData";

function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  // Filter packages by title
  const results = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((r, i) => (
            <li key={i}>
              <Link to={r.route}>{r.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
