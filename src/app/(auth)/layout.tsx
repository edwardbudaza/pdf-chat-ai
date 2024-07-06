import { Spinner } from "@/components/spinner";
import { auth } from "@clerk/nextjs/server";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const { userId } = auth();

    if (userId) {
        return redirect("/dashboard")
    }

  return (
    <>
        <ClerkLoading>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
                 <Spinner size="lg"/>
             </div>
        </ClerkLoading>
        <ClerkLoaded>
            <div className='flex items-center justify-center h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
                    {children} 
            </div>
        </ClerkLoaded>
    </>
  )
}

export default AuthLayout;