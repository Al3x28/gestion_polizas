import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Header(){
    return (
    <div className="border-b p-4 bg-gray-50">
        <div className="container mx-auto justify-between flex">
            <div className="text-zinc-950">filedrive</div>
            <div className="flex gap-2">
                <OrganizationSwitcher />
                <UserButton />
            </div>
        </div>
    </div>
)}