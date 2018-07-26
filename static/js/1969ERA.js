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

trace4a = {
  x: [3.0, 3.2, 3.3, 2.6, 3.4, 3.5, 3.6, 3.1, 4.6, 3.7, 3.9, 4.2, 3.8, 4.1, 4.8, 4.0, 4.5, 4.3], 
  y: [4, 2, 2, 1, 7, 4, 3, 2, 2, 5, 4, 2, 3, 1, 1, 1, 1, 1], 
  marker: {color: 'rgb(28, 74, 175)'}, 
  name: 'World Series Winners', 
  type: 'bar', 
  uid: '42f3369e-8f79-11e8-9360-f40f24351765', 
  xsrc: 'knishina:9:ddb30a', 
  ysrc: 'knishina:9:1b1dfc'
};
trace4b = {
  x: [3.5, 2.8, 3.9, 4.2, 3.3, 4.1, 3.6, 3.7, 3.1, 3.2, 4.3, 4.4, 2.9, 4.5, 3.8, 3.4, 3.0, 2.5, 4.6, 4.0, 4.8, 4.7, 2.7, 4.9, 5.0, 5.3, 5.4, 5.5, 5.8, 5.2, 5.6, 6.4, 6.0, 5.1, 5.7], 
  y: [50, 4, 70, 82, 38, 71, 84, 78, 20, 31, 68, 58, 7, 51, 95, 53, 14, 1, 57, 97, 35, 37, 1, 29, 22, 8, 7, 7, 1, 21, 2, 1, 1, 11, 2], 
  marker: {color: 'rgb(192, 57, 43)'}, 
  name: 'Non-World Series Winning Teams', 
  type: 'bar', 
  uid: '42f338c6-8f79-11e8-a737-f40f24351765', 
  xsrc: 'knishina:9:3bba27', 
  ysrc: 'knishina:9:f22444'
};
data4 = [trace4a, trace4b];
layout4 = {
  barmode: 'group', 
  title: 'World Series ERA (1969-2015)', 
  xaxis: {title: 'ERA'}, 
  yaxis: {title: 'Frequency'}
};
Plotly.plot('plotly-div4', {
  data: data4,
  layout: layout4
});