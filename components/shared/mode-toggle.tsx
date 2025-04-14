"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ModeToggle() {
    const [mount, setMount] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMount(true), []);

    return mount && resolvedTheme === "dark" ? (    
        <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme("light")}
            className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] border-2 rounded-full flex items-center justify-center"
        >
            <Sun size={40} />
        </Button>

    ) : (
        <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme("dark")}
            className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] border-2 rounded-full flex items-center justify-center"
        >
            <Moon size={40} />
        </Button>

    );
}

export default ModeToggle;