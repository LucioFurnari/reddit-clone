import LoginPage from "./LoginPage";
import SignUp from "./SignUpPage";

function UserAuthContainer () {
  return (
    <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-5 rounded-lg">
      {false ? <LoginPage /> : <SignUp />}
    </section>
  )
}

export default UserAuthContainer;