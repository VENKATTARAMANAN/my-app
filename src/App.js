// import logo from './logo.svg';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {/* <!-- Free Tier --> */}
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul"> 
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Single User</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>5GB Storage</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}/></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}/></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}/></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}/></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="blank" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>50GB Storage</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes}/></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="blank" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>150GB Storage</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="blank" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
