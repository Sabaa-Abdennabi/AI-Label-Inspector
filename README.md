# AI-Powered Textile Label Defect Detection

## Project Overview
This project aims to develop an AI-powered solution for intelligent defect detection in textile labels. By combining deep learning with an intuitive user interface, the solution enhances quality control processes through automation, real-time insights, and user-friendly visualization tools.

## Objectives
The primary goals of this project are:

1. **Automate Defect Detection**  
   - Accurately identify and classify defects in textile labels, such as:
     - Printing errors
     - Stains
     - Structural flaws
   - Utilize advanced deep learning models for high precision detection.

2. **Enhance Quality Control Efficiency**  
   - Reduce manual labor and human errors.
   - Provide a reliable, automated system for defect detection.

3. **Provide Actionable Insights**  
   - Offer real-time statistics and visualizations.
   - Enable quality controllers to analyze defect trends and make data-driven decisions.

4. **Deliver a User-Friendly Interface**  
   - Develop a cross-platform user interface (web, mobile, etc.).
   - Ensure accessibility, intuitive navigation, and seamless workplace integration.

## Technologies Used
- **Deep Learning Model:** YOLO (You Only Look Once) for defect detection.
- **Frontend:** React for building an interactive and responsive UI.
- **Backend:** Python-based FastAPI for model inference and data processing.


## Installation & Setup
### 1. Clone the Repository
```sh
 git clone https://github.com/your-repo-url.git
 cd ai-defect-detection
```
### 2. Backend Setup
- Navigate to the `model` directory:
```sh
 cd model
```
- Install Python dependencies:
```sh
 pip install -r requirements.txt
```
- Run the backend server:
```sh
 python app.py
```

### 3. Frontend Setup
- Navigate to the frontend directory:
```sh
 cd ../StripeMetrics-Frontend
```
- Install dependencies:
```sh
 npm install
```
- Start the development server:
```sh
 npm start
```

## Usage
1. Upload an image of a textile label through the web/mobile interface.
2. The YOLO model will analyze the image and classify defects.
3. The results, including detected defects and statistics, will be displayed in real time.
4. Quality controllers can review trends and optimize the inspection process.

## Future Enhancements
- Improve model accuracy through fine-tuning and additional training data.
- Add support for multi-language interfaces.
- Implement cloud-based model deployment for scalability.

## License
This project is open-source and licensed under [MIT License](LICENSE).

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## Contact
For inquiries, reach out to **[Your Name]** at **your.email@example.com**.

