"use client";

import { Check, ChevronDown, Folder, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

function StepOne() {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Left Side - Blue Gradient */}
      <div className="relative w-1/2 h-full bg-linear-to-br from-sky-300 via-sky-400 to-blue-400 overflow-hidden">
        {/* Subtle diagonal light streaks */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-[200%] bg-linear-to-b from-white/40 to-transparent rotate-25 -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-64 h-[200%] bg-linear-to-b from-white/20 to-transparent rotate-25 -translate-y-1/2" />
        </div>
      </div>

      {/* Wireframe Browser Mockup - Positioned to span across the border */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[52%] h-[55%] z-10">
          {/* Browser Frame - Outline */}
          <div className="rounded-2xl border border-white/40 overflow-visible h-full flex flex-col">
            {/* Tab Bar */}
            <div className="flex items-stretch border-b border-white/30">
              {/* Traffic light circles */}
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-3 h-3 rounded-full border border-white/50" />
                <div className="w-3 h-3 rounded-full border border-white/50" />
                <div className="w-3 h-3 rounded-full border border-white/50" />
              </div>
              {/* Vertical divider - full height */}
              <div className="w-px bg-white/30" />
              {/* Home text */}
              <div className="flex items-center px-4">
                <span className="text-white/80 text-base font-medium">Home</span>
              </div>
              {/* Vertical divider - full height */}
              <div className="w-px bg-white/30 ml-auto" />
              {/* Plus button */}
              <div className="flex items-center px-4 text-white/50">
                <Plus className="w-5 h-5" />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 flex items-start justify-center pt-8">
              {/* Prompt Box */}
              <div className="relative bg-white rounded-2xl shadow-xl pt-5 px-5 pb-28 w-full">
                {/* Placeholder text */}
                <p className="text-gray-400 text-sm">
                  Enter your task and submit it to MiniMax Agent.
                </p>

                {/* Bottom row: circles and dropdown - bottom left corner */}
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  {/* Two circular buttons */}
                  <div className="w-7 h-7 rounded-full bg-gray-200/80" />
                  <div className="w-7 h-7 rounded-full bg-gray-200/80" />

                  {/* Workspace Dropdown - same gap as circles */}
                  <div className="relative">
                    <button className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-sm text-gray-700 border border-gray-200">
                      <Folder className="w-4 h-4 text-gray-400" />
                      <span>MiniMax Cowork</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {/* Popover Menu */}
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-visible">
                      <div className="px-3 py-2">
                        <span className="text-xs text-gray-400 font-medium">Default</span>
                      </div>
                      <div className="relative flex items-center justify-between px-3 py-2.5 bg-gray-50">
                        <span className="text-sm text-gray-700">~/Documents/MiniMax Cowork</span>
                        <Check className="w-4 h-4 text-gray-700" />
                        {/* Cursor pointer */}
                        <div className="absolute right-0 top-full -translate-y-2 translate-x-1">
                          <svg
                            className="w-5 h-5 text-gray-900 drop-shadow-md -scale-x-100"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100">
                        <span className="text-sm text-gray-700">Select a folder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Right Side - Dark Content Area */}
      <div className="relative w-1/2 h-full bg-[#0a0a0a] flex flex-col items-center justify-center px-16 overflow-hidden z-20">
        <div className="max-w-sm w-full space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Deep integration with local files
            </h1>
            <p className="text-gray-400 text-base leading-relaxed">
              Select a workspace and let AI read, analyze, and batch-process everything
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <Button
              variant="outline"
              className="w-full h-11 rounded-lg border-white/20 bg-transparent text-white hover:bg-white/5 hover:text-white font-medium"
            >
              Next
            </Button>
            <button className="w-full text-center text-gray-400 hover:text-white transition-colors text-sm py-2">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
