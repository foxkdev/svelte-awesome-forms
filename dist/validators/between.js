export function between(min, max) {
    return (v) => {
        if (v && (v < min || v > max)) {
            return `between.${min}.${max}`;
        }
        return true;
    };
}
