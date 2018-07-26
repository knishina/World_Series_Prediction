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

trace2a = {
  x: [61, 66, 59, 60, 58, 55, 62, 56, 57, 64, 52, 70, 54, 51, 63], 
  y: [6, 3, 4, 5, 6, 2, 2, 10, 1, 1, 1, 1, 2, 1, 1], 
  marker: {color: 'rgb(28, 74, 175)'}, 
  name: 'World Series Winners', 
  type: 'bar', 
  uid: 'ce8c6bcc-8f84-11e8-8076-f40f24351765', 
  xsrc: 'knishina:5:19c5f9', 
  ysrc: 'knishina:5:1c7ad5'
};
trace2b = {
  x: [57, 67, 53, 43, 41, 56, 54, 38, 55, 50, 42, 52, 59, 32, 49, 39, 46, 34, 51, 62, 48, 40, 60, 45, 63, 37, 61, 44, 35, 47, 58, 33, 36, 64, 69, 65, 71, 26, 31], 
  y: [25, 1, 73, 50, 55, 47, 85, 23, 48, 63, 28, 47, 44, 4, 42, 23, 80, 7, 75, 16, 70, 35, 19, 68, 7, 19, 14, 35, 9, 40, 39, 7, 6, 4, 1, 1, 1, 1, 2], 
  marker: {color: 'rgb(192, 57, 43)'}, 
  name: 'Non-World Series Winning Teams', 
  type: 'bar', 
  uid: 'ce8c6db6-8f84-11e8-9008-f40f24351765', 
  xsrc: 'knishina:5:caa481', 
  ysrc: 'knishina:5:1df5c5'
};
data2 = [trace2a, trace2b];
layout2 = {
  barmode: 'group', 
  title: 'World Series Winners (1969-2015)', 
  xaxis: {title: 'Win Percentage'}, 
  yaxis: {title: 'Frequency'}
};
Plotly.plot('plotly-div2', {
  data: data2,
  layout: layout2
});