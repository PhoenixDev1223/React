import React, {Component, useState} from 'react';
import toastr from 'cogo-toast';
import Create from './Create';

export default function Create() {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState([]);
    const [mobile_no, setMobile_no] = useState([]);
    const [email, setEmail] = useState([]);

    const handleInputFieldChange = e => {
        switch(e.target.name){
            case 'errors':setErrors(e.target.value); break;
            case 'username':setUsername(e.target.value); break;
            case 'mobile_no':setMobile_no(e.target.value); break;
            case 'email':setEmail(e.target.value); break;
            default: break;
            };
        this.baseState = this.state
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.handleInsertUser = this.handleInsertUser.bind(this);
        this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    }

    const handleInsertUser = e => {
        e.preventDefault()
        const data = {
            id: id,
            username: username,
            mobile_no: mobile_no,
            email: email
        };
        if( !checkValidation(data) ) {
            reset();
            updateState(data, 0);
            document.getElementById("closeAddModal").click();
            toastr.success("New user added successfully",{position : 'top-right', heading: 'Done'} );           
        };
        axios
        .put('http://localhost:8082/api/users/'+this.props.match.id, data)
        .then(res => {
        switch(e.target.name){
            case 'errors':setErrors(e.target.value); break;
            case 'username':setUsername(e.target.value); break;
            case 'mobile_no':setMobile_no(e.target.value); break;
            case 'email':setEmail(e.target.value); break;
            default: break;
            }
        })
        .catch(err => {
          console.log("Error in new user!");
        })
    };
    return(
        <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title">New user</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			        <form onSubmit={handleInsertUser.bind(null)}>
			      		<div className="modal-body">
			          		<div className="form-group">
			            		<label htmlFor="username" className="col-form-label">User name:</label>
			            		<input type="text" className={`form-control form-control-sm ${hasErrorFor.bind('username') ? 'is-invalid' : ''}`}
			            		 id="username" name="username" placeholder="User name" onChange={handleInputFieldChange.bind(null)} value={username}/>
			            		{renderErrorFor.bind('username')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="mobile_no" className="col-form-label">Mobile No:</label>
			            		<input type="number" className={`form-control form-control-sm ${hasErrorFor.bind('mobile_no') ? 'is-invalid' : ''}`}
			            		 id="mobile_no" name="mobile_no" placeholder="Mobile no" onChange={handleInputFieldChange.bind(null)} value={mobile_no}/>
			            		{renderErrorFor.bind('mobile_no')}
			          		</div>
			          		<div className="form-group">
			            		<label htmlFor="email" className="col-form-label">Email:</label>
			            		<input type="email" className={`form-control form-control-sm ${hasErrorFor.bind('email') ? 'is-invalid' : ''}`}
			            		 id="email" name="email" placeholder="Email" onChange={handleInputFieldChange.bind(null)} value={email}/>
			            		{renderErrorFor.bind('email')}
			          		</div>
			      		</div>
			      		<div className="modal-footer">
			        		<button type="button" id="closeAddModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
			        		<button type="submit" className="btn btn-primary btn-sm">Save User</button>
			      		</div>
			   		</form>
			    	</div>
			  	</div>
			</div>
    );
};