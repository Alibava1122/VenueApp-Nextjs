"use client";

import { useState } from "react";

import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { VendorsIcon } from "./icons/VendorsIcon";
import { VenueIcon } from "./icons/VenueIcon";

export function SearchFilters() {
  const [activeCategory, setActiveCategory] = useState<"venue" | "vendors">("venue");

  return (
    <div className="relative w-full max-w-5xl pt-12">
      <div className="pointer-events-auto absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-[-15%] items-center gap-2 rounded-[9px] bg-white px-2 py-2 text-gray-900 shadow-lg">
        <button
          className={`flex items-center gap-2 rounded-[9px] px-5 py-2 text-base font-semibold  ${
            activeCategory === "venue"
              ? "bg-[#FF5037] text-white"
              : "bg-transparent text-gray-900"
          }`}
          onClick={() => setActiveCategory("venue")}
          type="button"
        >
          <VenueIcon className={`h-6 w-6 ${activeCategory === "venue" ? "text-white" : "text-gray-500"}`} />
          Venue
        </button>
        <button
          className={`flex items-center gap-2 rounded-[9px] px-5 py-2 text-base font-semibold  ${
            activeCategory === "vendors"
              ? "bg-[#FF5037] text-white"
              : "bg-transparent text-gray-900"
          }`}
          onClick={() => setActiveCategory("vendors")}
          type="button"
        >
          <VendorsIcon
            className={`h-4 w-4 ${
              activeCategory === "vendors" ? "text-white" : "text-gray-400"
            }`}
          />
          Vendors
        </button>
      </div>
      <div className="w-full rounded-2xl bg-white p-6 text-gray-900 shadow-xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-3 text-left">
            <span className="text-[14px] text-gray-600">
              Where
            </span>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl  p-3 pr-10 text-base font-medium text-gray-800 focus:border-gray-300 focus:outline-none focus:ring-0">
                <option>Dubai</option>
                <option>UAE</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </label>
          <label className="flex flex-col gap-2 text-left">
            <span className="text-[14px] text-gray-600">
              When
            </span>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl p-3 pr-10 text-base font-medium text-gray-800 focus:border-gray-300 focus:outline-none focus:ring-0">
                <option>Anytime</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </label>
          <label className="flex flex-col gap-2 text-left">
            <span className="text-[14px] text-gray-600">
              Guests
            </span>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl  p-3 pr-10 text-base font-medium text-gray-800 focus:border-gray-300 focus:outline-none focus:ring-0">
                <option>10-20</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </label>
          <button
            className="mt-auto flex items-center justify-center gap-2 rounded-[8px] p-3 text-[20px] font-semibold text-white "
            style={{ backgroundColor: "#FF5037" }}
          >
            <SearchIcon className="h-6 w-6" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

