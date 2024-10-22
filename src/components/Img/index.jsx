"use server"
import Image from 'next/image'

function ImageNext(props) {
  return (
    <Image src={props.url} fill={props?.fill} alt="Image not found" {...props} />
  )
}

export default ImageNext