import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  makeStyles,
  InputLabel,
  Typography
} from '@material-ui/core'
import avatar from '../assets/avatar.png'
import { editCompany, getCompany } from '../Service/api'
import { TableBody } from 'semantic-ui-react'
const useStyles = makeStyles({
  inputTag: {
    margin: '1vh 0vw',
    position: 'relative',
    padding: '1vh 1vw'
  },
  textarea: {
    height: '20vh !important',
    width: 'inherit',
    margin: '2vh 0vw',
    padding: '1vh 1vw'
  },
  label: {
    color: 'black',
    margin: '1vh 1vw'
  },
  button: {
    width: '10vw',
    margin: '1vh 1vw'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1vh 1vw',
    margin: '1vh 1vw'
  }
})
const EditCompany = props => {
  const classes = useStyles()
  const history = useHistory()
  const companyObject = {
    companyname: '',
    companyemail: '',
    companyaddress: '',
    companyphone: '',
    companywebsite: ''
  }
  const { id } = useParams()

  const [company, setCompany] = useState(companyObject)
  useEffect(async () => {
    const response = await getCompany(id)
    setCompany(response.data)
  }, [])
  const {
    companyname,
    companyemail,
    companyaddress,
    companyphone,
    companywebsite
  } = company
  const changeHandler = event => {
    setCompany({ ...company, [event.target.name]: event.target.value })
  }
  const saveButtonHandler = async event => {
    await editCompany(id, company)
    history.push('/admin/job-company')
  }

  const PreviewImage = () => {
    var oFReader = new FileReader()
    oFReader.readAsDataURL(document.getElementById('uploadImage').files[0])

    oFReader.onload = function (oFREvent) {
      document.getElementById('uploadPreview').src = oFREvent.target.result
    }
  }
  return (
    <div className={classes.container}>
      <div className='top-menu' style={{ background: 'none', border: 'none' }}>
        <div className='top-left-menu'>Companies</div>
        <div className='top-right-menu'>
          <div className='right-menu'>
            <i class='bi bi-house-door'></i> / Companies
          </div>
        </div>
      </div>
      <FormGroup>
        <Typography variant='h4'>Create New</Typography>
        <FormControl>
          <InputLabel className={classes.label}>Company Name</InputLabel>
          <Input
            onChange={changeHandler}
            className={classes.inputTag}
            name='companyname'
            value={companyname}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Company Phone</InputLabel>
          <Input
            onChange={changeHandler}
            className={classes.inputTag}
            name='companyphone'
            value={companyphone}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Company Website</InputLabel>
          <Input
            onChange={changeHandler}
            className={classes.inputTag}
            name='companywebsite'
            value={companywebsite}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Company Email</InputLabel>
          <Input
            onChange={changeHandler}
            className={classes.inputTag}
            name='companyemail'
            value={companyemail}
          />
        </FormControl>
        <label className={classes.formcontrol}>Company Logo</label>
        <div className='card'>
          <div className='card-body'>
            <div className='dropify-wrapper has-preview'>
              <div className='dropify-message'>
                <span className='file-icon'></span>
                <p>Drag and drop a file here or click</p>
              </div>
              <input
                id='uploadImage'
                className='dropify'
                type='file'
                name='logo'
                accept='.png,.jpg,.jpeg'
                onChange={() => PreviewImage()}
              />
              <div className='dropify-preview' style={{ display: 'block' }}>
                <span className='dropify-render'>
                  <img id='uploadPreview' src={avatar} />
                </span>
                <div className='dropify-infos'>
                  <div className='dropify-infos-inner'>
                    <p className='dropify-filename'>
                      <span className='file-icon'></span>
                    </p>
                    <p className='dropify-infos-message'>
                      Drag and drop a file or click to replace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormControl>
          <InputLabel className={classes.label}>Company Address</InputLabel>
          <Input
            onChange={changeHandler}
            className={classes.inputTag}
            name='companyaddress'
            value={companyaddress}
          />
        </FormControl>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => saveButtonHandler()}
          >
            <i class='bi bi-check-lg'></i>&nbsp;Save
          </Button>
        </div>
      </FormGroup>
    </div>
  )
}

export default EditCompany
