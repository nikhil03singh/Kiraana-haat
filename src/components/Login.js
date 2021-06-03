import React, { useRef, useState,useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Card id="card" border="success" style={{ borderRadius: "20px" }}>
      <Card.Header><h2 className="text-center mb-2">Log In</h2></Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 fa fa-sign-in fa-fw" type="submit">
              &nbsp; Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
    </Container>
  )
}