

function test(pageCount, products) {

    const remain = Math.floor(products.length / 10)
    const mode = (products.length % 10);
    let remainMode = 0;

    // console.log(`remain: ${remain}`);
    // console.log(`mode: ${mode}`);
    // console.log(`pageCount: ${pageCount}`);


    if (mode !== 0) {
        remainMode = remain + 1;
    }


    if (mode === 0) {
        remainMode = remain;
    }

    let pages = "";

    switch (pageCount) {

        case "All":
            // console.log(`pages: ${pages}`);
            return pages;

        case "10":
    

        if (remainMode <= 1) {
            return pages;
        } else if (remainMode === 2) {
            return pages = "1 , 2"
        } else if (remainMode === 3) {
            return pages = "1 , 2 , 3";
        } else if (remainMode >= 4) {
            return pages = `"1, 2, 3, ... , ${remain * 10 + 1}"`
        }

        console.log(pages);

        default:
            return pages;
    }

}

export default test;