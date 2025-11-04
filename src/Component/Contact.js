import React from 'react'

const Contact = () => {
  return (
    <div class="col-md-6">

      <div class="card contact" >
          <div class="card-header" >
            CONTACT ME
          </div>
          <ul class="list-group list-group-flush">
                <form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">share your email so that we can reach to you.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="purpose">Purpose</label>
                      <input type="purpose" className="form-control" id="purpose" placeholder="purpose"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="feedback">Feedback</label>
                      <input type="feedback" className="form-control" id="feedback" placeholder="Feedback"/>
                    </div>
                    <button type="submit" className="btn btn-primary consub">Submit</button>
                </form>
          </ul>
      </div>
      
    </div>
  )
}

export default Contact
