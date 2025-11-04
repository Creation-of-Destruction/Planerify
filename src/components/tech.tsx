import type {ReactNode} from "react";

export const Tech = ({icon, name} : {icon: ReactNode, name: ReactNode}) => (
    <div className="mr-4 flex items-center space-x-3">
        <span>{icon}</span>
        <span className="flex-shrink-0 text-base/relaxed font-semibold text-foreground">{name}</span>
    </div>
)