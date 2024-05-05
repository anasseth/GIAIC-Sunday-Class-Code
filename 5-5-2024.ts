function recursiveFunc(count: number) {
    if (count >= 0) {
        console.log("CountDown : ", count);
        recursiveFunc(count - 1);
    }
}
recursiveFunc(5);