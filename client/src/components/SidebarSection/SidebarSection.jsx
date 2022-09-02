import './SidebarSection.css'

function SidebarSection({ sidebarOpen, icon, title}) {

  return (
    <div className='section-container'>
      <div className='section-icon'>
        <span>
        <i className={`${icon} icon`}></i>
        </span>
      </div>
      {
        sidebarOpen &&
        <div className='section-title'>
          {title}
        </div>
      }
      <div className='section-options'>
      </div>
    </div>
  )
}
export default SidebarSection








