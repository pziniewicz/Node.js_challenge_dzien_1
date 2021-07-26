process.argv.forEach(function (val, index, array) {
    setTimeout(() => {
        console.log(val)
    }, 1000 * parseInt(val));
})