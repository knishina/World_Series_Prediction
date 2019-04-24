# World_Series_Prediction

### Summary.
This project is a component of the [Final Project](https://knishina.github.io/Final_Project/).  In this section, it contains all components of data munging, analysis, and predictive modeling. To access the the World Series section of the project: https://knishina.github.io/World_Series_Prediction/ .

### Contents.
There are eight folders in this directory.  Below are the file names and a brief description of its contents.
- ```baseball-databank``` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Source data from Kaggle and MLB.
- ```notebooks_for_clean_data```  &nbsp; Notebooks used for data munging.
- ```clean_data```  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CSV files with clean data.
- ```graphs``` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notebooks used to generate graphs for ERA, Total Runs, and Number of Wins.
- ```ML``` &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notebooks used to generate predictive models.
- ```css``` &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CSS for front-end, used by [index.html](https://github.com/knishina/World_Series_Prediction/blob/master/index.html).
- ```static/js``` &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; JavaScript files for Plotly graphs.

### Conclusion.
This project used a minimum of data (ERA, Total Runs, and Total Wins) that was determined to have a statistical difference between the World Series winners/losers. The data were used to build a predictive model.  While the model did not successfully predict the outright winner, the winner was within the top four.  

The next step is to use PCA in combination with all data, not just the minimal data explored by this current project.  Also, a better division of data would be key (divide the data for training, validation, and testing).

### License.
This project is licensed under the MIT License - see the [LICENSE](https://github.com/knishina/World_Series_Prediction/blob/master/LICENSE) for details.
