import './index.css'

const UserProfile = props => {
  const {userDetailsList} = props
  const {imageUrl, name, role} = userDetailsList
  return (
    <div className="user-card-container">
      <img src={imageUrl} className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation ">{role}</p>
      </div>
    </div>
  )
}
export default UserProfile
