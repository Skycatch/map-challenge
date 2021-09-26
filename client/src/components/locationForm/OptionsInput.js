import React from 'react'

export const OptionsInput = ({
  label,
  name,
  defaultValue = '',
  value = '',
  onChange = () => {},
  options = []
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label htmlFor={ name } className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          { label }
        </label>
      </div>
      <div className="md:w-2/3 relative">
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={ name }
            onChange={ onChange }
          >
            <option value="" selected disabled hidden></option>
            { options && options.map((category, i) => {
              return <option key={ i } value={ category.id }>{ category.name } </option>
            }) }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

      </div>
    </div>
  )
}