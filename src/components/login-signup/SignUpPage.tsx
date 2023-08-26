import { MdiClose } from "../ReactIcons";

function SignUp () {
  return (
    <fieldset>
      <button className="p-2 block ml-auto"><MdiClose /></button>
      <h2 className="text-black text-xl">Sign Up</h2>
      <form className="flex flex-col mt-10">
        <input className="bg-gray-100 mt-2 p-2 rounded-full" type="email" placeholder="Email"></input>
        <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Username" ></input>
        <input className="bg-gray-100 mt-2 p-2 rounded-full" type="text" placeholder="Password"></input>
        <button className="bg-[--button-orange] mt-10 py-1 rounded-full">Log In</button>
      </form>
      <p className="text-black mt-4">Already a redditor? <a className="text-[#0079d3] underline cursor-pointer">Log In</a></p>
    </fieldset>
  )
}

export default SignUp;