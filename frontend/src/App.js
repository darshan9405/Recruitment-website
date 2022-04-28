import './App.css'
import SideMenu from './components/SideMenu'
import JobCategories from './pages/JobCategories'
import CreateJobCategories from './pages/CreateJobCategories'
import CreateLocations from './pages/CreateLocations'
import CreateSkills from './pages/CreateSkills'
import EditJobCategories from './pages/EditJobCategories'
import EditLocations from './pages/EditLocations'
import EditSkills from './pages/EditSkills'
import Skills from './pages/Skills'
import JobLocations from './pages/JobLocations'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import LoginForm from './pages/LoginForm'
import BusinessSettings from './pages/BusinessSettings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useState } from 'react'
import Jobs from './pages/Jobs'
import CreateJob from './pages/Createjob'
import Companies from './pages/Companies'
import CreateCompany from './pages/Createcompany'
import EditJob from './pages/Editjob'
import JobApplication from './pages/jobApplication'
import CandidateDatabase from './pages/candidateDatabase'
function App () {
  const [inactive, setInactive] = useState(false)
  const isloggedin = true
  if (!isloggedin) {
    return (
      <Router>
        <Switch>
          {/* {!isloggedin ? <Redirect to="/" /> : <Redirect to="/admin/dashboard" />} */}
          <Route exact path={'/'}>
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    )
  } else {
    return (
      <div className='App'>
        <Router>
          <>
            <SideMenu
              onCollapse={inactive => {
                console.log(inactive)
                setInactive(inactive)
              }}
            />
            <div className={`container ${inactive ? 'inactive' : ''}`}>
              <Switch>
                <Route exact path={'/admin/dashboard'}>
                  <Dashboard />
                </Route>
                <Route exact path={'/admin/job-categories'}>
                  <JobCategories />
                </Route>
                <Route exact path={'/admin/createjobcategory'}>
                  <CreateJobCategories />
                </Route>
                <Route exact path={'/admin/editjobcategory/:id'}>
                  <EditJobCategories />
                </Route>
                <Route exact path={'/admin/skills'}>
                  <Skills />
                </Route>
                <Route exact path={'/admin/createskill'}>
                  <CreateSkills />
                </Route>
                <Route exact path={'/admin/editskill/:id'}>
                  <EditSkills />
                </Route>
                <Route exact path={'/admin/locations'}>
                  <JobLocations />
                </Route>
                <Route exact path={'/admin/createlocation'}>
                  <CreateLocations />
                </Route>
                <Route exact path={'/admin/editlocation/:id'}>
                  <EditLocations />
                </Route>
                <Route exact path={'/admin/job'}>
                  <Jobs />
                </Route>
                <Route path={'/admin/createJob'}>
                  <CreateJob />
                </Route>
                <Route path={'/admin/editjob/:id'}>
                  <EditJob />
                </Route>
                <Route exact path={'/admin/job-company'}>
                  <Companies />
                </Route>
                <Route path={'/admin/createcompany'}>
                  <CreateCompany />
                </Route>
                <Route path={'/admin/job-applications'}>
                  <JobApplication />
                </Route>
                <Route exact path={'/admin/applications-archive'}>
                  <CandidateDatabase />
                </Route>
                <Route exact path={'/admin/job-onboard'}>
                  <Skills />
                </Route>
                <Route exact path={'/admin/interview-schedule'}>
                  <Skills />
                </Route>
                <Route exact path={'/admin/team'}>
                  <Skills />
                </Route>
                <Route exact path={'/admin/subscribe'}>
                  <Skills />
                </Route>
                <Route exact path={'/admin/profile'}>
                  <Profile />
                </Route>
                <Route exact path={'/admin/setting'}>
                  <BusinessSettings />
                </Route>
                <Route exact path={'/admin/settings/application-setting'}>
                  <Profile />
                </Route>
                <Route exact path={'/admin/settings/role-permission'}>
                  <Profile />
                </Route>
                <Route exact path={'/admin/settings/delete-account'}>
                  <Profile />
                </Route>
                <Route path={'/admin/settings/zoom-setting'}>
                  <Profile />
                </Route>
                <Redirect to='/admin/dashboard' />
              </Switch>
            </div>
          </>
        </Router>
      </div>
    )
  }
}

export default App
