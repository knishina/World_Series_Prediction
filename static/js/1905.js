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

trace1a = {
  x: [67, 60, 69, 62, 71, 65, 66, 68, 59, 58, 64, 63, 61, 57, 70, 56, 55, 52, 54, 51], 
  y: [2, 8, 2, 13, 1, 6, 7, 4, 10, 9, 6, 7, 12, 3, 2, 12, 2, 1, 2, 1], 
  marker: {color: 'rgb(28, 74, 175)'}, 
  name: 'World Series Winners', 
  type: 'bar', 
  uid: 'cdab67ee-8f84-11e8-a79a-f40f24351765', 
  xsrc: 'knishina:3:4e5425', 
  ysrc: 'knishina:3:7ce5cc'
};
trace1b = {
  x: [50, 30, 32, 58, 59, 49, 51, 46, 60, 53, 61, 34, 37, 41, 31, 43, 74, 56, 47, 62, 52, 33, 36, 38, 42, 55, 57, 44, 48, 40, 63, 35, 29, 67, 45, 39, 26, 28, 64, 54, 66, 27, 23, 25, 69, 65, 24, 71], 
  y: [115, 5, 20, 70, 67, 86, 110, 117, 47, 124, 35, 23, 38, 90, 8, 81, 1, 91, 72, 37, 86, 22, 18, 47, 55, 84, 59, 80, 112, 63, 12, 24, 8, 5, 95, 45, 2, 2, 13, 114, 5, 6, 1, 1, 2, 2, 2, 2], 
  marker: {color: 'rgb(192, 57, 43)'}, 
  name: 'Non-World Series Winning Teams', 
  type: 'bar', 
  uid: 'cdac620c-8f84-11e8-a97a-f40f24351765', 
  xsrc: 'knishina:3:053aca', 
  ysrc: 'knishina:3:953feb'
};
data1 = [trace1a, trace1b];
layout1 = {
  barmode: 'group', 
  title: 'World Series Winners (1905-2015)', 
  xaxis: {title: 'Win Percentage'}, 
  yaxis: {title: 'Frequency'}
};
Plotly.plot('plotly-div1', {
  data: data1,
  layout: layout1
});