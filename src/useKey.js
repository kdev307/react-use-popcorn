import { useEffect } from "react";

export function useKey(key, action){
    useEffect(
            function () {
                function callback(e) {
                    if (e.code.toLowerCase() === key.toLowerCase()) {
                        action();
                    }
                }
                document.addEventListener("keydown", callback);
    
                return function () {
                    document.addEventListener("keydown", callback);
                };
            },
            [action, key]
        );
}