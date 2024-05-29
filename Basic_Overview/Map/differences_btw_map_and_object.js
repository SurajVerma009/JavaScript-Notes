/* 
1. Key Types:

Object: Keys sirf strings aur symbols ho sakte hain.
Map: Keys kisi bhi type ke ho sakte hain, including functions, objects, aur primitive types.

2. Order:

Object: Keys ki insertion order guarantee nahi hoti, kuch cases mein keys alphabetically order ho sakti hain.
Map: Keys insertion order ko maintain karti hain. Jab aap keys iterate karte hain to woh hamesha wahi order follow karengi jismein aapne unhe add kiya tha.

3. Iteration:

Object: Aapko keys ko iterate karne ke liye manually methods like Object.keys(), Object.values(), Object.entries() use karne padte hain.
Map: Maps iterables hain aur unke paas built-in methods hain jaise map.keys(), map.values(), aur map.entries(), jo iteration ko seedha aur asaan banate hain.

4. Performance:

Object: Chote data sets ke liye Objects generally faster hote hain, lekin jab keys frequently add/remove hoti hain ya unki count bohot zyada hoti hai, toh Maps better performance dete hain.
Map: Large data sets ya frequent addition/removal operations ke liye Maps optimized hote hain.

5. Size:

Object: Objects ka size directly calculate nahi kiya ja sakta.
Map: Maps mein size property hoti hai jo directly current size ko batati hai.
*/