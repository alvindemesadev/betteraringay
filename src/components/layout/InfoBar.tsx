import { useState, useEffect, useCallback } from 'react';
import { Banknote, Thermometer, Calendar, Clock } from 'lucide-react';

export default function InfoBar() {
  const [rate, setRate] = useState('1 USD = ₱ --');
  const [temp, setTemp] = useState('--°C');
  const [dateStr, setDateStr] = useState('--- --, ----');
  const [timeStr, setTimeStr] = useState('--:-- --');

  const updateClock = useCallback(() => {
    const now = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    );
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    setDateStr(
      `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
    );
    let h = now.getHours();
    const m = now.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    setTimeStr(`${h}:${m < 10 ? '0' + m : m} ${ampm}`);
  }, []);

  useEffect(() => {
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, [updateClock]);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(r => r.json())
      .then(data => {
        if (data?.rates?.PHP) setRate(`1 USD = ₱ ${data.rates.PHP.toFixed(2)}`);
      })
      .catch(() => {});

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=16.3957&longitude=120.3553&current_weather=true'
    )
      .then(r => r.json())
      .then(data => {
        if (data?.current_weather?.temperature != null) {
          setTemp(`${Math.round(data.current_weather.temperature)}°C`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="info-bar"
      role="complementary"
      aria-label="Real-time information"
    >
      <div className="container mx-auto px-4">
        <div className="info-bar-inner" aria-live="polite" aria-atomic="false">
          <div className="info-bar-item" aria-label="Exchange rates">
            <Banknote className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
            <span>{rate}</span>
          </div>
          <div className="info-bar-item info-bar-weather" aria-label="Aringay weather">
            <Thermometer className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
            <span>Aringay</span>
            <span className="font-semibold">{temp}</span>
          </div>
          <div className="info-bar-item info-bar-datetime" aria-label="Philippine Date and Time">
            <Calendar className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
            <span>{dateStr}</span>
            <span className="hidden sm:inline mx-1 opacity-50">•</span>
            <Clock className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
            <span>{timeStr}</span>
            <span className="opacity-75 ml-1">PHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
