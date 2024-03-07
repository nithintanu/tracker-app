



import React from 'react';

const PastOrders = ({ width, marginLeft }) => {
  // Sample orders data
  const orders = [
    {
      orderNo: "#Oid02312",
      customerName: "Margret",
      customerImage: "assets/images/faces/face1.jpg",
      totalCost: 789,
      location: "Kukatpally",
      paymentMode: "Credit card",
      orderedDate: "04 Dec 2019",
      orderStatus: "Approved"
    },
    {
      orderNo: "#Oid02313",
      customerName: "Estella Bryan",
      customerImage: "assets/images/faces/face2.jpg",
      totalCost: 1123,
      location: "KPHB",
      paymentMode: "Cash on delivered",
      orderedDate: "04 Dec 2019",
      orderStatus: "Approved"
    },
    {
      orderNo: "#Oid02314",
      customerName: "Lucy Abbott",
      customerImage: "assets/images/faces/face5.jpg",
      totalCost: 223,
      location: "Hi-Tech City",
      paymentMode: "Credit card",
      orderedDate: "04 Dec 2019",
      orderStatus: "Rejected"
    },
    {
      orderNo: "#Oid02315",
      customerName: "Nithin",
      customerImage: "assets/images/faces/pic1.jpg",
      totalCost: 432,
      location: "Kondapur",
      paymentMode: "Online Payment",
      orderedDate: "04 Dec 2019",
      orderStatus: "Approved"
    },
    {
      orderNo: "#Oid02316",
      customerName: "Sallie Reyes",
      customerImage: "assets/images/faces/face4.jpg",
      totalCost: 545,
      location: "Madhapur",
      paymentMode: "Credit card",
      orderedDate: "04 Dec 2019",
      orderStatus: "Approved"
    }
  ];

  const cardStyle = {
    width: width,
    marginLeft: marginLeft 
  };

  return (
    <div>
      <div className="col-12 grid-margin1">
        <div className="card" style={cardStyle}>
          <div className="card-body" style={{ width: width }}>
            <h4 className="card-title">Past Orders</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th> Customer Name </th>
                    <th> Order No </th>
                    <th> Total Cost </th>
                    <th>Location</th>
                    <th> Payment Mode </th>
                    <th> Ordered Date Date </th>
                    <th> Order Status  </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.orderNo}>
                      <td>
                        <img src={order.customerImage} alt="Customer" />
                        <span className="pl-2">{order.customerName}</span>
                      </td>
                      <td>{order.orderNo}</td>
                      <td>{order.totalCost}</td>
                      <td>{order.location}</td>
                      <td>{order.paymentMode}</td>
                      <td>{order.orderedDate}</td>
                      <td>
                        <div className={`badge badge-outline-${order.orderStatus === 'Approved' ? 'success' : 'danger'}`}>
                          {order.orderStatus}
                        </div>
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
}

export default PastOrders;
