# 🏥 MediQueue – A Cloud-Native Healthcare Appointment System

A microservices-based healthcare platform enabling patients to book appointments and doctors to manage their availability.  
All services are containerized, orchestrated on **Google Kubernetes Engine (GKE)**, and deployed automatically using **Helm + GitHub Actions CI/CD**.

---

## 👥 Team Members
- **Manidatta Anumandla**
- **Pramod Kumar Ajmera**

---

## 🎯 Project Goals
- Build a modular **microservices architecture**
- Deploy the entire platform on **GKE**
- Implement **JWT-based authentication**
- Enable async booking notifications via **RabbitMQ**
- Use **Redis** for caching and distributed locking
- Automate daily workflows using **Airflow DAG**
- Set up full CI/CD using **GitHub Actions + Helm**
- Deliver a complete end-to-end appointment booking workflow

---

## 🧩 Microservices Architecture

### **1. Frontend (React + Vite + Tailwind)**
- Patient & doctor UI  
- Appointment booking screens  
- Uses Axios to communicate with backend  
- Protected routes using JWT stored securely

### **2. Backend API (FastAPI)**
- Handles appointments, doctors, and patient logic  
- Publishes asynchronous events to RabbitMQ  
- Interacts with PostgreSQL & Redis  

### **3. Auth Service (FastAPI)**
- Separate microservice dedicated to authentication  
- Registration & login  
- Issues, refreshes, and validates JWT tokens  

### **4. Worker Service (Python)**
- RabbitMQ consumer  
- Processes notifications and background tasks  
- Decoupled from main API for scalability  

### **5. Airflow**
- Runs scheduled operational tasks  
- DAG: **daily doctor slot reset (2 PM UTC)**  
- Extensible for analytics or cleanup workflows  

---

## 🗄️ Infrastructure Components

- **PostgreSQL (Bitnami)** – persistent relational database  
- **Redis (Bitnami)** – caching, distributed locks, session storage  
- **RabbitMQ (Bitnami)** – message broker for event-driven actions  
- **Airflow** – workflow automation  
- **Google Kubernetes Engine (GKE)** – primary compute platform  
- **Artifact Registry** – stores Docker images for deployments  
- **Ingress + LoadBalancer** – exposes frontend securely  
- **PVCs (Persistent Volumes)** – for PostgreSQL, Redis, RabbitMQ state  

---

## 🧱 System Architecture Diagram (Mermaid)

```mermaid
flowchart LR
    A[Frontend - React] -->|JWT Auth| B[Auth Service - FastAPI]
    A -->|API Calls| C[Backend API - FastAPI]
    C -->|Read/Write| D[(PostgreSQL)]
    C -->|Cache / Lock| E[(Redis)]
    C -->|Publish Event| F[(RabbitMQ)]
    F --> G[Worker Service - Notifications]
    H[Airflow DAG] -->|Daily Slot Reset| C



### 💻 **Running Locally**

To start all services on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone <your-github-repo-url>
    cd medi-queue
    ```

2.  **Start all services** using Docker Compose:

    ```bash
    docker-compose up --build
    ```

#### **Local Access URLs**

* **Frontend** $\rightarrow$ `http://localhost:5173`
* **Backend API** $\rightarrow$ `http://localhost:8000/docs`
* **Auth API** $\rightarrow$ `http://localhost:8001/docs`
* **RabbitMQ UI** $\rightarrow$ `http://localhost:15672`
* **Airflow** $\rightarrow$ `http://localhost:8080`

---

### 🏗️ **Deploying to Kubernetes (GKE)**

The system is deployed to a Google Kubernetes Engine (GKE) cluster using **Helm** for packaging and deployment.

1.  **Create a GKE cluster:**

    ```bash
    gcloud container clusters create healthcare-cluster \
      --zone us-central1-a --num-nodes 3
    ```

2.  **Connect kubectl:**

    ```bash
    gcloud container clusters get-credentials healthcare-cluster \
      --zone us-central1-a
    ```

3.  **Deploy using Helm:**
      Update the required details and run github workflow

4.  **Get frontend public IP:**

    ```bash
    kubectl get svc -n healthcare
    ```

