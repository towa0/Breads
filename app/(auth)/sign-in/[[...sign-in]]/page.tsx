import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignIn />
      <div className="bg-dark-2 p-7 w-auto sm:w-[20vw] mt-10 rounded-lg ml-7 mr-7 sm:mr-0">
        <p className="text-base-semibold text-light-1">Don't trust me?</p>
        <p className="text-base-semibold text-light-1">Username: DemoUser</p>
        <p className="text-base-semibold text-light-1">
          Password: aVerySecurePassWord123?!
        </p>
      </div>
    </div>
  );
}
