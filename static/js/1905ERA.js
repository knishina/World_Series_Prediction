// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace3a = {
  x: [2.4, 2.1, 1.7, 1.8, 3.0, 2.8, 3.2, 2.7, 2.5, 2.2, 2.3, 3.4, 3.6, 3.3, 3.9, 3.7, 4.3, 4.0, 3.8, 4.2, 3.5, 2.6, 2.9, 3.1, 4.6, 4.1, 4.8, 4.5], 
  y: [2, 3, 1, 1, 9, 3, 7, 4, 1, 2, 1, 13, 8, 5, 6, 11, 2, 2, 5, 4, 8, 2, 1, 4, 2, 1, 1, 1], 
  marker: {color: 'rgb(28, 74, 175)'}, 
  name: 'World Series Winners', 
  type: 'bar', 
  uid: '41a50bd4-8f79-11e8-a470-f40f24351765', 
  xsrc: 'knishina:7:703bd0', 
  ysrc: 'knishina:7:ec9746'
};
trace3b = {
  x: [2.8, 3.8, 3.5, 2.0, 3.0, 2.9, 2.2, 2.7, 3.6, 3.4, 3.1, 1.8, 2.1, 2.5, 2.6, 3.2, 2.4, 3.3, 2.3, 1.9, 5.1, 3.7, 3.9, 4.2, 4.1, 4.3, 4.0, 4.9, 4.4, 4.6, 4.5, 5.3, 4.7, 5.0, 4.8, 5.4, 5.6, 6.1, 6.7, 5.2, 6.2, 6.0, 5.5, 5.8, 6.4, 5.7], 
  y: [33, 163, 87, 5, 43, 34, 11, 26, 138, 113, 62, 2, 6, 13, 21, 75, 18, 74, 10, 1, 19, 118, 116, 128, 104, 107, 154, 45, 98, 87, 75, 11, 53, 36, 52, 10, 3, 2, 1, 31, 1, 3, 9, 3, 1, 2], 
  marker: {color: 'rgb(192, 57, 43)'}, 
  name: 'Non-World Series Winning Teams', 
  type: 'bar', 
  uid: '41a60a86-8f79-11e8-8c40-f40f24351765', 
  xsrc: 'knishina:7:812174', 
  ysrc: 'knishina:7:04fda3'
};
data3 = [trace3a, trace3b];
layout3 = {
  barmode: 'group', 
  title: 'World Series ERA (1905-2015)', 
  xaxis: {title: 'ERA'}, 
  yaxis: {title: 'Frequency'}
};
Plotly.plot('plotly-div3', {
  data: data3,
  layout: layout3
});