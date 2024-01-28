#ML CODE
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Assuming your CSV file is named 'data.csv'
data = pd.read_csv('airplane_seats_data(1).csv')

# Split the data into features (X) and target variable (y)
X = data[['Seat Type', 'Incentive', 'Capacity', 'Demand']]
y = data['Cost']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X,
                                                    y,
                                                    test_size=0.2,
                                                    random_state=42)

# Define preprocessing steps for categorical features (Seat Type)
categorical_features = ['Seat Type']
categorical_transformer = OneHotEncoder(handle_unknown='ignore')

# Define preprocessing steps for numeric features (Incentive, Capacity, Demand)
numeric_features = ['Incentive', 'Capacity', 'Demand']
numeric_transformer = 'passthrough'

# Create a column transformer
preprocessor = ColumnTransformer(transformers=[(
    'cat', categorical_transformer,
    categorical_features), ('num', numeric_transformer, numeric_features)])

# Create a pipeline with a preprocessor and a linear regression model
model = Pipeline(steps=[('preprocessor',
                         preprocessor), ('regressor', LinearRegression())])

# Fit the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
predictions = model.predict(X_test)

# Evaluate the model (you may want to use more sophisticated metrics)
score = model.score(X_test, y_test)
print(f'R-squared score: {score}')

# Now you can use the model to predict cost for new data
new_data = pd.DataFrame({
    'Seat Type': ['One Window Seat'],
    'Incentive': [50],
    'Capacity': [500],
    'Demand': [75]
})

predicted_cost = model.predict(new_data)
print(f'Predicted Cost: {predicted_cost}')