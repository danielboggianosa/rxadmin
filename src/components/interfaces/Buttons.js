import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <>
                {/* <!-- Page Heading --> */}
          <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

          <div className="row">

            <div className="col-lg-6">

              {/* <!-- Circle Buttons --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                </div>
                <div className="card-body">
                  <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                  {/* <!-- Circle Buttons (Default) --> */}
                  <div className="mb-2">
                    <code>.btn-circle</code>
                  </div>
                  <button className="btn btn-primary btn-circle">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn btn-success btn-circle">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn btn-info btn-circle">
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button className="btn btn-warning btn-circle">
                    <i className="fas fa-exclamation-triangle"></i>
                  </button>
                  <button className="btn btn-danger btn-circle">
                    <i className="fas fa-trash"></i>
                  </button>
                  {/* <!-- Circle Buttons (Small) --> */}
                  <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-sm</code>
                  </div>
                  <button className="btn btn-primary btn-circle btn-sm">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn btn-success btn-circle btn-sm">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn btn-info btn-circle btn-sm">
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button className="btn btn-warning btn-circle btn-sm">
                    <i className="fas fa-exclamation-triangle"></i>
                  </button>
                  <button className="btn btn-danger btn-circle btn-sm">
                    <i className="fas fa-trash"></i>
                  </button>
                  {/* <!-- Circle Buttons (Large) --> */}
                  <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-lg</code>
                  </div>
                  <button className="btn btn-primary btn-circle btn-lg">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn btn-success btn-circle btn-lg">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn btn-info btn-circle btn-lg">
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button className="btn btn-warning btn-circle btn-lg">
                    <i className="fas fa-exclamation-triangle"></i>
                  </button>
                  <button className="btn btn-danger btn-circle btn-lg">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>

              {/* <!-- Brand Buttons --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                </div>
                <div className="card-body">
                  <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                  <p>You can create more custom buttons by adding a new color variable in the <code>_variables.scss</code> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <code>_buttons.scss</code> file.</p>
                  <button className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i> .btn-google</button>
                  <button className="btn btn-facebook btn-block"><i className="fab fa-facebook-f fa-fw"></i> .btn-facebook</button>

                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                </div>
                <div className="card-body">
                  <p>Works with any button colors, just use the <code>.btn-icon-split</code> className and the markup in the examples below. The examples below also use the <code>.text-white-50</code> helper className on the icons for additional styling, but it is not required.</p>
                  <button className="btn btn-primary btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Primary</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-success btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text">Split Button Success</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-info btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text">Split Button Info</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-warning btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                    <span className="text">Split Button Warning</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-danger btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-trash"></i>
                    </span>
                    <span className="text">Split Button Danger</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-secondary btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Secondary</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-light btn-icon-split">
                    <span className="icon text-gray-600">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <span className="text">Split Button Primary</span>
                  </button>
                  <div className="mb-4"></div>
                  <p>Also works with small and large button classNamees!</p>
                  <button className="btn btn-primary btn-icon-split btn-sm">
                    <span className="icon text-white-50">
                      <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Small</span>
                  </button>
                  <div className="my-2"></div>
                  <button className="btn btn-primary btn-icon-split btn-lg">
                    <span className="icon text-white-50">
                      <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Split Button Large</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
            </>
        )
    }
}
