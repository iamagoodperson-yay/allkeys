"use client";

import styles from "./page.module.css";
import { Keyboard, PressedKeys, Combo } from "./components/components";
import { useState, useEffect } from "react";

type PressedKeysProps = {
    perfect: number;
    good: number;
    ok: number;
    miss: number;
};

type KeysPressed = {
    Q: boolean;
    W: boolean;
    E: boolean;
    R: boolean;
    T: boolean;
    Y: boolean;
    U: boolean;
    I: boolean;
    O: boolean;
    P: boolean;
    A: boolean;
    S: boolean;
    D: boolean;
    F: boolean;
    G: boolean;
    H: boolean;
    J: boolean;
    K: boolean;
    L: boolean;
    Z: boolean;
    X: boolean;
    C: boolean;
    V: boolean;
    B: boolean;
    N: boolean;
    M: boolean;
};

export default function GamePage() {
    const keyList = [
        "Q","W","E","R","T","Y","U","I","O","P",
        "A","S","D","F","G","H","J","K","L",
        "Z","X","C","V","B","N","M"
    ] as const;

    const [keysPressed, setKeysPressed] = useState<KeysPressed>(
        Object.fromEntries(keyList.map(k => [k, false])) as KeysPressed
    );
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            // Update the pressed key in state
            const key = event.key.toUpperCase();
            if (key in keysPressed) {
                setKeysPressed(prev => ({ ...prev, [key]: true }));
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            // Update the released key in state
            const key = event.key.toUpperCase();
            if (key in keysPressed) {
                setKeysPressed(prev => ({ ...prev, [key]: false }));
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        };

        window.addEventListener("keydown", handleKeyDown, true);
        window.addEventListener("keyup", handleKeyUp, true);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("keydown", handleKeyDown, true);
            window.removeEventListener("keyup", handleKeyUp, true);
        };
    }, [keysPressed]);


    // Example values for pressed keys, replace with actual game logic
    const pressedKeys: PressedKeysProps = {
        perfect: 0,
        good: 0,
        ok: 0,
        miss: 0,
    };

    return (
        <div className={styles.objects}>
            <Keyboard keysPressed={keysPressed} />

            <div className={styles["top-left"]}>
                <PressedKeys 
                    perfect={pressedKeys.perfect}
                    good={pressedKeys.good}
                    ok={pressedKeys.ok}
                    miss={pressedKeys.miss}
                />
            </div>

            <div className={styles["top-right"]}>
                <Combo combo={0} />
            </div>

        </div>
    );
}