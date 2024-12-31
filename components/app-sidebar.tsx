import logo from "../public/logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import QuestionCircle from "@/icons/question-circle";
import Settings from "@/icons/Settings";
import avatar from "../public/avatar-2.svg";
import SignOut from "@/icons/SignOut";
import Grid from "@/icons/Grid";
import Box from "@/icons/Box";
import Cart from "@/icons/Cart";
import Money from "@/icons/money";
import Chat from "@/icons/Chat";
import Contract from "@/icons/Contract";
import Calendar from "@/icons/Calendar";
import { ChevronRight } from "lucide-react";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function AppSidebar() {
  return (
    <Sidebar className="bg-dark-50">
      <SidebarContent className="">
        <SidebarGroup className="h-full flex items-start justify-between">
          <SidebarGroup>
            <SidebarHeader className="mt-[24px] mb-[12px]">
              <Image src={logo} alt="Logo" />
            </SidebarHeader>

            <SidebarGroupContent>
              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Grid />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Dashboard
                </p>
              </SidebarGroup>

              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Box />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Inventory
                </p>
              </SidebarGroup>

              <Collapsible defaultOpen className="group/collapsible">
                <CollapsibleTrigger asChild>
                  <SidebarGroup className="bg-primary-100 rounded-[4px] flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                    <Cart />
                    <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                      Procurement
                    </p>
                    <ChevronRight
                      color="#344054"
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarGroup>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-[8px]">
                  <SidebarMenuSub className="w-[100%] border-l-0">
                    <SidebarMenuSubItem className="bg-primary-100 w-[100%] py-[10px] rounded-[4px]">
                      <SidebarMenuSubButton asChild>
                        <a
                          href="#"
                          className="font-satoshi font-medium text-dark-400 text-[14px]"
                        >
                          Quotes
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem className="w-[100%] py-[10px] rounded-[4px]">
                      <SidebarMenuSubButton asChild>
                        <a
                          href="#"
                          className="font-satoshi font-medium text-dark-400 text-[14px]"
                        >
                          Orders
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>

              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Money />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Finance
                </p>
              </SidebarGroup>

              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Chat />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Communication
                </p>
              </SidebarGroup>

              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Calendar />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Calendar
                </p>
              </SidebarGroup>

              <SidebarGroup className="flex flex-row items-center gap-[12px] py-[12px] cursor-pointer">
                <Contract />
                <p className="font-satoshi text-[14px] text-dark-400 font-normal">
                  Contracts
                </p>
              </SidebarGroup>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarFooter>
            <SidebarMenu>
              <div className="flex flex-col gap-[4px]">
                <div className="flex flex-row items-center gap-[12px] px-[16px] py-[12px] cursor-pointer">
                  <QuestionCircle />
                  <p className="text-dark-400 text-[14px] font-satoshi font-normal">
                    Support
                  </p>
                </div>

                <div className="flex flex-row items-center gap-[12px] px-[16px] py-[12px] cursor-pointer">
                  <Settings />
                  <p className="text-dark-400 text-[14px] font-satoshi font-normal">
                    Settings
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[25px] px-[10px] my-[32px]">
                <div className="flex flex-row gap-[12px]">
                  <Image src={avatar} alt="" />

                  <div>
                    <h3 className="font-satoshi font-bold text-dark-600 text-[14px]">
                      Mark Benson
                    </h3>
                    <h3 className="font-satoshi font-regular text-dark-500 text-[14px] truncate">
                      {/* markbenson@coremed.com */}
                      markbenson@core...
                    </h3>
                  </div>
                </div>

                <div className="cursor-pointer">
                  <SignOut />
                </div>
              </div>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
