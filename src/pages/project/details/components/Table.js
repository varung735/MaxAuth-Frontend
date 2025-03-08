import React from 'react'

function TableHead({ columns, rows }) {
  return (
    <div className='overflow'>
        <table className='table-auto'>

          {/* Head */}
          <thead>
            { columns && columns.map((column) => {
              return <th key={columns.indexOf(column)}>{column}</th>
            }) }
          </thead>

          {/* Rows */}
          <tbody>
            { rows && rows.map((row) => {
              return <tr key={rows.indexOf(row)}>

              </tr>
            }) }
          </tbody>

        </table>
    </div>
  )
}

export default TableHead