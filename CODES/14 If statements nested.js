/*In the code above, if either of the first conditions is true, and, in addition, the third
condition is true, then g is assigned h. Otherwise, e is assigned f. */
if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
};

/*There's another way to code this, using nesting. */
if (c === d) {
    if (x === y) {
    g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
    }
    else {
        e = f;
    14 }