import React from 'react';
import Navbar from './Navbar';

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Current Orders</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </th>
                    <th> Customer Name </th>
                    <th> Order No </th>
                    <th> Total Cost </th>
                    <th> Location </th>
                    <th> Payment Mode </th>
                    <th> Ordered Date Date </th>
                    <th> Order Status </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face1.jpg" alt="image" />
                      <span className="pl-2">Margret</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 789 </td>
                    <td>Kukatpally </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>

                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div className="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face1.jpg" alt="image" />
                      <span className="pl-2">Margret</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 789 </td>
                    <td>Kukatpally </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face2.jpg" alt="image" />
                      <span className="pl-2">Estella Bryan</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 1123 </td>
                    <td> KPHB </td>
                    <td> Cash on delivered </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face1.jpg" alt="image" />
                      <span className="pl-2">Margret</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 789 </td>
                    <td>Kukatpally </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face5.jpg" alt="image" />
                      <span className="pl-2">Lucy Abbott</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 223 </td>
                    <td> Hi-Tech City</td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/pic1.jpg" alt="image" />
                      <span className="pl-2">Nithin</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 432 </td>
                    <td> Kondapur</td>
                    <td> Online Payment </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="Confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face1.jpg" alt="image" />
                      <span className="pl-2">Margret</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 789 </td>
                    <td>Kukatpally </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="Confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face4.jpg" alt="image" />
                      <span className="pl-2">Pavani c/o Narsing</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 545 </td>
                    <td> Madhapur</td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="Confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <img src="assets/images/faces/face1.jpg" alt="image" />
                      <span className="pl-2">Margret</span>
                    </td>
                    <td> #Oid02312 </td>
                    <td> 789 </td>
                    <td>Kukatpally </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      {/* <div className="badge badge-outline-success">Approved</div> */}
                      <div class="badge badge-outline-success">
                        <select id="statusDropdown">
                          <option value="Confirmed">Confirmed</option>
                          <option value="preparing">Food is being prepared</option>
                          <option value="pickedUp">Picked up</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
