import React, { useState, useEffect } from 'react';
import { Copy, Download, Info, Zap, Shield, Cpu, CheckCircle2 } from 'lucide-react';

export default function GrayCodeConverter() {
  const [mode, setMode] = useState('gray-to-binary');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const validateInput = (value) => {
    if (!value) return true;
    return /^[01]+$/.test(value);
  };

  const grayToBinary = (gray) => {
    if (!gray) return { result: '', steps: [] };
    
    const stepsArray = [];
    let binary = gray[0];
    stepsArray.push({
      step: 1,
      description: `MSB remains same: ${gray[0]}`,
      intermediate: binary
    });

    for (let i = 1; i < gray.length; i++) {
      const xorResult = parseInt(binary[i - 1]) ^ parseInt(gray[i]);
      binary += xorResult;
      stepsArray.push({
        step: i + 1,
        description: `B[${i}] = B[${i-1}] XOR G[${i}] = ${binary[i-1]} XOR ${gray[i]} = ${xorResult}`,
        intermediate: binary
      });
    }

    return { result: binary, steps: stepsArray };
  };

  const binaryToGray = (binary) => {
    if (!binary) return { result: '', steps: [] };
    
    const stepsArray = [];
    let gray = binary[0];
    stepsArray.push({
      step: 1,
      description: `MSB remains same: ${binary[0]}`,
      intermediate: gray
    });

    for (let i = 1; i < binary.length; i++) {
      const xorResult = parseInt(binary[i - 1]) ^ parseInt(binary[i]);
      gray += xorResult;
      stepsArray.push({
        step: i + 1,
        description: `G[${i}] = B[${i-1}] XOR B[${i}] = ${binary[i-1]} XOR ${binary[i]} = ${xorResult}`,
        intermediate: gray
      });
    }

    return { result: gray, steps: stepsArray };
  };

  useEffect(() => {
    if (!input) {
      setOutput('');
      setSteps([]);
      setError('');
      return;
    }

    if (!validateInput(input)) {
      setError('Please enter only binary digits (0 or 1)');
      setOutput('');
      setSteps([]);
      return;
    }

    setError('');
    const conversion = mode === 'gray-to-binary' 
      ? grayToBinary(input) 
      : binaryToGray(input);
    
    setOutput(conversion.result);
    setSteps(conversion.steps);
  }, [input, mode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = `Input (${mode === 'gray-to-binary' ? 'Gray' : 'Binary'}): ${input}\n` +
                   `Output (${mode === 'gray-to-binary' ? 'Binary' : 'Gray'}): ${output}\n\n` +
                   `Conversion Steps:\n${steps.map(s => `${s.step}. ${s.description}\n   Result: ${s.intermediate}`).join('\n')}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversion_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 text-gray-900 p-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Professional Grade Tool</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gray Code Converter Pro
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Enterprise-ready binary-Gray code conversion with step-by-step visualization for engineers and students
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <Shield className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold mb-1 text-gray-900">Error Detection Ready</h3>
            <p className="text-sm text-gray-600">Minimize transmission errors in critical systems</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <Cpu className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-1 text-gray-900">Hardware Optimization</h3>
            <p className="text-sm text-gray-600">Reduce glitches in digital circuits and encoders</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <Info className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold mb-1 text-gray-900">Educational Tool</h3>
            <p className="text-sm text-gray-600">Learn with detailed step-by-step breakdowns</p>
          </div>
        </div>

        {/* Main Converter */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Mode Selector */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode('gray-to-binary')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                mode === 'gray-to-binary'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Gray → Binary
            </button>
            <button
              onClick={() => setMode('binary-to-gray')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                mode === 'binary-to-gray'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Binary → Gray
            </button>
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Input {mode === 'gray-to-binary' ? 'Gray Code' : 'Binary Code'}
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter binary digits (e.g., 1011)"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          {/* Output Section */}
          {output && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Output {mode === 'gray-to-binary' ? 'Binary Code' : 'Gray Code'}
              </label>
              <div className="flex gap-2">
                <div className="flex-1 bg-green-50 border border-green-300 rounded-lg px-4 py-3 text-lg font-mono text-green-700">
                  {output}
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-700" />}
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors"
                  title="Download results"
                >
                  <Download className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          )}

          {/* Steps Visualization */}
          {steps.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
                <Info className="w-5 h-5 text-blue-600" />
                Conversion Steps
              </h3>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.step} className="bg-white rounded p-3 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm mb-1">{step.description}</p>
                        <p className="font-mono text-green-700">Result: {step.intermediate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Use Cases Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Industrial & Embedded Systems</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Rotary encoder position tracking</li>
                <li>Sensor data error detection</li>
                <li>ADC/DAC communication protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Digital Design & Education</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>FPGA/ASIC development verification</li>
                <li>Computer architecture coursework</li>
                <li>Digital logic circuit design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Developed by Adil Mahajan (DYD-23-01)</p>
          <p className="mt-1">Understanding Computer Systems: Architecture & Circuits</p>
        </div>
      </div>
    </div>
  );
}