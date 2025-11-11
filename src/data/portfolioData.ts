export const portfolioData = {
  personal: {
    name: "Manidatta Anumandla",
    title: "Data Science Enthusiast",
    email: "anumandlamanidatta17@gmail.com",
    phone: "+1 (303) 901-4317",
    location: "Boulder, CO",
    summary: "A data science enthusiast pursuing my Master's at the University of Colorado Boulder. I thrive on collaboration, continuous learning, and building data driven models that drive real impact.",
    github: "https://github.com/Manidatta1/",
    linkedin: "https://www.linkedin.com/in/manidatta/",
  },

  education: [
    {
      degree: "Master of Science in Data Science",
      school: "University of Colorado Boulder",
      year: "Aug 2024- May 2026",
      gpa: "3.943/4.0",
      coursework: [
        "Machine Learning",
        "Deep Learning & Neural Networks",
        "Statistical Methods and Applications",
        "Data Mining",
        "Data Center Scale Computing"
      ]
    },
    {
      degree: "Bachelor of Science in Electronics and Communication Engineering",
      school: "Vasavi College of Engineering",
      year: "Aug 2019 - May 2023",
      gpa: "3.58/4.0",
      coursework: [
        "Python",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Image and Video Processing Using Machine Learning",
        "Probability Theory and Stochastic Process",
        "Computer Networks",
        "Verilog",
        "Digital System Design",
        "Integrated Circuits",
        "VLSI",
        "Signal Processing"
      ]
    }
  ],

  skills: {
    languages: ["Python", "R", "SQL", "Java", "C", "C++"],
    libraries: [
      "Pandas", "NumPy", "Scikit-learn", "PyTorch",
      "TensorFlow", "Hugging Face", "Optuna", "Librosa"
    ],
    tools: [
      "Git", "Dagshub", "Docker", "MLflow",
      "Airflow", "AWS", "Tableau", "Linux", "GCP"
    ],
    concepts: {
      "🧹 Data Preprocessing": [
        "Normalization",
        "Standardization",
        "Handling Missing Values",
        "Encoding Categorical Variables",
        "Feature Scaling",
        "Principal Component Analysis (PCA)",
        "Tokenization",
        "Lemmatization",
        "Stopword Removal",
        "Word Embeddings (Word2Vec, GloVe)",
        "Text Cleaning (punctuation, casing, etc.)"

      ],
      "🤖 Machine Learning": [
        "Linear Regression",
        "K Nearest Neighbor",
        "Support Vector Machines",
        "Decision Trees",
        "K Means",
        "Boosting and Bagging",
        "Bayesion Networks",
        "Apriori",
        "Random Forest"
      ],
      "🧠 Deep Learning": [
        "Artificial Neural Networks",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Self Organizing Maps",
        "Boltzmann Machines",
        "Transformers",
        "Autoencoders",
        "Activation Functions",
        "Long Short-Term Memory",
        "Backpropagation"
      ],
      "🗣️ Large Language Models": [
        "Encoder-Decoder Transformer Models (T5, BART)",
        "Encoder only transformer models (BERT)",
        "Decoder only transformer models (GPT, LLaMA)",
        "Prompt Engineering"
      ],
      "🔍 Retrieval-Augmented Generation": [
        "Vector Stores",
        "Embedding Models",
        "Retrieval Pipelines",
        "Document Chunking",
        "Hybrid Search"

      ],
      "🧠 Artificial Intelligence": [
        "Markov Decision Models",
        "Deep Q-Networks",
        "Actor-Critic Models",
        "AI Agents (AutoGen,  CrewAI, LangGraph)"
      ],
      "📈 Statistical Modeling": [
        "T-tests",
        "ANOVA",
        "Levene test",
        "Regression",
        "Generalized Linear Models",
        "Generalized Additive Models",
        "Bootstrapping",
        "Confidence Intervals"
      ],
      "📊 Visualization": [
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Tableau",
        "Dashboards",
        "Histograms",
        "Heatmaps"
      ],
      "🎯 Hyperparameter Tuning": [
        "Grid Search",
        "Random Search",
        "Optuna",
        "Learning Rate",
        "Batch Size",
        "Dropout"
      ]
    }
  },

  experience: [
    {
      title: "AI Engineer Intern",
      company: "beaconAI",
      period: "Sep 2025 - Present",
      location: "Colorado, United States",
    },
    {
      title: "Data Engineer Intern",
      company: "Truve",
      period: "May 2025 - Aug 2025",
      location: "Colorado, United States",
    },
    {
      title: "Data and API Engineer",
      company: "NCR Voyix",
      period: "Feb 2023 - Aug 2024",
      location: "Hyderabad, India",
    },
    {
      title: "Data Science Intern",
      company: "Verzeo",
      period: "Sep 2021 - Nov 2021",
      location: "Remote",
    }
  ],

  projects: [
    {
      title: "Multimodal Audio Risk Classification with Explanations",
      description: "Built a two-stage deep learning pipeline to classify real-world audio events as Normal, Potential Threat, or Danger using audio and location metadata. Enhanced interpretability by integrating a T5-based transformer model that generates natural language rationales for the risk level.",
      keyPoints: [
        "Achieved 94.2% accuracy on risk classification using a CNN + Transformer encoder with location embedding.",
        "Generated human-understandable explanations with a T5 model, reaching 0.98 F1-score (BERTScore).",
        "Introduced real-world metadata (location) to disambiguate ambiguous sounds across contexts.",
        "Preprocessed FSD50K audio dataset using log-mel spectrograms and structured text prompts."
      ],
      technologies: ["Python", "PyTorch", "Transformers", "Text Embeddings", "Hyperparameter Tuning"],
      github: "https://github.com/Manidatta1/Multi-Modal-Audio-Risk-Explanation",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Credit Card Fraud Detection using Self-Organizing Maps",
      description: "Developed a Self-Organizing Maps (SOM) model to detect fraudulent credit card applications. The model clusters customers based on application features to identify instances of fraud. Visualization of SOM distance maps and fraud mappings provided actionable insights.",
      keyPoints: [
        "Implemented a 10x10 SOM to learn complex patterns in credit card application data.",
        "Visualized the SOM's distance map using pcolor and marker plotting.",
        "Extracted and inverse-transformed fraudulent mappings for further analysis.",
        "Provided a robust unsupervised method to identify anomalies in customer data."
      ],
      technologies: ["Python", "Deep Learning"],
      github: "https://github.com/Manidatta1/Credit-Card-Fraud-Detection",
      image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Trend Analysis Across Diverse Fields",
      description: "Performed predictive analytics and trend forecasting across multiple sectors including environment, healthcare, agriculture, and weather using machine learning models. Leveraged real-time data from APIs and built models to project future outcomes for 2025.",
      keyPoints: [
        "Predicted GHG emissions across countries using Bagging Regressor (R² = 0.87).",
        "Forecasted total health expenditures using Random Forest (R² = 0.89).",
        "Estimated malaria incidence for WHO regions with KNN Regressor (R² = 0.98).",
        "Used XGBoost to forecast maize production and food supply per capita for 9+ countries.",
        "Built a weather model using Gradient Boosting (R² > 0.83) for daily temperature predictions."
      ],
      technologies: ["Python", "Machine Learning"],
      github: "https://github.com/Manidatta1/Trend-Analysis-Across-the-Diverse-Fields",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "NASA APOD ETL Pipeline with Airflow and Postgres",
      description: "Developed an automated ETL pipeline to ingest and archive NASA's Astronomy Picture of the Day (APOD) data using Apache Airflow and PostgreSQL. The system extracts image metadata via API, transforms it into structured JSON, and stores it in a local database for long-term access and analysis. This project emphasizes workflow orchestration, data engineering, and automation of daily ingestion tasks.",
      keyPoints: [
        "Designed automated ETL pipeline using the Apache Airflow to extract NASA Astronomy Picture of the Day API data using Simple Http Operator.",
        "Transformed the API responses into json format and loaded them into the PostgreSQL database using PostgresHook.",
        "Orchestrated the task flows with Airflow DAGs and deployed PostgreSQL locally through the Docker containers.",
        "Daily ingestion and storage of image metadata is enabled, supports data archiving without manual intervention."
      ],
      technologies: ["Python", "Docker", "Airflow", "PostgreSQL"],
      github: "https://github.com/Manidatta1/NASA-APOD-ETL-Pipeline-with-Airflow-and-Postgres",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Statistical Analysis of Student Performance",
      description: "Explored how academic, behavioral, and socio-economic factors affect student exam scores using statistical analysis on a dataset of 6600+ records and 20 variables.",
      keyPoints: [
        "Analyzed 6,607 student records to measure the impact of study habits, attendance, tutoring, and resources on exam scores using the t-tests, levene test, correlation and bootstrapping.",
        "Cleaned the dataset, removing 104 outliers, imputing the missing values with mode, and engineering the new study and attendance groups.",
        "Conducted hypothesis testing concluded that significant effects of internet access(p-value = 5.28e-08), study group(p-value ≤2.2e-16), parental education(p-value ≤2e-16) on exam performance.",
        "Estimated conditional probabilities of scoring above thresholds under tutoring conditions.",
        "Bootstrapped confidence interval of 95% ranging from 67 to 67.15 is derived for mean exam scores and found that 15.5% of students scored above 70."
      ],
      technologies: ["R", "Hypothesis Testing", "Probability", "Distribution Analysis"],
      github: "https://github.com/Manidatta1/Student-Performance-Statistical-Analysis",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Crop Disease Detection using Convolutional Neural Networks",
      description: "Built a CNN-based image classification system to identify diseases in crop leaves and recommend preventive/curative actions. Used transfer learning with VGG19 for high accuracy.",
      keyPoints: [
        "Used transfer learning (VGG19) for multi-class classification on leaf images.",
        "Trained with data augmentation (zoom, shear, flip) to improve generalization.",
        "Achieved high accuracy across 38 disease categories including tomato, corn, grape, citrus.",
        "Mapped predictions to treatment and precaution guidelines per disease."
      ],
      technologies: ["Python", "Deep Learning", "Image Processing"],
      github: "https://github.com/Manidatta1/Crop-Disease-Detection",
      image: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Regularization Strategies on KMNIST Dataset",
      description: "Conducted a performance analysis of regularization techniques like Dropout, L2 Regularization, and SGD with Momentum on the KMNIST dataset using a CNN architecture.",
      keyPoints: [
        "Built CNN with 5 convolutional layers and 2 FC layers for Japanese character classification.",
        "Applied Dropout (0.2), L2 Regularization (weight decay), and Momentum (SGD with 0.9).",
        "Evaluated models on varying data splits (25%, 50%, 75%, 100%).",
        "Achieved best accuracy of 95.87% using SGD + Momentum on 75% data.",
        "Visualized method-wise performance using bar charts and test metrics."
      ],
      technologies: ["Python", "PyTorch", "Hyperparameter Tuning", "Image Processing"],
      github: "https://github.com/Manidatta1/Regularization-Strategies-on-KMNIST-Dataset",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Visual Question Answering (Multimodal Learning)",
      description: "Designed a two-model system for visual question answering using multimodal learning. The first model determines question answerability based on image context, and the second model generates answers using cross-attention between vision and language.",
      keyPoints: [
        "Encoded image inputs with ResNet18 and questions using GloVe + custom tokenization.",
        "Used bi-directional cross-attention to fuse visual and textual features.",
        "Model 1: Binary classifier for answerability (Val Accuracy: 92.6%).",
        "Model 2: Multiclass answer generator (Val Accuracy: 85.3%).",
        "Optimized hyperparameters using Optuna for learning rate, batch size, and attention dims."
      ],
      technologies: ["Python", "PyTorch", "Image Processing", "Transformers", "Hyperparameter Tuning", "Text Embeddings"],
      github: "https://github.com/Manidatta1/Visual-Question-Answering",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Parking Slot Detection",
      description: "Developed an automated parking slot monitoring system using color-based segmentation and a ResNet18 model to classify slots as occupied or available. Integrated OpenCV and PyTorch for real-time inference and Excel report generation.",
      keyPoints: [
        "Built a CV pipeline using color segmentation and bounding box annotation for parking slot extraction.",
        "Trained a ResNet18 classifier on cropped slot images (94% accuracy) using PyTorch.",
        "Enabled real-time prediction with slot overlay visualization (blue: available, orange: occupied).",
        "Exported usage stats to Excel with timestamps for occupancy tracking.",
        "Supports easy annotation via drag-and-drop UI and slot coordinate saving."
      ],
      technologies: ["Python", "Computer Vision", "Deep Learning", "Image Processing"],
      github: "https://github.com/Manidatta1/Parking-Slot-Detection",
      image: "https://images.pexels.com/photos/28948284/pexels-photo-28948284.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
};
