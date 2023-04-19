import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
        className='hover:opacity-50 transition duration-500'
        href="https://www.linkedin.com/in/wonil-lee-a41358207/"
        target="_blank"
        rel="noreferrer"
        >
            <img alt="linkedin-link" src="../assets/linkedin.png"/>
        </a>

        <a
        className='hover:opacity-50 transition duration-500'
        href="https://www.instagram.com/wilee0523/"
        target="_blank"
        rel="noreferrer"
        >
            <img alt="instagram-link" src="../assets/instagram.png"/>
        </a>
        
    </div>
  )
}

export default SocialMediaIcons