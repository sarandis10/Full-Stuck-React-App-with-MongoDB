import React from 'react'

const WorkspacesForm = ({
  handleChange,
  handleSubmit,
  formData,
  errors,
  text = 'Submit',
}) => {
  return (
    <div className="row justify-content-center taras4 mt-5">
      <form
        className="col-6"
        onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="emile-start mb-4">
            <label htmlFor="name" className="">Name</label>
            <div className="">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name} 
                required/>
            </div>
            {/* {errors.name && <p> {errors.name.message}</p>} */}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="address" className="">Address</label>
            <div className="">
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Address"
                name="address"
                onChange={handleChange}
                value={formData.address} />
            </div>
            {errors.name && <p> {errors.address.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="city" className="">City</label>
            <div className="">
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={formData.city} />
            </div>
            {errors.name && <p> {errors.city.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="postcode" className="">Post Code</label>
            <div className="">
              <input
                type="text"
                id="postcode"
                className="form-control"
                placeholder="Post Code"
                name="postcode"
                onChange={handleChange}
                value={formData.postcode} />
            </div>
            {errors.name && <p> {errors.postcode.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="country" className="">Country</label>
            <div className="">
              <input
                type="text"
                id="country"
                className="form-control"
                placeholder="Country"
                name="country"
                onChange={handleChange}
                value={formData.country} />
            </div>
            {errors.name && <p> {errors.country.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="phoneNumber" className="">Phone Number</label>
            <div className="">
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber} />
            </div>
            {errors.name && <p> {errors.phoneNumber.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="long" className="">Longitude</label>
            <div className="">
              <input
                type="text"
                id="long"
                className="form-control"
                placeholder="Longitude"
                name="long"
                onChange={handleChange}
                value={formData.long} />
            </div>
            {errors.name && <p> {errors.long.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="lat" className="">Latitude</label>
            <div className="">
              <input
                type="text"
                id="lat"
                className="form-control"
                placeholder="Latitude"
                name="lat"
                onChange={handleChange}
                value={formData.lat} />
            </div>
            {errors.name && <p> {errors.lat.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="link" className="">Link</label>
            <div className="">
              <input
                type="text"
                id="link"
                className="form-control"
                placeholder="Link"
                name="link"
                onChange={handleChange}
                value={formData.link} />
            </div>
            {errors.name && <p> {errors.link.message}</p>}
          </div>

          <div className="emile-start mb-4">
            <label htmlFor="image" className="">Image</label>
            <div className="">
              <input
                type="text"
                id="image"
                className="form-control"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={formData.image} />
            </div>
            {errors.name && <p> {errors.image.message}</p>}
          </div>

          <div className="emile-start">
            <label htmlFor="textDescription" className="">Workspace Description</label>
            <div className="">
              <textarea
                className="form-control"
                id="textDescription"
                rows="4"
                placeholder="Workspace Description"
                name="textDescription"
                onChange={handleChange}
                value={formData.textDescription.message}>
              </textarea>
            </div>
            {errors.name && <p> {errors.textDescription}</p>}
          </div>


          <div className="emile-start mb-5">
            <label className=""></label>
            <div className="">
              <input
                type="submit"
                className="btn btn-primary changingcolor1" id="changingcolor" //MAKE THE BUTTON SAME COLOR OF THE SIGN IN AND REGISTER
                placeholder="Submit"
                name="submit"
                value={text} />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default WorkspacesForm