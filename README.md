# Gray Code Converter Pro 🔄



![Gray Code Converter](https://img.shields.io/badge/React-18.2.0-blue)

![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)

![License](https://img.shields.io/badge/license-MIT-green)



Professional-grade Gray Code ↔ Binary conversion tool with step-by-step visualization for engineers and students.



[🚀 Live Demo](https://gray-code-to-binary-converter.vercel.app/) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/Dupahar/gray-code-converter/issues)



---



## 🎯 Value Proposition



Gray Code Converter Pro solves critical problems in digital systems:



- 🛡️ Error Detection: Minimize transmission errors in industrial sensors and communication protocols

- ⚡ Hardware Optimization: Reduce glitches in rotary encoders, ADCs, and digital circuits

- 📚 Educational Tool: Learn binary-Gray code conversion with detailed XOR operation breakdowns

- 💼 Professional Grade: Export-ready results for documentation and verification



---



## ✨ Features



### Core Functionality

- ✅ Bidirectional Conversion: Gray Code → Binary & Binary → Gray Code

- ✅ Real-time Validation: Instant input verification and error handling

- ✅ Step-by-Step Visualization: See every XOR operation in the conversion process

- ✅ Export Capabilities: Download conversion results with complete steps

- ✅ Copy to Clipboard: Quick one-click result copying



### User Experience

- 🎨 Modern UI: Clean, professional interface with light theme

- 📱 Responsive Design: Works seamlessly on desktop, tablet, and mobile

- ⚡ Instant Results: No page refreshes or delays

- 🔍 Educational Focus: Perfect for learning and teaching



---



## 🚀 Quick Start



### Prerequisites

- Node.js 16+ installed

- npm or yarn package manager



### Installation

```bash

# Clone the repository

git clone https://github.com/yourusername/gray-code-converter.git



# Navigate to project directory

cd gray-code-converter



# Install dependencies

npm install



# Start development server

npm run dev

```



Visit `http://localhost:5173` to see the app running.



### Build for Production

```bash

npm run build

npm run preview

```



---



## 🎓 Use Cases



### Industrial & Embedded Systems

- Rotary Encoders: Position tracking in motors and robotics

- Sensor Networks: Error-resistant data transmission

- ADC/DAC Interfaces: Glitch-free analog-digital conversion

- FPGA Development: Hardware design verification



### Education & Research

- Computer Architecture: Understanding number system conversions

- Digital Logic Design: Circuit design and optimization

- Embedded Systems Courses: Practical encoding applications

- Research Projects: Quick verification tool for experiments



---



## 💻 Technology Stack



- Frontend: React 18.2.0

- Build Tool: Vite 5.0.0

- Styling: Tailwind CSS (CDN)

- Icons: Lucide React

- Deployment: Vercel / Netlify



---



## 📖 How It Works



### Gray to Binary Conversion Algorithm

```

1. MSB (Most Significant Bit) remains the same

2. For each subsequent bit:

&nbsp;  Binary[i] = Binary[i-1] XOR Gray[i]

```



### Binary to Gray Conversion Algorithm

```

1. MSB remains the same

2. For each subsequent bit:

&nbsp;  Gray[i] = Binary[i-1] XOR Binary[i]

```



Example:

```

Gray Code:  1011

&nbsp;          ↓ Step-by-step conversion

Binary:     1101



Step 1: B[0] = G[0] = 1

Step 2: B[1] = B[0] XOR G[1] = 1 XOR 0 = 1

Step 3: B[2] = B[1] XOR G[2] = 1 XOR 1 = 0

Step 4: B[3] = B[2] XOR G[3] = 0 XOR 1 = 1

```



---



## 📂 Project Structure

```

gray-code-converter/

├── public/

├── src/

│   ├── App.jsx              # Main React component

│   └── main.jsx             # Application entry point

├── index.html               # HTML template

├── vite.config.js           # Vite configuration

├── package.json             # Dependencies and scripts

└── README.md                # This file

```



---



## 🤝 Contributing



Contributions are welcome! Here's how you can help:



1. Fork the repository

2. Create a feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request



### Contribution Ideas

- [ ] Add batch conversion for multiple values

- [ ] Implement API endpoint for programmatic access

- [ ] Add comparison table between Binary, Gray, and other codes

- [ ] Create browser extension version

- [ ] Add dark mode toggle



---



## 📝 License



This project is licensed under the MIT License.

---



## 👨‍💻 Author



Adil Mahajan (DYD-23-01)  

Computer Systems: Architecture & Circuits  

Minor Project - Understanding Computer Systems



## 🙏 Acknowledgments



- Built as part of the "Understanding Computer Systems: Architecture & Circuits" course

- Inspired by real-world applications in embedded systems and digital design

- Special thanks to educators and the open-source community



---



## 📊 Project Status



![Status](https://img.shields.io/badge/status-active-success)

![Maintenance](https://img.shields.io/badge/maintenance-yes-green)



Current Version: 1.0.0  

Last Updated: November 2025



---



## 🔗 Related Resources



- [Gray Code - Wikipedia](https://en.wikipedia.org/wiki/Gray_code)

- [Digital Logic Design Fundamentals](https://www.allaboutcircuits.com/textbook/digital/)

- [Rotary Encoder Tutorial](https://howtomechatronics.com/tutorials/arduino/rotary-encoder-works-use-arduino/)



---



## 📈 Future Enhancements



- [ ] Multi-language support (Hindi, Spanish, etc.)

- [ ] Binary Coded Decimal (BCD) conversion

- [ ] Excess-3 code conversion

- [ ] API documentation and REST endpoints

- [ ] Performance metrics and benchmarking

- [ ] Integration with popular IDEs



---



## 💡 Why Gray Code?



Gray code is crucial in digital systems because:



1. Single Bit Changes: Only one bit changes between consecutive values

2. Error Reduction: Minimizes errors in mechanical/optical encoders

3. Glitch Prevention: Eliminates hazards in asynchronous circuits

4. Karnaugh Maps: Simplifies Boolean logic minimization

5. Genetic Algorithms: Used in optimization problems



---



<div align="center">



⭐ Star this repository if you find it helpful!



Made with ❤️ by Adil Mahajan



</div>

```



---



Copyright (c) 2025 Adil Mahajan



Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:



The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.



THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.


