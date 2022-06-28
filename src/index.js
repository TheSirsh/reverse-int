module.exports = function reverse (n) {
    let rvrs = "";
    x =String(n);

    for (let i = (x.length - 1); i >= 0; i--)  
        {
        rvrs = rvrs + x[i];
        }
    n = parseInt(rvrs);
	return n
}
