import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NewsCom from './NewsCom';
import axios from 'axios';
import PropTypes from 'prop-types';

function News(props) {
    const [state, setState] = useState({
        status: '',
        results: [],
        error: null
    });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsdata.io/api/1/latest?category=${props.category}&apikey=pub_49188d45832ffa9c363ab4559300c3beb747c&q=pizza`);
                setState({
                    status: response.data.status,
                    results: response.data.results || [],
                    error: null
                });
            } catch (error) {
                console.log(error);
                setState(prevState => ({
                    ...prevState,
                    error: 'Failed to fetch news'
                }));
            }
        };

        fetchNews();
    }, [props.category]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/sports">Sports</Link>
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            <Link className="nav-link" to="/business">Business</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <div className="row">
                    {state.error ? (
                        <p>{state.error}</p>
                    ) : state.results.length > 0 ? (
                        state.results.map((e) => (
                            <div className="col-md-4" key={e.url}>
                                <NewsCom 
                                    urlToImage={e.image_url}
                                    url={e.link} 
                                    description={e.description}
                                    id={e.source_id} 
                                    title={e.title} 
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

News.defaultProps = {
    category: 'general'
};

News.propTypes = {
    category: PropTypes.string
};

export default News;
