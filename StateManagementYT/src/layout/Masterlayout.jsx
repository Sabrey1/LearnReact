import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Masterlayout = () => {
  return (
    <div className="min-vh-100 bg-light">
      <header className="py-3 bg-primary text-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <h5 className="mb-0">State Management</h5>
            <small className="opacity-75">with Redux Toolkit</small>
          </div>
          <nav>
            <Link to="/" className="btn btn-outline-light btn-sm">Products</Link>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Masterlayout
