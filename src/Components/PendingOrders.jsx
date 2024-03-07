
import React, { useState } from 'react';
// import Navbar from './Navbar';

const PendingOrders = ({ width, marginLeft }) => {
  // State to track the status of each order
  const [orderStatus, setOrderStatus] = useState({});

  // Function to handle the click event for accepting or rejecting an order
  const handleAction = (orderId, action) => {
    setOrderStatus((prevStatus) => ({
      ...prevStatus,
      [orderId]: action,
    }));
  };

  const pendingOrders = [
    {
      id: 1,
      customerName: 'Margret',
      orderNo: '#Oid02312',
      totalCost: 789,
      location: 'Kukatpally',
      paymentMode: 'Credit card',
      orderedDate: '04 Dec 2019',
    },
    {
      id:2,
      customerName: "Margret",
      orderNo: "#Oid02312",
      totalCost: 789,
      location: "Kukatpally",
      paymentMode: "Credit card",
      orderedDate: "04 Dec 2019",
    },
    {
      id:3,
      customerName: "Estella Bryan",
      orderNo: "#Oid02313",
      totalCost: 1123,
      location: "KPHB",
      paymentMode: "Cash on delivered",
      orderedDate: "04 Dec 2019",
    },
    {
      id:4,
      customerName: "Lucy Abbott",
      orderNo: "#Oid02314",
      totalCost: 223,
      location: "Hi-Tech City",
      paymentMode: "Credit card",
      orderedDate: "04 Dec 2019",
    },
    
  ];
  const cardStyle = {
    width: width,
    marginLeft: marginLeft 
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="col-12 grid-margin1">
        <div className="card" style={cardStyle}>
          <div className="card-body" style={{ width: width }}>
            <h4 className="card-title">Pending Orders</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Order No</th>
                    <th>Total Cost</th>
                    <th>Location</th>
                    <th>Payment Mode</th>
                    <th>Ordered Date</th>
                    <th>Order Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.customerName}</td>
                      <td>{order.orderNo}</td>
                      <td>{order.totalCost}</td>
                      <td>{order.location}</td>
                      <td>{order.paymentMode}</td>
                      <td>{order.orderedDate}</td>
                      <td>
                        {orderStatus[order.id] === 'Accepted' ? (
                          <span className="badge badge-outline-success">Accepted</span>
                        ) : orderStatus[order.id] === 'Rejected' ? (
                          <span className="badge badge-outline-danger">Rejected</span>
                        ) : (
                          <span className="badge badge-outline-warning">Pending</span>
                        )}
                      </td>
                      <td>
                        {!orderStatus[order.id] && (
                          <>
                            <button
                              className="badge badge-outline-warning"
                              onClick={() => handleAction(order.id, 'Accepted')}
                            >
                              Accept
                            </button>{' '}
                            <button
                              className="badge badge-outline-warning"
                              onClick={() => handleAction(order.id, 'Rejected')}
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
