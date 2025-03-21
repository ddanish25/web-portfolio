import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {/* Project Image */}
    <div>
      <img
        src={project.image}
        alt={project.name}
        className='project_image'
      />
    </div>

    {/* Project Name */}
    <h3>{project.name}</h3>

    {/* Project Description */}
    <p className='project__description'>{project.description}</p>

    {/* Project Stack[Skills] */}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* Project GitHub */}
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {/* Project Link */}
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
