import { Moon, Sun } from "lucide-react"
import { useEffect, useLayoutEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = () =>{
    const [is_dark,updatedDark] = useState(false)
    useLayoutEffect(() => {
        const stroredtheme = localStorage.getItem('theme')
        if(stroredtheme === "dark"){
            updatedDark(true)
            document.documentElement.classList.add('dark')
            
        }
        else {
            updatedDark(false)
            document.documentElement.classList.remove('dark')
            
        }
    }, [])
    
    const handleclick = () => {
        if (is_dark === true){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light');
            updatedDark(false)
            console.log(is_dark)
            
        }
        else if (is_dark === false){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
            updatedDark(true)
            console.log(is_dark)
            
        }      
    }
    

    return <button className={cn("fixed max-sm:hidden top-5 right-3 z-50 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )} onClick={handleclick}>{is_dark ? <Sun/> : <Moon />}</button>
}