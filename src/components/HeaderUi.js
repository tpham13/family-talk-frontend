import React from 'react';
import { connect } from 'react-redux';


const Header = ({ currentUser }) => (
    <div className="header">
        <h1> {currentUser.attributes.group.name} family</h1> 
 
    </div>
  );

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  }
}
export default connect(mapStateToProps) (Header)
  
