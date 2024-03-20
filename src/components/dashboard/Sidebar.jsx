
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SideBar() {
    return (
        <Sidebar className="bg-gradient-to-t from-purple-600 to-0% via-purple-300 to-90% to-purple-300 to-100% p-5 border-2 m-5 rounded-xl text-white" aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup className="flex flex-col gap-5">
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                        Kanban
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiInbox} label="3">
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item className="flex gap-x-3" href="#" icon={HiTable}>
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;