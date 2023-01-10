import { React } from 'react';

const ProjectTag = (props) => {
    const tag = props.tag;
    
    return (
        <div className="ProjectTag rowTag">
            <p>{tag}</p>
        </div>
    );
}

export default ProjectTag;