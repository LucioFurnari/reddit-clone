
function LoginPage () {
  return (
    <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <fieldset>
        <form className="flex flex-col">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Password"></input>
        </form>
      </fieldset>
    </section>
  )
}

export default LoginPage;