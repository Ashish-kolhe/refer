import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className=" flex-row justify-items-center mt-4 ">
    <img className='w-24' src="./rupee.gif" alt="" />
    <h1 className="font-black text-sm text-gray-900 mt-2">Be the First to Refer and Earn!</h1>
    <div className="overflow-x-auto mt-8 border-2 border-secondary rounded-2xl">
  <table className="table text-center bg-white">
    {/* head */}
    <thead>
      <tr className="text-secondary">
       
        <th>Level</th>
        <th>Range</th>
        <th>₹ Per Referral</th>
        <th>Earnings</th>
      </tr>
    </thead>
    <tbody className="text-sm font-bold">
      {/* row 1 */}
      <tr>
        
        <td>Starter</td>
        <td>0-9</td>
        <td>₹10</td>
        <td>₹90</td>
      </tr>
      {/* row 2 */}
      <tr className="text-info">
        
      <td>Level 1</td>
        <td>10-24</td>
        <td>₹13</td>
        <td>₹195</td>
      </tr>
      {/* row 3 */}
      <tr className="text-success">
        
      <td>Level 2</td>
        <td>25-49</td>
        <td>₹15</td>
        <td>₹375</td>
      </tr>
      <tr className="text-red-500">
        
        <td>Level 3</td>
          <td>50-99</td>
          <td>₹17</td>
          <td>₹850</td>
        </tr>
        
    </tbody>
  </table>
</div>
<h1 className="font-black text-sm text-gray-800 mt-3">Total Estimated Earnings for <span className="text-green-500 ">100</span> Referrals:</h1>
<h1 className="text-3xl font-black text-secondary mt-1 mb-20">₹1500</h1>
   {/*
    <div className="text-sm font-black   badge-secondary rounded-tl-xl rounded-tr-xl px-2 ">January 2025</div>
      <div className="flex justify-center max-w-2xl ">
      <div className="overflow-x-auto border-2 border-secondary rounded-tl-2xl rounded-br-2xl p-4">
  <table className="table">
  
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
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
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
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
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
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
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
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
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
    </tbody>
   
  </table>
</div>
</div>
*/}
    </div>
    <Footer/>
    </div>
  );
}
