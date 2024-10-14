import { ReactNode } from "react"

type containerProps = {
    children: ReactNode;
}

const Container = ({ children }: containerProps) => {
    return (
        <div className="max-w-[1440px] mx-auto px-[5.81rem]">
            {children}
        </div>
    )
}

export default Container;