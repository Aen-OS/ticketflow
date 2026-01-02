import { UserRound } from "lucide-react";

export default function Myaccount() {
  return (
    <main className="flex flex-col gap-3 m-5 font-sans px-5 lg:container lg:mx-auto">
      <div className="border-2 p-5">
        <div className="flex flex-row">
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-20 rounded-full">
              <UserRound size={24} />
            </div>
          </div>
          <h1 className="text-2xl p-5 self-center">
            Sarah Chen - 1st Line IT Engineer
          </h1>
        </div>
        <div className="grid grid-cols-4 wrap gap-5 m-5">
          <div className="flex flex-row col-span-4 gap-5">
            <div className="flex flex-col">
              <label for="ACFname" className="my-2">
                First Name
              </label>
              <input
                id="ACFname"
                className="input"
                type="text"
                placeholder="Sarah"
                disabled
              ></input>
            </div>
            <div className="flex flex-col">
              <label for="ACLname" className="my-2">
                Last Name
              </label>
              <input
                id="ACLname"
                className="input"
                type="text"
                placeholder="Chen"
                disabled
              ></input>
            </div>
          </div>
          <div className="flex flex-row col-span-4 gap-5">
            <div className="flex flex-col">
              <label for="ACemail" className="my-2">
                Email Address
              </label>
              <input
                id="ACemail"
                type="text"
                className="input w-65"
                placeholder="sarah-chen@helpdesk-demo.com"
                disabled
              ></input>
            </div>
          </div>
          <div className="flex flex-row col-span-4 gap-5">
            <div className="flex flex-col gap-2">
              <p>Forgot password?</p>
              <p>Contact security team at ITsec@helpdesk-dashboard.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
