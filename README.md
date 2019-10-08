# D3 Basics



## Notes

- Single Vector Graphics (SVG)
- The SVG element, `<svg></svg>` is the canvas for the SVG.  
- Any SVG outside the canvas will not appear.
- SVG will appear "clipped" if it goes over the edge of the canvas.
- A stroke is a border drawn around the outside of the shape.
- SVG rectangles/squares start from the top-left coordinates.
- Circles start from the center coordinate.
```svg
<svg width="400" height="60">
  <circle cx="90" cy="25" r="25" fill="red"></cirle>
</svg>
```
- To confirm your data, log it to the console.log before writing code.
- When getting data from text files, numbers are set as strings so convert them to numbers.
  - One way to convert into a number is by using an unary operator (+) before the string.
    - ` +"10.00"  //10 `
     ```
        data.foreach((d) => {
            d.age = +d.age;
        }
    ```


## More Information

- [Udemy: Mastering data visualization in D3.js](https://www.udemy.com/course/masteringd3js/)
- [Converting Strings to Numbers](https://flaviocopes.com/how-to-convert-string-to-number-javascript/)