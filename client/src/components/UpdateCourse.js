import React from 'react';

export default class UpdateCourse extends React.Component {
  state = {
    course: null,
    
    
    /* {
      id: 1,
      title: "Build a Basic Bookcase",
      description: "High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.\n\nNot every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.\n\nOur pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.\n\nWe made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.\n\nAs for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.\n\nThe specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.",
      estimatedTime: "12 hours",
      materialsNeeded: "* 1/2 x 3/4 inch parting strip\n* 1 x 2 common pine\n* 1 x 4 common pine\n* 1 x 10 common pine\n* 1/4 inch thick lauan plywood\n* Finishing Nails\n* Sandpaper\n* Wood Glue\n* Wood Filler\n* Minwax Oil Based Polyurethane\n",
      userId: 1,
      User: {
        firstName: "Joe",
        lastName: "Smith",
        emailAddress: "joe@smith.com"
      }
    } */
  }

  componentDidMount () {
    fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          course: res,
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>

        {/* Header */}
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <span>Welcome Joe Smith!</span>
              <a className="signout" href="index.html">Sign Out</a>
            </nav>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr />

        { this.state.course 
        ?
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
            <form>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  {/* Course Title */}
                  <div>
                    <input id="title"
                           name="title" 
                           type="text" 
                           className="input-title course--title--input" 
                           placeholder="Course title..." 
                           defaultValue={this.state.course.title} 
                    />
                  </div>
                  {/* Course Author */}
                  <p>By Joe Smith</p>
                </div>
                {/* Course Description */}
                <div className="course--description">
                  <div>
                    <textarea id="description"
                              name="description" 
                              className="" 
                              defaultValue={this.state.course.description} 
                              placeholder="Course description..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      {/* Estimated Time */}
                      <div>
                        <input id="estimatedTime" 
                               name="estimatedTime" 
                               type="text" 
                               className="course--time--input" 
                               placeholder="Hours" 
                               defaultValue={this.state.course.estimatedTime} 
                        />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      {/* Materials Needed */}
                      <div>
                        <textarea id="materialsNeeded" 
                                  name="materialsNeeded" 
                                  className="" 
                                  defaultValue={this.state.course.materialsNeeded} 
                                  placeholder="List materials..."
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button Section of Form */}
              <div className="grid-100 pad-bottom">
                {/* Updated Course Button */}
                <button className="button" 
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log('Course Updated')
                        }}>Update Course
                </button>
                {/* Cancel Button */}
                <a className="button button-secondary" href='/' >Cancel</a>
              </div>
            </form>
          </div>
        </div>
        : null }
      </div>















      // <form action="http://localhost:5000/api/courses/:id" method="put">
      //   <h2>Update Course</h2>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <label for="courseTitle" classNameName="text-muted">Course</label>
      //           <input type="email" classNameName="form-control" id="courseTitle" />
      //           <small id="emailHelp" classNameName="form-text text-muted">By Teacher Name</small>
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label for="estimatedTime" classNameName="text-muted">Estimated Time</label>
      //         <input type="text" classNameName="form-control" id="estimatedTime" />
      //       </div>
      //     </div>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <input type="textarea" classNameName="form-control" id="courseDescription" />
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label for="materialsNeede" classNameName="text-muted">Materials Needed</label>
      //         <input type="textarea" classNameName="form-control" id="materialsNeeded" />
      //       </div>
      //     </div>
      //   <button type="submit" classNameName="btn btn-primary rounded">Update Course</button>
      //   <button type="submit" classNameName="btn btn-secondary rounded">Cancel</button>
      // </form>
    )
  }
}