import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <h1 className="profile-page__title">My Profile</h1>
      </div>
      <div className="profile-page__content">
        <div className="profile-page__info">
          <h2 className="profile-page__subtitle">Personal Information</h2>
          <div className="profile-page__row">
            <label className="profile-page__label">Name:</label>
            <p className="profile-page__text">John Doe</p>
          </div>
          <div className="profile-page__row">
            <label className="profile-page__label">Email:</label>
            <p className="profile-page__text">johndoe@example.com</p>
          </div>
          <div className="profile-page__row">
            <label className="profile-page__label">Phone:</label>
            <p className="profile-page__text">123-456-7890</p>
          </div>
        </div>
        <div className="profile-page__orders">
          <h2 className="profile-page__subtitle">My Orders</h2>
          <div className="profile-page__order">
            <p className="profile-page__order-details">
              Order #12345 - Date: 2023-05-27
            </p>
            <p className="profile-page__order-status">Status: Delivered</p>
          </div>
          <div className="profile-page__order">
            <p className="profile-page__order-details">
              Order #67890 - Date: 2023-05-20
            </p>
            <p className="profile-page__order-status">Status: Shipped</p>
          </div>
          {/* More order items */}
        </div>
      </div>
    </div>
  )
}

export default Profile