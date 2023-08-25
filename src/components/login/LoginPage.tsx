
function LoginPage () {
  return (
    <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg">
      <fieldset>
        <h2 className="text-black">Log In</h2>
        <form className="flex flex-col">
          <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Name"></input>
          <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Password"></input>
          <button className="bg-[--button-orange] mt-2 py-1 rounded-full">Log In</button>
        </form>
      </fieldset>
    </section>
  )
}

export default LoginPage;