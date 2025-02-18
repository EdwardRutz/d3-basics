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
  - [Converting Strings to Numbers](https://flaviocopes.com/how-to-convert-string-to-number-javascript/)
  - One way to convert into a number is by using an unary operator (+) before the string.
    - ` +"10.00"  //10 `
     ```
        data.foreach((d) => {
            d.age = +d.age;
        }
    ```
- "Scales are functions that map from an **input domain** to an **output range**."  ~ Mike Bostock
- Ordinal scales:  use for discrete data rather than continous data.  Use when assigning categories a color.
  - D3 includes color themes to use with color scales so picking out all the colors to use is not needed.
- Band scales are used for bar charts.  The space out different categories of the chart.
- D3 min, max, and extend functions.
 



## More Information

- [Udemy: Mastering data visualization in D3.js](https://www.udemy.com/course/masteringd3js/)
