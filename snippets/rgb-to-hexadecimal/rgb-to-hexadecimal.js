/*

RGB to hexadecimal

Convert given RGB parameters to hexadecimal string using 
bitwise left-shift operator (<<) and toString(16), 
then padStart(6,'0') to get a 6-digit hexadecimal value.

*/

module.exports = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');