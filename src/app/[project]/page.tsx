"use client"

import { useParams } from "next/navigation";


const ProjectDetails = () => {
const params = useParams();
    const { id } = params;

    return (
        <div>
            <p>hello {id}</p>
        </div>
    )
}

export default ProjectDetails;