import { ReactNode } from "react"

type containerProps = {
    children: ReactNode;
}

const Container = ({ children }: containerProps) => {
    return (
        <div className="max-w-[1440px] mx-auto md:px-[5.81rem] px-[1rem]">
            {children}
        </div>
    )
}

export default Container;