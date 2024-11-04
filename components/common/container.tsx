import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container 