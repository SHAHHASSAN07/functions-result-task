function result(percentage) {
    if (percentage === void 0) { percentage = 40; }
    if (percentage === 90) {
        console.log(' u got A+ grade');
    }
    else if (percentage === 80) {
        console.log(' u got B grade');
    }
    else if (percentage === 70) {
        console.log(' u got C grade');
    }
    else if (percentage === 60) {
        console.log(' u got D grade');
    }
    else if (percentage === 50) {
        console.log(' u got E grade');
    }
    else {
        console.log('bhai padh le time ko zaya nhi kr coding seekh le');
    }
}
result();
