import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollEffect(){
    const {pathname} = useLocation()

    useEffect(() => {
        window.scroll(0,0)

    }, [pathname])

    return null
}