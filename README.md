# Saathi - A mental health detection applicaiton

A brief description of what your project does and why it is useful.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Features

- Sentiment classification
- Stress level calculation

## Demo

Include a link to a live demo or screenshots of your project.

![Demo Screenshot](link-to-screenshot)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

```bash
git clone https://github.com/ashutoshverma23/Saathi.git
cd Saathi
```

2. **Install server dependencies**
```bash
cd backend
npm install
```
3. **Install client dependencies**

```bash
cd frontend
npm install
```
4. **Install ML dependencies and run ML server**
```bash
cd mlModel
python -r requirements.txt
python rest.py
```
4. **Setup Environment variables**
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
5. **Run the server**
```bash
npm start
```
6. **Run the client**
```bash
npm run dev
```
## Usage
How to use this project:

1. **Register and Login**
2. **Using chat to get to solve mental health queries and communicate your feelings to it**
3. **Cheking reports on mental stress**

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
Ashutosh Verma - ashutoshrgnict@gmail.com
Project Link - https://github.com/ashutoshverma23/Saathi
