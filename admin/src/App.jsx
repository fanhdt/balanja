import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton mode="modal" />
      </SignedIn>
    </div>
  );
};

export default App;
