import React, { useState, useEffect } from 'react'
import Active from '../assets/img/active.png'
import Inactive from '../assets/img/inactive.png'
import Total from '../assets/img/total.png'
import './Jobs.css'
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableCell,
  Fab,
  TableBody,
  TableRow,
  makeStyles,
  TablePagination
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { getJob, deleteJob } from '../Service/api'
const useStyles = makeStyles({
  dropdown: {
    width: '20vw',
    padding: '1vh 1vw',
    margin: '1vh 1vw'
  }
})
const Jobs = () => {
  const classes = useStyles()
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    getAllJob()
  }, [])
  const getAllJob = async () => {
    const response = await getJob()
    setJobs(response.data)
  }
  const [keyword, setKeyword] = useState('')
  const pages = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [filterStatus, setFilterStatus] = useState('View All')
  const [filterCompany, setFilterCompany] = useState('View All')
  const searchChangeHandler = event => {
    setKeyword(event.target.value.toLowerCase())
  }
  const setFilterCompanyHandler = event => {
    const val = event.target.value
    setFilterCompany(val)
  }
  const setFilterStatusHandler = event => {
    const val = event.target.value
    setFilterStatus(val)
  }
  const deleteJobHandler = async id => {
    await deleteJob(id)
    getAllJob()
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  let count = 0
  return (
    <React.Fragment>
      <div className='top-menu' style={{ background: 'none', border: 'none' }}>
        <div className='top-left-menu'>Jobs</div>
        <div className='top-right-menu'>
          <div className='right-menu'>
            <i class='bi bi-house-door'></i> / Jobs
            <Link style={{ textDecoration: 'none' }} to='/admin/createJob'>
              &nbsp;&nbsp;
              <Button variant='contained' color='primary'>
                <i class='bi bi-plus-circle'></i>&nbsp; Create new
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='Outer_Container'>
        <div className='jobs_container'>
          <div className='jobs_info'>
            <div className='img_container'>
              <img src={Total} className='badge_img' alt='Not found!' />
            </div>{' '}
            <div className='info_container'>
              <div className='info_heading'> Total Jobs </div>{' '}
              <div className='info_count'>{jobs.length}</div>{' '}
            </div>{' '}
          </div>{' '}
          <div className='jobs_info'>
            <div className='img_container'>
              <img src={Active} className='badge_img' alt='Not found!' />
            </div>{' '}
            <div className='info_container'>
              <div className='info_heading'> Active Jobs </div>{' '}
              <div className='info_count'>
                {jobs.filter(ele => ele.Status === 'Active').length}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className='jobs_info'>
            <div className='img_container'>
              <img src={Inactive} className='badge_img' alt='Not found!' />
            </div>{' '}
            <div className='info_container'>
              <div className='info_heading'> Inactive Jobs </div>{' '}
              <div className='info_count'>
                {jobs.filter(ele => ele.Status === 'Inactive').length}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
        <div className='filter_dropdown'>
          <FormControl fullWidth className={classes.dropdown}>
            <InputLabel id='demo-simple-select-label'>Filter Status</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue={filterStatus}
              label='filter-status'
              onChange={setFilterStatusHandler}
            >
              <MenuItem value={'View All'}>View All</MenuItem>
              <MenuItem value={'Active'}>Active</MenuItem>
              <MenuItem value={'Inactive'}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.dropdown}>
            <InputLabel id='demo-simple-select-label'>Job Company</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Job-company'
              defaultValue={filterCompany}
              onChange={setFilterCompanyHandler}
            >
              <MenuItem value={'View All'}>View All</MenuItem>
              {jobs.map(e => (
                <MenuItem value={`${e.company}`}>{e.company}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>{' '}
        <div className='content_container'>
          <div className='button_container'>
            <Button> Custom Questions </Button>{' '}
            <Button
              style={{
                backgroundColor: 'green'
              }}
            >
              Send New Job Emails{' '}
            </Button>{' '}
          </div>{' '}
          <div className='search_container'>
            <div
              style={{
                fontFamily: 'inherit',
                margin: '0.5vh 2vw',
                marginRight: '40vw',
                display: 'flex',
                flexDirection: 'row'
              }}
            ></div>{' '}
            <div
              style={{
                fontFamily: 'inherit',
                margin: '0.5vh 2vw',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <span>
                Search:{' '}
                <input
                  style={{
                    width: '150px',
                    height: '30px'
                  }}
                  type='text'
                  onChange={searchChangeHandler}
                ></input>{' '}
              </span>{' '}
            </div>{' '}
          </div>{' '}
          <div className='jtable_container'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Job Title</TableCell>
                  <TableCell>Job Locations</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs
                  .filter(e => {
                    if (keyword === '') {
                      return e
                    } else {
                      return e.title.toLowerCase().includes(keyword)
                    }
                  })
                  .filter(e => {
                    if (filterStatus === 'View All') {
                      return e
                    } else {
                      return e.Status.includes(filterStatus)
                    }
                  })
                  .filter(e => {
                    if (filterCompany === 'View All') {
                      return e
                    } else {
                      return e.company
                        .toLowerCase()
                        .includes(filterCompany.toLowerCase())
                    }
                  })
                  .map(e => {
                    count++
                    return e
                  })
                  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                  .map(element => {
                    return (
                      <TableRow>
                        <TableCell>{element.title}</TableCell>
                        <TableCell>{element.job}</TableCell>
                        <TableCell>{element.sDate}</TableCell>
                        <TableCell>{element.eDate}</TableCell>
                        <TableCell>
                          <Button style={{ textTransform: 'capitalize' }}>
                            {element.Status}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Fab
                            color='primary'
                            aria-label='edit'
                            size='small'
                            style={{ margin: 4, marginRight: 6 }}
                            component={Link}
                            to={`/admin/editjob/${element._id}`}
                          >
                            <EditIcon />
                          </Fab>
                          <Fab
                            color='secondary'
                            aria-label='edit'
                            size='small'
                            style={{ margin: 4 }}
                            onClick={() => deleteJobHandler(element._id)}
                          >
                            <DeleteIcon />
                          </Fab>{' '}
                          <ContentCopyIcon />
                        </TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
              <TablePagination
                component='div'
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={count}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Table>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </React.Fragment>
  )
}

export default Jobs
