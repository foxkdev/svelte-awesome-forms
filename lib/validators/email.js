export function email() {
    return v => {
        if (v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
            return 'email';
        }
        return true;
    };
}
