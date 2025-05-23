import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData
  let category = props.category
  let setCategory = props.setCategory

  function filterHandler(title) {
    setCategory(title)
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((data) => {
          return <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-slate-900 cursor-pointer hover:bg-slate-800 border-2 transition-all duration-300
          ${category === data.title ? 'border-white' : 'border-transparent'}
            `} key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter