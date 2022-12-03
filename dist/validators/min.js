export function min(min) {
    return v => {
        if (v && v < min) {
            return `min.${min}`;
        }
        return true;
    };
}
