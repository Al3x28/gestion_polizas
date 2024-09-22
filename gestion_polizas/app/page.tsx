'use client'

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignedIn, SignedOut, SignInButton, SignOutButton,  } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";


export default function Home() {
  const Files = useQuery(api.files.getfiles);
  const createFile = useMutation(api.files.createFile);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SignedIn>
          <SignOutButton>
            <Button>Cerrar sesion</Button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Iniciar sesion</Button>
          </SignInButton>
        </SignedOut>
        {Files?.map(file =>{
          return <div key={file._id}>{file.name}</div>
        })

        }
        
        <Button onClick={()=>(
          createFile({
            name: "hello Wordl"
          })
        )}>click me</Button>
      </main>
    </div>
  );
}
