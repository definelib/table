

module.exports = {
    stringify(data) {
        if (!data) {
            return '';
        }

        return `title="${data}"`;
    },
};
