import React, { useRef, useState, useEffect  } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux";

export default function Signup() {
  const nameRef=useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh",
            }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Card id="card" border="success" style={{ borderRadius: "20px" }}>
      <Card.Header><h2 className="text-center mb-2">Sign Up</h2></Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"placeholder="User Name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 fa fa-sign-in fa-fw" type="submit">
            &nbsp; Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
    </Container>
  )
}