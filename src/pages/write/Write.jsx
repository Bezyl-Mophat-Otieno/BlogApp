import React from 'react'
import './Write.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
function Write() {

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""

      />

      <form className="writeForm" enctype="multipart/form-data">
        <div className='writeFormGroup' >

          <select placeholder='Language' id='fileInput' className="form-select  form-select-sm mt-5 w-25" aria-label=".form-select-sm example">
            <option selected disabled  > <i> --choose a language-- </i> </option>
            <option value="1">English</option>
            <option value="2">Kiswahili</option>
            <option value="3">Local Dilect</option>
          </select>

        </div>
        <div className='writeFormGroup' >

          <select placeholder='Category' id='fileInput' className="form-select form-select-sm mt-5 w-25" aria-label=".form-select-sm example">
            <option selected disabled  > <i> --Category-- </i> </option>
            <option value="1">Music</option>
            <option value="2">Sports</option>
            <option value="3">Politics</option>
          </select>

        </div>
        <div className="writeFormGroup">


          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write