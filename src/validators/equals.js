export function equals(prev = null) {
    return v => {
        if (prev && v !== prev) {
            return 'equal';
        }
        return true;
    };
}
//# sourceMappingURL=equals.js.map