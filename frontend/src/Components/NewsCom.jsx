
import PropTypes from 'prop-types';

function NewsCom(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.urlToImage} className="card-img-top" alt={props.imageAlt} />
                <div className="card-body">
                    <h5 className="card-title">{props.id}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}

NewsCom.defaultProps = {
    description: 'No description provided',
    url: '#',
};

NewsCom.propTypes = {
    urlToImage: PropTypes.string,
    imageAlt: PropTypes.string,
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
};

export default NewsCom;
