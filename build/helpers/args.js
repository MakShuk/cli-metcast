export const getArgs = (args) => {
    const res = {};
    const [executet, file, ...rest] = args;
    rest.forEach((value, index, array) => {
        if (value.charAt(0) === '-') {
            if (index === array.length - 1 || array[index + 1].charAt(0) === '-') {
                res[value.substring(1)] = true;
            }
            else {
                res[value.substring(1)] = array[index + 1];
            }
        }
    });
    return res;
};
