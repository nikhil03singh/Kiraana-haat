import React, { useState } from "react"
import { Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function Dashboard() {
  const [error] = useState("")
  const { currentUser} = useAuth()

  return (
    <div className="container">
      <div >
        <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </div>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card id="card" border="success" style={{ borderRadius: "20px" }}>
            <Card.Header><h2 className="text-center mb-2">Profile</h2></Card.Header>
                <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                    Update Profile
                </Link>
                </Card.Body>
            </Card>
        </div>
      </Container>
    </div>
  )
}
