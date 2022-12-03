export function required() {
    return v => {
        if (v === undefined || v === null || v === '') {
            return 'required';
        }
        return true;
    };
}
