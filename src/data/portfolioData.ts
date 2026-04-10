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
      gpa: "3.954/4.0",
      coursework: [
        "Machine Learning",
        "Deep Learning & Neural Networks",
        "Statistical Methods and Applications",
        "Data Mining",
        "Data Center Scale Computing",
        "Information Visualization"
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
      title: "Data Science Intern",
      company: "Ramsi",
      period: "Jan 2026 - Present",
      location: "Colorado, United States",
    },
    {
      title: "AI/ML Research Assistant",
      company: "University of Colorado Boulder",
      period: "Dec 2025 - Present",
      location: "Colorado, United States",
    },
    {
      title: "AI Engineer Intern",
      company: "beaconAI",
      period: "Sep 2025 - Nov 2025",
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
      location: "Georgia, United States",
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
      description: "This project demonstrates how multimodal deep learning can be used to classify real-world audio events into risk levels and generate human-readable explanations. It combines log-mel spectrograms, location metadata, a CNN–Transformer encoder, and a T5-based explanation model for interpretable audio risk assessment.",
      keyPoints: [
        "Built a multimodal audio pipeline using log-mel spectrograms + location metadata for risk classification.",
        "Implemented a CNN + Transformer encoder to classify audio into Normal, Potential Threat, or Danger.",
        "Achieved ~94.2% test accuracy for risk classification after Optuna-based hyperparameter tuning.",
        "Integrated a T5-based explanation model to generate rationales, reaching 0.98 BERTScore F1.",
        "Improved interpretability for safety-critical predictions via paired label + explanation outputs."
      ],
      technologies: [
        "Python",
        "Deep Learning",
        "Multimodal Learning",
        "Convolutional Neural Networks (CNNs)",
        "Transformers",
        "T5",
        "BERT",
        "Spectrogram-Based Audio Processing",
        "Optuna"
      ],
      github: "https://github.com/Manidatta1/Multi-Modal-Audio-Risk-Explanation",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Cloud-Native Appointment System",
      description: "This project demonstrates how cloud-native microservices can be designed and deployed to build a scalable healthcare appointment system. It uses FastAPI-based services, asynchronous messaging, Redis caching, and PostgreSQL, all containerized with Docker and orchestrated on Google Kubernetes Engine with CI/CD automation.",
      keyPoints: [
        "Designed and implemented a cloud-native microservices architecture for healthcare appointment scheduling.",
        "Built FastAPI services for appointments, authentication (JWT), doctors/patients, and slot management.",
        "Integrated RabbitMQ for async workflows and Redis for caching + distributed locking to prevent double-booking.",
        "Deployed on Google Kubernetes Engine using Docker + Helm; automated CI/CD with GitHub Actions and Artifact Registry.",
        "Operationalized the system with service-based deployments and LoadBalancer access on GKE."
      ],
      technologies: [
        "Python",
        "DevOps",
        "Microservices",
        "FastAPI",
        "JWT Authentication",
        "React.js",
        "RabbitMQ",
        "Redis",
        "Google Kubernetes Engine (GKE)",
        "Helm Charts",
        "Apache Airflow",
        "GitHub Actions",
        "CI/CD",
        "Container Orchestration",
        "JavaScript"
      ],
      github: "https://github.com/Manidatta1/A-Cloud-Native-Appointment-System",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Credit Card Fraud Detection using Self-Organizing Maps",
      description: "This project demonstrates how Self-Organizing Maps can be used for unsupervised clustering and anomaly detection in high-dimensional data. It applies MiniSom to credit card application data, visualizing cluster structures with U-Matrix plots and identifying potential anomalous patterns.",
      keyPoints: [
        "Implemented a 10x10 Self-Organizing Map (MiniSom) to learn structure in credit card application data.",
        "Normalized and prepared high-dimensional features to preserve topology during SOM training.",
        "Visualized cluster boundaries using U-Matrix distance maps and marker overlays.",
        "Extracted and inverse-transformed suspicious mappings for deeper anomaly investigation.",
        "Demonstrated an unsupervised approach for anomaly/fraud candidate discovery."
      ],
      technologies: [
        "Python",
        "Deep Learning",
        "Self-Organizing Maps (SOMs)",
        "Python",
        "MiniSom",
        "Data Analysis",
        "Dimensionality Reduction",
        "Cluster Analysis",
        "Heatmaps"
      ],
      github: "https://github.com/Manidatta1/Credit-Card-Fraud-Detection",
      image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Trend Analysis Across Diverse Fields",
      description: "This project demonstrates how machine learning–based forecasting can be applied across agriculture, weather, environment, health, and economic domains. It uses ensemble models such as XGBoost, Random Forest, and Gradient Boosting to analyze trends and predict future indicators with high accuracy.",
      keyPoints: [
        "Built cross-domain forecasting models across agriculture, weather, environment, health, and economic indicators.",
        "Implemented XGBoost, Random Forest, Gradient Boosting, Bagging Regressor, and KNN on historical multi-country datasets.",
        "Achieved strong predictive performance with R² up to 0.98 across multiple domain tasks.",
        "Forecasted metrics including maize production, food supply, temperature trends, malaria incidence, GDP growth, and inflation.",
        "Published interactive visualizations and a web dashboard via GitHub Pages to communicate insights."
      ],
      technologies: [
        "Machine Learning",
        "Decision Trees",
        "Random Forest",
        "K-Nearest Neighbors (KNN)",
        "XGBoost",
        "Gradient Boosting",
        "Python",
        "Forecasting",
        "Data Analysis"
      ],
      github: "https://github.com/Manidatta1/Trend-Analysis-Across-the-Diverse-Fields",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "NASA APOD ETL Pipeline with Airflow and Postgres",
      description: "This project demonstrates how automated ETL pipelines can be built using Apache Airflow and PostgreSQL. It ingests daily data from NASA’s APOD API, transforms it into structured format, and loads it into a database using containerized, scheduled workflows.",
      keyPoints: [
        "Built an automated ETL pipeline to ingest NASA Astronomy Picture of the Day (APOD) data daily.",
        "Implemented extraction using Airflow SimpleHttpOperator and transformation into structured JSON.",
        "Loaded processed metadata into PostgreSQL using Airflow PostgresHook for persistent storage.",
        "Containerized Airflow + Postgres with Docker Compose for reproducible local execution.",
        "Orchestrated the workflow as a scheduled Airflow DAG with end-to-end automation."
      ],
      technologies: [
        "Apache Airflow",
        "PostgreSQL",
        "Docker",
        "Python",
        "ETL Pipelines",
        "Directed Acyclic Graphs (DAGs)",
        "Airflow Operators"
      ],
      github: "https://github.com/Manidatta1/NASA-APOD-ETL-Pipeline-with-Airflow-and-Postgres",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Statistical Analysis of Student Performance",
      description: "This project demonstrates how statistical analysis can be used to identify factors influencing student academic performance. It applies hypothesis testing, regression, ANOVA, and bootstrapping in R to uncover relationships between demographics, study habits, and exam outcomes.",
      keyPoints: [
        "Performed statistical analysis to identify key drivers of student exam performance using an educational data of 660,007 students.",
        "Applied t-tests, Levene’s test, Chi-square tests, confidence intervals, ANOVA, regression, and bootstrapping.",
        "Found internet access significantly improved performance (p = 5.28e-08) and >10 study hours correlated with higher scores.",
        "Estimated the mean exam score with a 95% confidence interval of 67.00 to 67.15.",
        "Visualized distributions and group differences using ggplot2, boxplots, bar charts, and density plots."
      ],
      technologies: [
        "R",
        "Hypothesis Testing",
        "Confidence Intervals",
        "Bootstrapping",
        "Statistical Sampling",
        "Exploratory Data Analysis (EDA)",
        "Analysis of Variance (ANOVA)",
        "T-Tests",
        "Levene’s Test",
        "Chi-Square Tests",
        "Data Analysis"
      ],
      github: "https://github.com/Manidatta1/Student-Performance-Statistical-Analysis",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Crop Disease Detection using Convolutional Neural Networks",
      description: "This project demonstrates how deep learning and computer vision can be used to detect crop diseases from plant images. It leverages a VGG19-based CNN deployed on a Raspberry Pi with a camera module to perform real-time disease classification and suggest appropriate treatments.",
      keyPoints: [
        "Built an image-based crop disease detection system using deep learning and computer vision.",
        "Trained a VGG19-based CNN to classify healthy vs diseased plant leaves across multiple categories.",
        "Deployed the model on a Raspberry Pi with a camera module for real-time on-device inference.",
        "Added disease-to-treatment mapping to suggest medicine/recommendations based on predicted class.",
        "Targeted early detection to reduce agricultural losses and support low-infrastructure environments."
      ],
      technologies: [
        "Python",
        "Deep Learning",
        "Convolutional Neural Networks (CNNs)",
        "VGG19",
        "Python",
        "OpenCV",
        "Raspberry Pi",
        "Data Analysis"
      ],
      github: "https://github.com/Manidatta1/Crop-Disease-Detection",
      image: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Regularization Strategies on KMNIST Dataset",
      description: "This project demonstrates how regularization techniques affect CNN generalization on handwritten image data. It evaluates Dropout, L2 regularization, and SGD with momentum on the KMNIST dataset, analyzing performance across multiple data splits.",
      keyPoints: [
        "Evaluated how regularization strategies impact CNN generalization on the KMNIST handwritten character dataset.",
        "Compared baseline vs Dropout (p=0.2), L2 weight decay (0.0001), and SGD with momentum (0.9) across data splits.",
        "Achieved 95.87% best accuracy using SGD with momentum on the 75% split and 94.65% using Dropout on only 25% data.",
        "Analyzed precision/recall tradeoffs and overfitting behavior across training sizes.",
        "Summarized findings with metric comparisons and visualization-driven evaluation."
      ],
      technologies: [
        "Deep Learning",
        "Convolutional Neural Networks (CNNs)",
        "Stochastic Gradient Descent (SGD)",
        "L2 Regularization",
        "Dropout",
        "Python",
        "Data Analysis"
      ],
      github: "https://github.com/Manidatta1/Regularization-Strategies-on-KMNIST-Dataset",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Visual Question Answering (Multimodal Learning)",
      description: "This project demonstrates how multimodal architectures can be applied to visual question answering using image and text inputs. It implements answerability classification and answer generation models with CNNs, GloVe embeddings, and cross-attention, achieving strong performance on the real-world VizWiz dataset.",
      keyPoints: [
        "Developed a two-stage VQA system on the VizWiz dataset: answerability detection + answer generation.",
        "Answerability model used CNN image encoding + GloVe embeddings + cross-attention fusion.",
        "Answer generation model used fine-tuned ResNet18 + GloVe + multi-head cross-attention over 301 answer classes.",
        "Achieved 95.6% accuracy for answerability classification and 91.3% accuracy for answer generation.",
        "Optimized key hyperparameters using Optuna without relying on large pretrained language models."
      ],
      technologies: [
        "Python",
        "Deep Learning",
        "Convolutional Neural Networks (CNNs)",
        "ResNet18",
        "GloVe Embeddings",
        "Multi-Head Attention",
        "Multimodal Learning",
        "Hyperparameter Tuning"
      ],
      github: "https://github.com/Manidatta1/Visual-Question-Answering",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Parking Slot Detection",
      description: "This project demonstrates how computer vision can be used to automate parking slot occupancy detection from images. It applies color-based segmentation and a ResNet18 classifier using OpenCV and PyTorch to identify occupied and available slots, producing annotated outputs and Excel-based occupancy reports.",
      keyPoints: [
        "Built an end-to-end computer vision pipeline to detect parking slot occupancy from static images.",
        "Used HSV color-based segmentation to pre-crop slot regions and reduce background noise.",
        "Created a manual bounding-box annotation tool to build labeled training data for slot classification.",
        "Trained a ResNet18-based binary classifier to label slots as Occupied or Available.",
        "Produced visual overlays and automated Excel reports with timestamps, slot summary, and occupancy stats."
      ],
      technologies: [
        "Python",
        "Deep Learning",
        "OpenCV",
        "ResNet18",
        "PyTorch",
        "Data Annotation"
      ],
      github: "https://github.com/Manidatta1/Parking-Slot-Detection",
      image: "https://images.pexels.com/photos/28948284/pexels-photo-28948284.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
};
