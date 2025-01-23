
import { cn } from "@/lib/utils"
import { HTagElProps } from "@/types/element"

export const editorResolver = [
    {
        name: "H-One",
        component: ({ styles, cssProperties, ...props }: HTagElProps) => {
            return (
                <>
                    <h1 className={cn(styles)} style={{ ...cssProperties }} {...props}  />
                </>
            )
        }
    },
    {
        name: "H-Two",
        component: ({ styles, cssProperties, ...props }: HTagElProps) => {
            return (
                <>
                    <h2 className={cn(styles)} style={{ ...cssProperties }} {...props}  />
                </>
            )
        }
    },
    {
        name: "H-Three",
        component: ({ styles, cssProperties, ...props }: HTagElProps) => {
            return (
                <>
                    <h3 className={cn(styles)} style={{ ...cssProperties }} {...props}  />
                </>
            )
        }
    },
    {
        name: "H-Four",
        component: ({ styles, cssProperties, ...props }: HTagElProps) => {
            return (
                <>
                    <h4 className={cn(styles)} style={{ ...cssProperties }} {...props}  />
                </>
            )
        }
    },
]