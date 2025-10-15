import React, { useState } from 'react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [color, setColor] = useState('');

  const checkStrength = (value) => {
    setPassword(value);

    let strengthValue = 0;
    if (value.length >= 8) strengthValue++;
    if (/[A-Z]/.test(value)) strengthValue++;
    if (/[a-z]/.test(value)) strengthValue++;
    if (/[0-9]/.test(value)) strengthValue++;
    if (/[^A-Za-z0-9]/.test(value)) strengthValue++;

    if (strengthValue <= 1) {
        setStrength('Very Weak');
        setColor('#ef4444'); // red-500
        } else if (strengthValue === 2) {
        setStrength('Weak');
        setColor('#f97316'); // orange-500
        } else if (strengthValue === 3) {
        setStrength('Medium');
        setColor('#facc15'); // yellow-500
        } else if (strengthValue === 4) {
        setStrength('Strong');
        setColor('#4ade80'); // green-400
        } else {
        setStrength('Very Strong');
        setColor('#16a34a'); // green-600
        }

  };

  const getBarWidth = () => {
    switch (strength) {
      case 'Very Weak': return 'w-1/5';
      case 'Weak': return 'w-2/5';
      case 'Medium': return 'w-3/5';
      case 'Strong': return 'w-4/5';
      case 'Very Strong': return 'w-full';
      default: return 'w-0';
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center">Password Strength Checker</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => checkStrength(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Enter password"
        />
      </div>

      {password && (
        <>
          <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
            <div
            className={`${getBarWidth()} h-2 rounded-full transition-all duration-300`}
                style={{ backgroundColor: color }}
                ></div>

          </div>
          <p className={`text-sm font-medium text-center ${
            strength.includes('Weak') ? 'text-red-500' :
            strength === 'Medium' ? 'text-yellow-500' : 'text-green-600'
          }`}>
            Strength: {strength}
          </p>
        </>
      )}
    </div>
  );
}