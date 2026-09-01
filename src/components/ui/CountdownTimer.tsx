import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showBadge?: boolean;
  className?: string;
}

const CountdownTimer = ({
  targetDate,
  size = 'md',
  label,
  showBadge = false,
  className = ''
}: CountdownTimerProps) => {
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  const sizeStyles = {
    sm: {
      box: 'w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 rounded-lg min-[380px]:rounded-xl text-sm min-[380px]:text-base font-black',
      gap: 'gap-1.5 min-[380px]:gap-2',
      label: 'text-[7.5px] min-[380px]:text-[8.5px] font-bold uppercase tracking-wider text-slate-400 mt-0.5'
    },
    md: {
      box: 'w-12 h-12 min-[380px]:w-14 min-[380px]:h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl text-base sm:text-2xl font-black',
      gap: 'gap-2 sm:gap-3',
      label: 'text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1'
    },
    lg: {
      box: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl text-2xl sm:text-4xl font-black',
      gap: 'gap-3 sm:gap-4 md:gap-6',
      label: 'text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-2'
    }
  }[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <div className="flex items-center gap-1.5 mb-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
          {showBadge && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
          )}
          <Clock className="w-3.5 h-3.5 text-pink-400" />
          <span>{label}</span>
        </div>
      )}

      <div className={`flex items-center justify-center ${sizeStyles.gap}`}>
        {timerItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 to-indigo-500/30 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              <div className={`relative ${sizeStyles.box} flex items-center justify-center bg-slate-950/90 backdrop-blur-md border border-white/15 text-white shadow-xl tabular-nums`}>
                <span className="bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className={sizeStyles.label}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
