import React from 'react'
import ModalBtn from 'patchkit-modal/btn'
import FormProfileImage from './index'

export default class FormProfileImageDemo extends React.Component {
  render() {
    const onSubmit = (image, cb) => { console.log('submit', image); cb() }
    return <div>
      <h1>patchkit-form-profile-image</h1>
      <section className="form-profile-image">
        <header>&lt;FormProfileImage&gt;</header>
        <div className="content">
          <ModalBtn className="fullheight" Form={FormProfileImage} formProps={{currentValue: '/img/pic1.jpg', className: 'text-center', onSubmit: onSubmit}}><a className="btn highlighted">Click to open</a></ModalBtn>
        </div>
      </section>
    </div>
  }
}