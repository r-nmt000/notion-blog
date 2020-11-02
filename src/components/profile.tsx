import sharedStyles from '../styles/shared.module.css'
import blogStyles from '../styles/blog.module.css'
import profileStyles from '../styles/profile.module.css'
import Twitter from './svgs/twitter'
import Github from './svgs/github'

export default () => {

  return (
    <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
      <div className={blogStyles.postPreview}>
        <h3 className={profileStyles.header}>Profile</h3>
        <div className={profileStyles.container}>
          <div className={profileStyles.imageContainer}>
            <img src="nomonyan.jpg" className={profileStyles.profileImage}/>
          </div>
          <div className={profileStyles.profileContainer}>
            <p><b>Ryusuke Nomoto</b></p>
            <p>
              <a href="https://twitter.com/r_nmt000" target="_blank" rel="noopener noreferrer">
                <Twitter height={20} className={profileStyles.icon}/>Twitter  </a>
              <a href="https://github.com/r-nmt000" target="_blank" rel="noopener noreferrer">
                <Github height={20} className={profileStyles.icon}/>Github
              </a>
            </p>
            <p>Web director</p>
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