5.  **Open:**

    $$\text{👉 http://EXTERNAL-IP:5173}$$

---

### 🔄 **CI/CD Pipeline (GitHub Actions)**

The deployment process is fully automated via a **GitHub Actions** CI/CD pipeline.

**Pipeline steps:**

* Build **Docker images**
* Tag & push to **Artifact Registry**
* Run **API tests**
* Deploy to **GKE** using **Helm**
* Roll out updates with **zero downtime**

This ensures fully automated deployments.

---

### 🧪 **Testing & Debugging**

| Component | Verification Methods | Debugging Tools |
| :--- | :--- | :--- |
| **Backend & Auth** | FastAPI Swagger UI, Tested JWT authentication and role-based flows | `kubectl logs <pod>` |
| **RabbitMQ** | Verified event publishing / consumption, Used worker logs and RabbitMQ dashboard | `kubectl describe pod <pod>` |
| **Database** | Checked tables, constraints, appointment entries, Tested CRUD operations | `kubectl get events` |
| **Kubernetes** | Verified deployment status and service exposure | `kubectl port-forward` |
| **Airflow** | Verified DAG run history, Ensured task success & scheduling triggers | Access Airflow UI at `http://localhost:8080` (or GKE service IP) |

---

### 📂 Repository Structure

* `medi-queue/`
    * `├── frontend/` $\rightarrow$ **React UI** (The patient/doctor interface)
    * `├── backend/` $\rightarrow$ **Main FastAPI service** (Core business logic, appointment management)
    * `├── auth/` $\rightarrow$ **Authentication microservice** (Handles JWT generation, user registration, and login)
    * `├── worker/` $\rightarrow$ **RabbitMQ consumer** (Asynchronously processes messages/events from the message queue)
    * `├── airflow/` $\rightarrow$ **DAGs & scheduler** (Workflow management for scheduled tasks, like daily slot reset)
    * `├── helm-chart/` $\rightarrow$ **Helm deployment config** (Kubernetes deployment templates)
    * `└── docker-compose.yml` $\rightarrow$ (Configuration for **local setup** using Docker Compose)

````markdown
## ⚕️ MediQueue: Cloud-Native Healthcare Appointment System

This document outlines the setup, deployment, architecture, and features of the **MediQueue** project.

---

### 💻 Running Locally

To start all services on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone <your-github-repo-url>
    cd medi-queue
    ```

2.  **Start all services** using Docker Compose:

    ```bash
    docker-compose up --build
    ```

#### Local Access URLs

* **Frontend** $\rightarrow$ `http://localhost:5173`
* **Backend API** $\rightarrow$ `http://localhost:8000/docs`
* **Auth API** $\rightarrow$ `http://localhost:8001/docs`
* **RabbitMQ UI** $\rightarrow$ `http://localhost:15672`
* **Airflow** $\rightarrow$ `http://localhost:8080`

---

### 🏗️ Deploying to Kubernetes (GKE)

The system is deployed to a Google Kubernetes Engine (GKE) cluster using **Helm** for packaging and deployment.

1.  **Create a GKE cluster:**

    ```bash
    gcloud container clusters create healthcare-cluster \
      --zone us-central1-a --num-nodes 3
    ```

2.  **Connect kubectl:**

    ```bash
    gcloud container clusters get-credentials healthcare-cluster \
      --zone us-central1-a
    ```

3.  **Deploy using Helm:**

    ```bash
    helm install healthcare ./helm-chart
    ```

4.  **Get frontend public IP:**

    ```bash
    kubectl get svc -n healthcare
    ```

5.  **Open:**

    $$\text{👉 http://EXTERNAL-IP:5173}$$

---

### 🔄 CI/CD Pipeline (GitHub Actions)

The deployment process is fully automated via a **GitHub Actions** CI/CD pipeline.

**Pipeline steps:**

* Build **Docker images**
* Tag & push to **Artifact Registry**
* Run **API tests**
* Deploy to **GKE** using **Helm**
* Roll out updates with **zero downtime**

This ensures fully automated deployments.

---

### 🧪 Testing & Debugging

| Component | Verification Methods | Debugging Tools |
| :--- | :--- | :--- |
| **Backend & Auth** | FastAPI Swagger UI, Tested JWT authentication and role-based flows | `kubectl logs <pod>` |
| **RabbitMQ** | Verified event publishing / consumption, Used worker logs and RabbitMQ dashboard | `kubectl describe pod <pod>` |
| **Database** | Checked tables, constraints, appointment entries, Tested CRUD operations | `kubectl get events` |
| **Kubernetes** | Verified deployment status and service exposure | `kubectl port-forward` |
| **Airflow** | Verified DAG run history, Ensured task success & scheduling triggers | Access Airflow UI at `http://localhost:8080` (or GKE service IP) |

---

### 📂 Repository Structure

````

medi-queue/
│
├── frontend/        \# React UI
├── backend/         \# Main FastAPI service
├── auth/            \# Authentication microservice
├── worker/          \# RabbitMQ consumer
├── airflow/         \# DAGs & scheduler
├── helm-chart/      \# Helm deployment config
└── docker-compose.yml

```

---

### ⚙️ **Features**

* **JWT-secured authentication**
* Doctor slot creation & management
* Patient appointment booking
* **Asynchronous event processing** (via RabbitMQ)
* **Caching & distributed locking** via **Redis**
* Automated daily slot reset via **Airflow**
* Fully **containerized & orchestrated** on **Kubernetes**
* Scalable & extensible **microservices architecture**

---

### ⚠️ ** Known Limitations**

* Single **PostgreSQL** instance (no HA)
* **RabbitMQ** may bottleneck under high throughput
* **Airflow** using `SequentialExecutor` limits parallelism
* Requires stable internet for GKE deployments

---

### 🏁 **Conclusion**

**MediQueue** demonstrates a full production-style, **cloud-native appointment system** leveraging microservices, Kubernetes, CI/CD automation, message queues, caching layers, and workflow schedulers. It reflects real-world distributed system architecture and best practices.

---

### 📞 **Contact**

For questions or support:

**Manidatta Anumandla**
Email: `<add your email>`
```
