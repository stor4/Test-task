import { useState } from 'react'
import "./ProjectCard.scss"
import { ProjectCardProps } from '../../types';

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex:number) => (prevIndex + 1) % project.images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex:number) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    };

  return (
    <li className="projectCard">
      <div className="projectCard__slider">
        <img src={project?.images[currentImageIndex]?.small} alt={project.title} />
        <div className="projectCard__btns">
            <button onClick={handlePrevImage}>&lt;</button>
            <button onClick={handleNextImage}>&gt;</button>
        </div>
      </div>
      <h3 className='projectCard__title'>{project?.generalInfo.name}</h3>
      <div className='projectCard__desc'>
        <p className='projectCard__price'>{project?.generalInfo.price} $</p>
        <div>
          <p className="projectCard__loc">
              📍{project?.generalInfo.province}
          </p>
          <p className="projectCard__size">
              🏠 {project?.generalInfo.living_area} m2
          </p>
        </div>
        </div>
    </li>
  )
}

export default ProjectCard