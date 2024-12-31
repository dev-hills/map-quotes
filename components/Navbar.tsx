import Bell from "@/icons/Bell";
import ChatOutline from "@/icons/ChatOutline";
import Search from "@/icons/Search";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import avatar from "../public/avatar-1.svg";

const Navbar = () => {
  return (
    <header className="w-[100%] px-[32px] py-[12px] border-[1px] border-[#F0F2F5] border-x-0  border-t-0">
      <div className="flex flex-row items-center justify-end gap-[40px]">
        <div className="w-[450px] h-[40px] border-[1px] border-[#E4E7EC] rounded-[6px] py-[10px] px-[12px] flex flex-row items-center gap-[8px]">
          <Search />
          <input
            type="text"
            className="bg-none w-[100%] outline-none placeholder:font-satoshi placeholder:text-[14px] placeholder:text-dark-700 placeholder:font-normal"
            placeholder="Search here..."
          />
        </div>

        <div className="flex flex-row items-center gap-[16px]">
          <Bell />
          <ChatOutline />

          <div className="flex flex-row items-center gap-[8px]">
            <Image src={avatar} alt="" />
            <ChevronDown color="#667185" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
