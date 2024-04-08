
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from "next/link";

function SideBar() {
    return (
        <Sidebar className="bg-green-600 rounded-xl p-5 m-5 h-full" aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup className="flex flex-col gap-5">
                    <Sidebar.Item className="flex gap-x-3 text-black hover:bg-green-400" href="#">
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3 text-black hover:bg-green-400" href="#">
                        Kanban
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3 text-black hover:bg-green-400" href="#">
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3 text-black hover:bg-green-400" href="#">
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3 text-black hover:bg-green-400" href="#">
                        Products
                    </Sidebar.Item>
                    {/* <Sidebar.Item className="flex gap-x-3 text-black" href="#">
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3 text-black" href="#">
                        Sign Up
                    </Sidebar.Item> */}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;