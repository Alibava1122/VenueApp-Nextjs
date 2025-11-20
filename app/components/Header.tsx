import Image from "next/image";

import { ChevronDownIcon } from "@/app/components/icons/ChevronDownIcon";
import { UserIcon } from "@/app/components/icons/UserIcon";

const dropdownStyles =
  "rounded-2xl px-4 py-4 pr-10 text-[15px] font-semibold text-orange-500  appearance-none bg-white";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-6">
      <div >
        <Image src="/assets/logo.png" alt="Logo" width={60} height={60} priority />
      
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <select className={dropdownStyles} defaultValue="add">
            <option value="add">Add Your Listing</option>
            <option value="rent">List a Rental</option>
            <option value="sell">List for Sale</option>
          </select>
          <ChevronDownIcon className=" absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="relative">
          <select className={dropdownStyles} defaultValue="en">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex items-center gap-3 h-13 w-13 rounded-2xl border bg-white px-3 py-1.5 backdrop-blur">
          <UserIcon />
        </div>
      </div>
    </header>
  );
}

