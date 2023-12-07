from sklearn.tree import DecisionTreeClassifier  # For classification tasks
# or
from sklearn.tree import DecisionTreeRegressor  # For regression tasks
import matplotlib as plt
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score  # For classification tasks
# or
from sklearn.tree import export_text
from sklearn.metrics import mean_squared_error, r2_score

def prediction_value(n,p,k,ph,rf,humidity,temp):
    # Load your dataset and preprocess it
    data= pd.read_csv('VA_ML\Crop_recommendation.csv')
    X = data[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
    y = data['label']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    # For classification tasks
    model = DecisionTreeClassifier()
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    # For classification tasks
    accuracy = accuracy_score(y_test, y_pred)
    tree_rules = export_text(model, feature_names=list(X.columns))
    print(tree_rules)


    y_true = y_test  # Replace with your true labels
    y_pred = model.predict(X_test)  # Use your test data
    accuracy = accuracy_score(y_true, y_pred)
    print(f'Accuracy: {accuracy}')

    # N = float(input("Enter Nitrogen (N) content: "))
    # P = float(input("Enter Phosphorus (P) content: "))
    # K = float(input("Enter Potassium (K) content: "))
    # temperature = float(input("Enter temperature: "))
    # humidity = float(input("Enter humidity: "))
    # pH = float(input("Enter pH: "))
    # rainfall = float(input("Enter rainfall: "))
    # Create a NumPy array from the user input
    user_input = np.array([[n, p, k, temp, humidity, ph, rf]])
    # Make a prediction using the model
    prediction = model.predict(user_input)
    # Add more crop names and labels as needed
    crop_mapping = {
        0:'rice',
        1:'maize',
        2:'chickpea',
        3:'kidneybeans',
        4:'pigeonpeas',
        5:'mothbeans',
        6:'mungbean',
        7:'blackgram',
        8:'lentil',
        9:'pomegranate',
        10:'banana',
        11:'mango',
        12:'grapes',
        13:'watermelon',
        14:'muskmelon',
        15:'apple',
        16:'orange',
        17:'papaya',
        18:'coconut',
        19:'cotton',
        20:'jute',
        21:'coffee'
    }# To get the predicted crop name
    predicted_crop = crop_mapping.get(prediction[0], 'unknown')
    #print(f'Predicted crop: {predicted_crop}')

    predicted_label = prediction[0]
    # print(f'Predicted label: {predicted_label}')
    return predicted_label