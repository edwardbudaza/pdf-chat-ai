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
            <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-100 to-violet-100">
                 <Spinner size="lg"/>
             </div>
        </ClerkLoading>
        <ClerkLoaded>
            <div className='flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-100 to-violet-100'>
                    {children} 
            </div>
        </ClerkLoaded>
    </>
  )
}

export default AuthLayout;