import './Login.scss'

const Login = () => {
  const handleSubmit = () => {}

  return (
    <div className="login">
      <div className="card">
        <section className="left">
          <h1>NexusWeb</h1>
          <p>
            NexusWeb helps you connect and share with the people in your life.
          </p>
          <hr className="hr" />
          <span>Don't you have an account?</span>
          <button>Create Account</button>
        </section>
        <section className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id=""
            />
            <button>Login</button>
          </form>
        </section>
      </div>
    </div>
  )
}
export default Login
