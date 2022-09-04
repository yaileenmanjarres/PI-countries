import './SidebarSection.css'

const renderOption = (option) => {
  switch (option) {
    case 'filterRegion':
      return (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <div>All</div>
            <div>America</div>
            <div>Africa</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <div>Asia</div>
            <div>Europe</div>
            <div>Oceania</div>
          </div>
        </>
      )
    case 'activities':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
          <button style={{ margin: '0 16px', padding: 10 }}>Create activity</button>
        </div>
      )
    case 'orderPopulation':
      return (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <i className="fas fa-sort-numeric-up"></i>
            <div>Ascending</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <i className="fas fa-sort-numeric-down-alt"></i>
            <div>Descending</div>
          </div>
        </>
      )
    default:
      return (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <i className="fas fa-sort-alpha-up"></i>
            <div>Ascending</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', justifyContent: 'center', rowGap: 8 }}>
            <i className="fas fa-sort-alpha-down-alt"></i>
            <div>Descending</div>
          </div>
        </>
      )
  }
}

function SidebarSection({ sidebarOpen, icon, title, option }) {

  return (
    <div className='section-container'>
      <div className='section-header'>
        <div className='section-icon'>
          <span>
            <i className={`${icon} icon`}></i>
          </span>
        </div>
        <div className={`section-title ${sidebarOpen ? 'show-title' : 'hide-title'}`}>
          {title}
        </div>
      </div>
      <div className={`section-options ${sidebarOpen ? 'show-title' : 'hide-title'}`}>
        <div style={{ display: 'flex', aligItems: 'center', height: '100%' }}>
          {renderOption(option)}
        </div>
        { option !== 'activities' && <hr style={{   borderTop: '1px solid #ddd' }}/>}
      </div>
    </div>
  )
}
export default SidebarSection








