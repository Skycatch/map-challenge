import React from 'react'

export const SubmitButton = ({
  label,
  onClick = () => {}
}) => {
  return (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-skyblue-500 hover:bg-skyblue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={ onClick }>
          { label }
        </button>
      </div>
    </div>
  )
}