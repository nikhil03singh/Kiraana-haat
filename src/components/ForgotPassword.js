import React, { useRef, useState , useEffect} from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
      <Card.Header><h2 className="text-center mb-2">Password Reset</h2></Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
    </Container>
  )
}