function ProfileList(props) {
   const {userData}= props;
  return (
    <div className='user-profile'>
        <div className='img-ct'>
            <img 
            className='profile-image'
             src= {userData.picture}
            alt = {`${userData.firstName}`} />
        </div>
        <div className='profile-info'>
           <p> ID : {userData.id} </p>
           <h2> {`${userData.firstName} ${userData.lastName}`} </h2>
           
        </div>
    </div>
  )
}

export default ProfileList
