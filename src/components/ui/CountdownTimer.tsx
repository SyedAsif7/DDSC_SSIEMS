import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 animate-fade-in mt-8">
      {timerItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <span className="text-xl md:text-3xl font-black text-white tabular-nums tracking-tighter">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
          </div>
          <span className="mt-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
