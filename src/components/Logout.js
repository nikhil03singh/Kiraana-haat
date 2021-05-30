import React, { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <strong>Do you want to logout?</strong>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
      </div>
    </Container>
  )
}