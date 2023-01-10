import { React } from 'react';
import ProjectTag from './ProjectTag';
import { Link } from "react-router-dom";

const ComingSoonCard = (props) => {
    const number = props.number;
    // const image = props.image;
    const name = props.name;
    const description = props.description;
    const tags = props.tags;

    const path = "/Project" + number;

    return (
        <div>
            <Link to={path} style={{ textDecoration: 'none' }}>
                <div className="CardNumContainer">
                    <sub className="CardNumber">
                        (0{number})
                    </sub>
                </div>
                <div className="CardImg">
                    <img src={require("../assets/dummyimg.png")} alt="placeholder" />
                </div>
            </Link>

            <div className="CardInfo">
                <div className="CardDesc">
                    <Link to={path} style={{ textDecoration: 'none' }}>

                        <h3>{name}</h3>
                        <p>{description}</p>
                    </Link>
                </div>
                <div className="CardTags rows-2">
                    {tags.map((tag) => (
                        <ProjectTag
                            tag={tag} />
                    ))}

                </div>
            </div>
        </div >
    );
}

export default ComingSoonCard;