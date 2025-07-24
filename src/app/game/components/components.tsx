import styles from "./page.module.css";

export function Keyboard(keyState: { keysPressed: Record<string, boolean> }) {
    return(
        <div className={styles.keyboard}>
            {[
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
            ["Z", "X", "C", "V", "B", "N", "M"]
            ].map((row, rowIdx) => (
            <div className={styles.row} key={rowIdx}>
                {row.map((key) => (
                    <div key={key} className={styles.keyContainer}>
                        <div className={`${styles.key} ${keyState.keysPressed[key] ? styles.pressed : ""}`}>
                            {key}
                        </div>
                    </div>
                ))}
            </div>
            ))}
        </div>
    );
}

export function PressedKeys(pressedKeys: { perfect: number; good: number; ok: number; miss: number }) {
    return(
        <div className={styles.obj}>
            <p>Pressed</p>
            <div className={styles["pressed-keys"]}>
                <h2 className={styles.perfect}>{pressedKeys.perfect.toString().padStart(3, "0")}</h2>
                <h2 className={styles.good}>{pressedKeys.good}</h2>
                <h2 className={styles.ok}>{pressedKeys.ok}</h2>
                <h2 className={styles.miss}>{pressedKeys.miss}</h2>
            </div>
        </div>
    );
}

export function Combo({ combo }: { combo: number }) {
    return(
        <div className={styles.obj}>
            <p>Combo</p>
            <h2 className={styles.combo}>{combo.toString().padStart(3, "0")}</h2>
        </div>
    );
}