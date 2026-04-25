import React from 'react'

const EmployeDashboard = () => {
  return (
    <div>
    
  <div class="flex min-h-screen">

    {/* <!-- Sidebar --> */}
    <div class="w-16 bg-white shadow flex flex-col items-center py-4 space-y-6">
      <div class="w-10 h-10 bg-green-200 rounded-lg"></div>
      <div class="w-10 h-10 bg-gray-200 rounded-lg"></div>
      <div class="w-10 h-10 bg-gray-200 rounded-lg"></div>
    </div>

    {/* <!-- Main --> */}
    <div class="flex-1 p-4 space-y-4">

      {/* <!-- Header --> */}
      <div class="flex justify-between items-center">
        <input type="text" placeholder="Try to search..."
          class="bg-gray-200 px-4 py-2 rounded-full w-1/2 outline-none"/>

        <div class="flex items-center gap-4">
          <div class="w-5 h-5 bg-gray-400 rounded"></div>
          <div class="relative">
            <div class="w-5 h-5 bg-gray-400 rounded"></div>
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <img src="https://i.pravatar.cc/40" class="w-8 h-8 rounded-full"/>
        </div>
      </div>

      <h1 class="text-2xl font-semibold">Dashboard</h1>

      {/* <!-- My Tasks --> */}
      <div class="bg-white p-4 rounded-2xl shadow">
        <div class="flex justify-between mb-4">
          <h2 class="font-semibold">My Tasks</h2>
          <span class="text-sm text-gray-400">View All</span>
        </div>

        <div class="space-y-3">

          {/* <!-- Task --> */}
          <div class="flex justify-between items-center border-b pb-2">
            <div class="flex gap-3 items-center">
              <div class="w-1 h-10 bg-green-400 rounded"></div>
              <div>
                <p class="font-medium">Design Review</p>
                <p class="text-xs text-gray-400">Apr 25</p>
              </div>
            </div>
            <span class="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-lg">In Progress</span>
          </div>

          <div class="flex justify-between items-center border-b pb-2">
            <div class="flex gap-3 items-center">
              <div class="w-1 h-10 bg-purple-400 rounded"></div>
              <div>
                <p class="font-medium">Client Meeting</p>
                <p class="text-xs text-gray-400">Apr 24</p>
              </div>
            </div>
            <span class="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded-lg">Upcoming</span>
          </div>

          <div class="flex justify-between items-center border-b pb-2">
            <div class="flex gap-3 items-center">
              <div class="w-1 h-10 bg-purple-400 rounded"></div>
              <div>
                <p class="font-medium">Code Review</p>
                <p class="text-xs text-gray-400">Apr 23</p>
              </div>
            </div>
            <span class="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-lg">In Progress</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
              <div class="w-1 h-10 bg-blue-400 rounded"></div>
              <div>
                <p class="font-medium">Write Report</p>
                <p class="text-xs text-gray-400">Apr 22</p>
              </div>
            </div>
            <span class="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-lg">Completed</span>
          </div>

        </div>
      </div>

      {/* <!-- Notifications --> */}
      <div class="bg-white p-4 rounded-2xl shadow">
        <div class="flex justify-between mb-4">
          <h2 class="font-semibold">Notifications</h2>
          <span class="text-sm text-gray-400">View All</span>
        </div>

        <div class="space-y-3">

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=1" class="w-8 h-8 rounded-full"/>
              <div>
                <p class="text-sm font-medium">Project Launch Tomorrow</p>
                <p class="text-xs text-gray-400">Prepare presentation</p>
              </div>
            </div>
            <span class="text-xs text-gray-400">Yesterday</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=2" class="w-8 h-8 rounded-full"/>
              <div>
                <p class="text-sm font-medium">Task Completed</p>
                <p class="text-xs text-gray-400">Write report completed</p>
              </div>
            </div>
            <span class="text-xs text-gray-400">Yesterday</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=3" class="w-8 h-8 rounded-full"/>
              <div>
                <p class="text-sm font-medium">Leave Approved</p>
                <p class="text-xs text-gray-400">Leave request approved</p>
              </div>
            </div>
            <span class="text-xs text-gray-400">2 days ago</span>
          </div>

        </div>
      </div>

    </div>

  </div>
    </div>
  )
}

export default EmployeDashboard
