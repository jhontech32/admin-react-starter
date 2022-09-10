import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import DataTable from 'react-data-table-component'

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'

const Table = (props) => {
  const { data } = props

  useEffect(() => {
    initDatatable()
  }, [])

  // Initial DataTable
  const initDatatable = () => {
    $(document).ready(function () {
      $('#example').DataTable();
    })
  }

  const TbHead = [
    {
      id: 1,
      title: 'ID',
    },
    {
      id: 2,
      title: 'IMAGE',
    },
    {
      id: 3,
      title: 'USERNAME',
    },
    {
      id: 4,
      title: 'EMAIL',
    },
    {
      id: 5,
      title: 'PHONE',
    },
    {
      id: 6,
      title: 'ROLE',
    },
    {
      id: 7,
      title: 'ACTIONS',
    }
  ]

  const UserPic = `http://localhost:3000/dist/img/default-img.png`

  return (
    <table id="example" class="table table-bordered table-striped">
      <thead>
        <tr>
          {
            TbHead.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>

        {
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td className="text-center">
                {
                  item.image || (<img src={UserPic} className="cst-avatar rounded" alt="User Image" />)
                }
              </td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.role}</td>
              <td>
                <Link to={`/member/${item.id}`}>
                  <button className="btn btn-primary">
                    <i class="nav-icon fas fa-search-plus"></i> Detail
                  </button>
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
      {/* <tfoot>
        <tr>
          {
            TbHead.map((item, index) => (
              <th>{item.title}</th>
            ))
          }
        </tr>
      </tfoot> */}
    </table>
  )
}

export default Table