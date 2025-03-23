import React from 'react'

function TableHead({ columns, rows, snackBarState, snackBarMessage, popSnackBar }) {

  return (
    <div className='overflow-auto bg-white'>

      <table className='table-auto size-full'>

        {/* Head */}
        <thead className='bg-blue'>
          <tr>
            {columns && columns.map((column) => {
              return <th className='p-3 text-md md:text-xl' key={columns.indexOf(column)}>{column}</th>
            })}
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {rows && rows.map((row) => {
            return <tr className={ rows.indexOf(row) % 2 === 0 ? 'bg-white' : 'bg-grey' } key={rows.indexOf(row)}>
              {row.map((data) => { return <td className='p-2 text-md md:text-xl' key={row.indexOf(data)}>{data}</td> })}
              <td className='p-2'><button className='p-2 bg-blue'>Revoke</button></td>
            </tr>
          })}
        </tbody>

      </table>

    </div>
  )
}

export default TableHead