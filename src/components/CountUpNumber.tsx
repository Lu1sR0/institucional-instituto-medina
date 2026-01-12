
import { useCountUp } from "@/hooks/useCountUp";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const CountUpNumber = ({ 
  end, 
  suffix = "", 
  prefix = "", 
  decimals = 0, 
  duration = 2000,
  className = "" 
}: CountUpNumberProps) => {
  const { count, ref } = useCountUp({ end, suffix, prefix, decimals, duration });

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
};

export default CountUpNumber;
