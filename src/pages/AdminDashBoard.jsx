import React from 'react'
import { array } from 'yup'
import AdminNavBar from '../components/AdminNavBar'
import { useProductContext } from '../context/ProductContext'
import AdminTableRow from '../components/AdminTableRow'

const AdminDashBoard = () => {
  const {orders}=useProductContext();
  console.log("orders::",orders)
  return (
    <>
    <AdminNavBar/>

    <div className='max-w-[1240px] mx-auto mt-10 px-3'>
      <table className='w-full border-2'>
        <tr >
          <th className='border-2'>Orders</th>
          <th className='border-2'>Customer</th>
          <th className='border-2'>Address</th>
          <th className='border-2'>Status</th>
          <th className='border-2'>Placed at</th>
        </tr>

        {
         orders.map((item)=>{
           console.log("order_data",item.order_data)
          return <AdminTableRow order_data={item.order_data} _id={item._id} userName={item.userName} phone={item.phone} address={item.address} status={item.status} Time={item.Time}/>
         })


        }


      </table>
    </div>
    </>
  )
}

export default AdminDashBoard