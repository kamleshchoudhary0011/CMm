import React from 'react'

const EmMyTask = () => {
  return (
    <div>
       <div class="max-w-md mx-auto space-y-4">

    {/* <!-- My Tasks --> */}
    <div class="bg-white rounded-2xl shadow p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">My Tasks</h2>
        <button class="bg-gray-100 px-3 py-1 rounded-lg text-sm">+ New Task</button>
      </div>

      {/* <!-- Task Item --> */}
      <div class="space-y-3">

        <div class="flex items-center justify-between border-b pb-2">
          <div class="flex items-center gap-2">
            <input type="checkbox"/>
            <div>
              <p class="font-medium">Design Review</p>
              <p class="text-xs text-gray-400">Apr 25</p>
            </div>
          </div>
          <span class="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-lg">In Progress</span>
        </div>

        <div class="flex items-center justify-between border-b pb-2">
          <div class="flex items-center gap-2">
            <input type="checkbox"/>
            <div>
              <p class="font-medium">Client Meeting</p>
              <p class="text-xs text-gray-400">Apr 24</p>
            </div>
          </div>
          <span class="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded-lg">Upcoming</span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <input type="checkbox"/>
            <div>
              <p class="font-medium">Code Review</p>
              <p class="text-xs text-gray-400">Apr 23</p>
            </div>
          </div>
          <span class="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-lg">In Progress</span>
        </div>

      </div>
    </div>

    {/* <!-- Attendance --> */}
    <div class="bg-white rounded-2xl shadow p-4">
      <h2 class="text-lg font-semibold mb-4">My Attendance</h2>

      <div class="space-y-2">
        <div class="flex justify-between text-sm border-b pb-2">
          <p>April 10 - <span class="font-medium text-green-600">Present</span></p>
          <p>9:05 AM</p>
        </div>

        <div class="flex justify-between text-sm">
          <p>April 11 - <span class="font-medium text-red-500">Absent</span></p>
          <p>✔</p>
        </div>
      </div>
    </div>

    {/* <!-- Performance --> */}
    <div class="bg-white rounded-2xl shadow p-4">
      <h2 class="text-lg font-semibold mb-4">Performance</h2>

      <div class="grid grid-cols-4 gap-3 text-center">

        {/* <!-- Circle --> */}
        <div>
          <div class="w-14 h-14 mx-auto rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-semibold">
            85%
          </div>
          <p class="text-xs mt-1">Task</p>
        </div>

        <div>
          <div class="w-14 h-14 mx-auto rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-semibold">
            160
          </div>
          <p class="text-xs mt-1">Hours</p>
        </div>

        <div>
          <div class="w-14 h-14 mx-auto rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-semibold">
            8
          </div>
          <p class="text-xs mt-1">Projects</p>
        </div>

        <div>
          <div class="w-14 h-14 mx-auto rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-semibold">
            4.5
          </div>
          <p class="text-xs mt-1">Rating</p>
        </div>

      </div>
    </div>

  </div>
    </div>
  )
}

export default EmMyTask
