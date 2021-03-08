import React from 'react'
import { DropzoneArea as DA, DropzoneAreaProps } from 'material-ui-dropzone'

const DropzoneArea: React.FC<DropzoneAreaProps> = (props) => {
  return (
    <DA
      { ...props }
    />
  )
}

export default DropzoneArea