// F = (9/5)*C + 32  ==> F = (9C + 160)/5

const celciusTemp = 45;

function conversion(celciusTemp) {
    let fahrenheit = (9 * celciusTemp + 160) / 5

    console.log(`${fahrenheit} degree fahrenheit`);
}

conversion(celciusTemp);

// output ==> 113 degree fahrenheit