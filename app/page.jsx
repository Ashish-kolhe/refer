import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" flex-row justify-items-center mt-4 mb-10">


        <div className="text-sm font-black   badge-secondary rounded-tl-xl rounded-tr-xl px-2 ">January 2025</div>
        <div className="flex justify-center max-w-2xl ">
          <div className=" border-secondary border-t-2 p-4">
            <table className="table ">

              <thead>
                <tr>

                  <th>Name</th>
              
                  <th>Revenue</th>
                  <th>Referals</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                <tr>

                  <td>
                    <div className="flex items-center gap-3 ">
                    <div className="skeleton h-12 w-12"></div>
                      {/*
                      <div className="avatar placeholder "
                        <div className="bg-blue-800 text-white w-12 rounded-full font-bold text-lg ">
                          <span>-</span>
                        </div>
                      </div>*/}
                      <div>
                      <div className="skeleton h-2 w-12 my-2"></div>
                      <div className="skeleton h-2 w-16"></div>
                      </div>
                    </div>
                  </td>
             
                  <td className="text-lg font-bold">
                  <div className="skeleton h-2 w-8 my-2"></div>
                  </td>
                  <td>
                  <div className="skeleton h-2 w-4 my-2"></div>
                  </td>

                </tr>

                <tr>

                  <td>
                    <div className="flex items-center gap-3">
                    <div className="skeleton h-12 w-12"></div>
                     {/*   
                      <div className="avatar placeholder">
                        <div className="bg-pink-500 text-white w-12 rounded-full font-bold text-lg">
                          <span>I</span>
                        </div>
                      </div>*/}
                      <div>
                      <div className="skeleton h-2 w-12 my-2"></div>
                      <div className="skeleton h-2 w-16"></div>
                      </div>
                    </div>
                  </td>
        
                  <td className="text-lg font-bold">
                  <div className="skeleton h-2 w-8 my-2"></div>
                  </td>
                  <td>
                  <div className="skeleton h-2 w-4 my-2"></div>
                  </td>

                </tr>
{/*
                <tr>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-green-950 text-white w-12 rounded-full font-bold text-lg">
                          <span>N</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
         
                  <td className="text-lg font-bold">
                    ₹110
                  </td>
                  <td>11</td>

                </tr>

                <tr>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-red-950 text-white w-12 rounded-full font-bold text-lg">
                          <span>A</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
             
                  <td className="text-lg font-bold">
                    ₹110
                  </td>
                  <td>11</td>

                </tr>
                */}
              </tbody>

            </table>
            <div role="alert" className="alert my-8 bg-pink-50">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-secondary h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span className="text-sm font-semibold">If you're registered but not on the leaderboard yet, don't worry 😅, it will be updated within 24 hrs ⏰!</span>
</div>

          </div>
        </div>
<img className="w-28" src="./relax.gif" alt="" />
<h1 className="text-sm font-bold text-gray-800">Just Sit back And Relax!</h1>

<div className="max-w-2xl mt-14 text-sm font-bold px-4">
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-lg font-bold">❓ Is there a minimum payment limit for referrals?</div>
  <div className="collapse-content">
    <p>No, there’s no minimum limit! If you’ve referred, you’ll get paid. Simple as that! 💸</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-bold">❓ When will I receive my payment?</div>
  <div className="collapse-content">
    <p>Payments will be processed on the 1st of every month! Mark your calendars! 📅</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-bold">❓ How will I receive my money?</div>
  <div className="collapse-content">
    <p>You’ll get your payment via UPI to your registered phone number 📱. It’s fast and easy! 💰</p>
  </div>
</div>
</div>
      </div>
      <Footer />
    </div>
  );
}
