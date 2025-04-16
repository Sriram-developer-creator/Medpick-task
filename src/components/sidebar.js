import React from 'react'

const Sidebar = () => {
  return (
    <aside className="bg-dark text-white p-4" style={{ width: "250px" }}>
        <h1 className="h4 mb-4">Vajra</h1>
        <nav className="nav flex-column">
          {["Dashboard", "Assets", "Incidents", "Services", "Request", "Users", "Reports"].map((item) => (
            <button key={item} className="btn btn-link text-white text-start mb-2">
              {item}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="btn btn-primary w-100 mb-2">Contact us</button>
          <button className="btn btn-danger w-100">Log Out</button>
        </div>
      </aside>
  )
}

export default Sidebar