import { useEffect, useState } from 'react'
import { fetchProjects } from '../../api/api';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.scss'

function ProjectGrid() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const PAGE_SIZE = 8;

    useEffect(() => {
        setLoading(true)
        fetchProjects(currentPage, PAGE_SIZE)
        .then((data) => {
          setProjects(data.projects || [])
          setTotalPages(Math.ceil(data.totalPages / PAGE_SIZE))
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [currentPage])

    const handlePageChange = (newPage:number) => {
        if (newPage >= 0 && newPage < totalPages) {
          setCurrentPage(newPage)
        }
    }

    return (
    <div className='projects'>
        <div className="projects__container">
            <h1>Projects</h1>
            <div className="projects__main">
                {loading && <div className='projects__loader'><img src='./loader.gif' alt='loading'/></div>}
                {error && <div className='projects__error'><p>Oops, something went wrong :(<br/>Please reload the page</p></div>}
                {!loading && 
                    <ul className="projects__grid">
                        {projects.map((project, index) => (
                            <ProjectCard project={project} key={index}/>
                        ))}
                    </ul>
                }
                {!error && (
                    <div className="projects__pagination">
                        <button disabled={currentPage === 0 ? true : false} onClick={() => handlePageChange(currentPage - 1)}>
                        Back
                        </button>
                        <span>
                        Page {currentPage + 1} of {totalPages}
                        </span>
                        <button disabled={currentPage === totalPages ? true : false} onClick={() => handlePageChange(currentPage + 1)}>
                        Forward
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectGrid