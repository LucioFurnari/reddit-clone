
function LoginPage () {
  return (
    <fieldset>
      <h2 className="text-black">Log In</h2>
      <form className="flex flex-col">
        <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Name"></input>
        <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Password"></input>
        <button className="bg-[--button-orange] mt-2 py-1 rounded-full">Log In</button>
      </form>
      <p className="text-black mt-2">New to Reddit? <a className="text-[#0079d3] underline cursor-pointer">Sign Up</a></p>
    </fieldset>
  )
}

export default LoginPage;