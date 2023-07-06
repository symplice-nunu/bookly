import React, { useState }  from 'react'

export default function RecommendedHotel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
        <div className='text-[30px] my-[20px] font-bold'>Other Recommended Hotel</div>
        <div className='flex gap-24'>
          <div></div>
          <div></div>
          <div>Most popular hotels</div>
        </div>
        <div>
      <div className="flex">
        {/* Tab buttons */}
        <button
          className={`px-4 py-2 mr-2 rounded-t-md ${
            activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(0)}
        >
          Similar hotels nearby
        </button>
        <button
          className={`px-4 py-2 rounded-t-md ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Top recommended hotels
        </button>
        <button
          className={`px-4 py-2 rounded-t-md ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Top recommended hotels
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-2 p-4 border border-gray-300 rounded-b-md">
        {activeTab === 0 && <p>Tab 1 Content</p>}
        {activeTab === 1 && <p>Tab 2 Content</p>}
      </div>
    </div>
    </div>
  )
}
