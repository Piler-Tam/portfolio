import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [error, setError] = useState(null);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    if (!openSource.display) {
      return;
    }

    const getRepoData = async () => {
      try {
        const response = await fetch("/profile.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.data && data.data.user && data.data.user.pinnedItems) {
          setrepo(data.data.user.pinnedItems.edges);
          setError(null);
        } else {
          throw new Error("Invalid response format from profile.json");
        }
      } catch (error) {
        console.error(`Error loading projects: ${error.message}`);
        setError(error.message);
        setrepo([]);
      }
    };
    getRepoData();
  }, []);

  if (!openSource.display) {
    return null;
  }

  if (error) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="error-message">
          <p>Unable to load projects. Please check the configuration.</p>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
                return null;
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
