import React, { useState, useEffect } from 'react'
import Active from '../assets/img/active.png'
import Inactive from '../assets/img/inactive.png'
import Total from '../assets/img/total.png'
import './Companies.css'
import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  makeStyles,
  TablePagination,
  Fab
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { getCompany, deleteCompany } from '../Service/api'
const useStyles = makeStyles({})
const Companies = () => {
  const [company, setCompany] = useState([])
  useEffect(() => {
    getAllCompany()
  }, [])
  const getAllCompany = async () => {
    const response = await getCompany()
    setCompany(response.data)
  }
  const searchChangeHandler = event => {
    setKeyword(event.target.value.toLowerCase())
  }
  const deleteCompanyHandler = async id => {
    await deleteCompany(id)
    getAllCompany()
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  let count = 0
  const [keyword, setKeyword] = useState('')
  const pages = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className='top-menu' style={{ background: 'none', border: 'none' }}>
        <div className='top-left-menu'>Companies</div>
        <div className='top-right-menu'>
          <div className='right-menu'>
            <i class='bi bi-house-door'></i> / Companies
            <Link style={{ textDecoration: 'none' }} to='/admin/createcompany'>
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
            </div>
            <div className='info_container'>
              <div className='info_heading'>Total Companies</div>
              <div className='info_count'>{company.length}</div>
            </div>
          </div>
          <div className='jobs_info'>
            <div className='img_container'>
              <img src={Active} className='badge_img' alt='Not found!' />
            </div>
            <div className='info_container'>
              <div className='info_heading'>Active Companies</div>
              <div className='info_count'>
                {company.filter(ele => ele.Status === 'Active').length}
              </div>
            </div>
          </div>
          <div className='jobs_info'>
            <div className='img_container'>
              <img src={Inactive} className='badge_img' alt='Not found!' />
            </div>
            <div className='info_container'>
              <div className='info_heading'>Inactive Companies</div>
              <div className='info_count'>
                {company.filter(ele => ele.Status === 'Inctive').length}
              </div>
            </div>
          </div>
        </div>
        <div className='content_container'>
          <div className='search_container'>
            <div
              style={{
                fontFamily: 'inherit',
                margin: '0.5vh 2vw',
                marginRight: '40vw',
                display: 'flex',
                flexDirection: 'row'
              }}
            ></div>
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
                  style={{ width: '150px', height: '30px' }}
                  type='text'
                  onChange={searchChangeHandler}
                ></input>{' '}
              </span>
            </div>
          </div>
          <div className='jtable_container'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company Logo</TableCell>
                  <TableCell>Companies</TableCell>
                  <TableCell>Company Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {company
                  .filter(e => {
                    if (keyword === '') {
                      return e
                    } else {
                      return e.companyname.toLowerCase().includes(keyword)
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
                        <TableCell>{}</TableCell>
                        <TableCell>{element.companyname}</TableCell>
                        <TableCell>{element.companyemail}</TableCell>
                        <TableCell>
                          <Button style={{ textTransform: 'capitalize' }}>
                            Active
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Fab
                            color='primary'
                            aria-label='edit'
                            size='small'
                            style={{ margin: 4, marginRight: 6 }}
                            component={Link}
                            to={`/admin/editcompany/${element._id}`}
                          >
                            <EditIcon />
                          </Fab>
                          <Fab
                            color='secondary'
                            aria-label='edit'
                            size='small'
                            style={{ margin: 4 }}
                            onClick={() => deleteCompanyHandler(element._id)}
                          >
                            <DeleteIcon />
                          </Fab>{' '}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Companies
