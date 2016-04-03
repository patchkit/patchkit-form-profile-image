import React from 'react'
import cls from 'classnames'
import ImageUploader from 'patchkit-image-uploader'

export default class ProfileSetup extends React.Component {  
  static propTypes = {
    setIsValid: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    currentValue: React.PropTypes.string,
    className: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = { wasImageAdded: false }
  }

  getId() {
    return this.props.id || app.user.id
  }

  componentDidMount() {
    this.props.setIsValid(true)
  }

  onChangeImg() {
    // note that the image was set so that vertical centering can be turned off
    this.setState({ wasImageAdded: true })
  }

  submit(cb) {
    const canvas = this.refs.imageInputContainer.querySelector('canvas')
    ImageUploader.canvasToPng(canvas, (err, buffer) => {
      if (err)
        return cb(err)
      this.props.onSubmit(buffer, cb)
    })
  }

  render() {
    const currentValue = this.props.currentValue
    const hasImg = !!currentValue || this.state.wasImageAdded
    const useVerticalCentering = !hasImg // dont vertically center if an image is assigned
    return <div className={cls(this.props.className, { 'vertical-center': useVerticalCentering })}>
      <h1><span>Would you like to choose a picture?</span></h1>
      <form className="block" onSubmit={e=>e.preventDefault()}>
        <fieldset>
          <div ref="imageInputContainer"><ImageUploader current={currentValue} onChange={this.onChangeImg.bind(this)} /></div>
        </fieldset>
      </form>
    </div>
  }
}