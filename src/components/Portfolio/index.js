import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        // Fetch your GitHub repositories using the GitHub API.
        fetch('https://api.github.com/users/YagYk/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching GitHub repositories:", error);
                setLoading(false);
            });
    });

    const renderRepositories = () => {
        return (
            <div className="repositories-container">
                {repositories.map((repo, idx) => (
                    <div className="repository-box" key={idx}>
                        <h2 className="repo-name">{repo.name}</h2>
                        <p className="repo-description">{repo.description}</p>
                        <a
                            className="repo-link"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15}
                />
            </h1>
            {loading ? (
                <Loader type="pacman" />
            ) : (
                <div>{renderRepositories()}</div>
            )}
        </div>
    );
}

export default Portfolio;
