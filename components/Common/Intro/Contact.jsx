import React from 'react'

const Contact = () => {
    return (
        <div className="flex flex-col space-y-2 pt-6">
            <div className="flex flex-col">
                <span className='text-white text-xs font-bold'>Email Address</span>
                <span className='text-xs text-gray-600'>hamidalik64@gmail.com</span>
            </div>
            <div className="flex flex-col">
                <span className='text-white text-xs font-bold'>Phone</span>
                <span className='text-xs text-gray-600'>+923483838738</span>
            </div>

        </div>
    )
}

export default Contact