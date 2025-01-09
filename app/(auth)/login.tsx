const AuthLayout = ({
    children,
} : Readonly <{
  children: React.ReactNode;  
} >) => {
    return (
        <div className="h-screen w-full flex items-center justfy-center">
            {children}
        </div>
    )
}