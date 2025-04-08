import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Footer from "./components/Footer";
import wecodedLogo from "./assets/wecoded-logo.webp";
import Header from "./components/Header";

const App: React.FC = () => {
  const { darkMode } = useContext(ThemeContext)!;
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=wecoded")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const showMoreArticles = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <>
      <Header />
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 id="celebrating-diversity">Celebrating Diversity in Tech</h1>
              <p className="text-secondary fw-medium">
                Discover powerful stories from voices often overlooked in the tech world, 
                as they share their paths, struggles, and victories.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-5 rounded-top">
          <div className="row">
            {loading ? (
              <div className="d-flex justify-content-center w-100">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {articles.slice(0, visibleCount).map((article, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={`card ${darkMode ? "card-dark" : ""}`}>
                      <div
                        className="card-img-top rounded-top"
                        style={{
                          background: article.cover_image
                            ? `url(${article.cover_image}) center/cover no-repeat`
                            : "linear-gradient(135deg, #4531ea, #9d00e5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "180px",
                        }}
                      >
                        {!article.cover_image && (
                          <img
                            className="logo"
                            src={wecodedLogo}
                            alt="Logo"
                            style={{
                              maxWidth: "30%",
                              maxHeight: "30%",
                              filter: "brightness(2.1)",
                              margin: "auto",
                            }}
                          />
                        )}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <p className="text-muted mb-2">
                          👤 <strong>{article.user?.name}</strong>
                        </p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {!loading && visibleCount < articles.length && (
            <div className="text-center mt-4">
              <button className="btn btn-outline-secondary" onClick={showMoreArticles}>
                Show More
              </button>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;




