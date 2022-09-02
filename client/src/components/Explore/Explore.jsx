import { useState, useEffect } from 'react'
import './Explore.css'
import SidebarSection from '../SidebarSection/SidebarSection'
import { useDispatch, useSelector } from "react-redux"
import { getAllCountries } from '../../redux/actions/actions'

const sidebarSections = [
  { iconTitle: 'fas fa-map-marked-alt', title: 'Region', options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'] },
  { iconTitle: 'fas fa-users', title: 'Population', options: ['upward', 'falling'] },
  { iconTitle: 'fas fa-chart-bar', title: 'Area', options: ['upward', 'falling'] },
  { iconTitle: 'fas fa-hiking', title: 'Activities', options: [' Summer', 'Fall', 'Winter', 'Spring', 'All the activities'] },
]

export function Explore() {
  // const dispatch = useDispatch()
  // dispatch(getAllCountries())
  const [sidebarState, setSidebarState] = useState('closed')

  const [shownCountries, setShownCountries] = useState([])

  function handleOpenSidebar() {
    if (sidebarState === 'closed') {
      setSidebarState('open')
    } else {
      setSidebarState('closed')
    }
  }

  useEffect(async() => {
    // const countries = useSelector((state)=>state.countries)
    // console.log(countries);
  }, [])

  return (
    <div id='main'>
      <nav id='nav-bar'>
        <div id='nav-menu-logo'>
          <span onClick={handleOpenSidebar}>
            <i className="fas fa-th grid-icon" ></i>
          </span>
          <span id='logo'>
            <i className="fas fa-globe-americas logo-icon" />
            <span id='logo-text'>
              Countries
            </span>
          </span>
        </div>
        <div id='search-container'>
          <input type="text" placeholder="Search country" id='search-input' />
          <span id='search-icon' >
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div>
        </div>
      </nav>
      <div id='content'>
        <div id='sidebar' className={`sidebar-${sidebarState}`}>
          <div id='controls'>
            {
              sidebarSections.map((section, i) => (
                <SidebarSection key={i}
                  sidebarOpen={sidebarState === 'open'}
                  icon={section.iconTitle}
                  title={section.title}
                  options={section.options}
                />
              ))
            }
          </div>
          <div>
          </div>
        </div>
        <div id='lists'>
        </div>
      </div>

    </div>
  )
}
