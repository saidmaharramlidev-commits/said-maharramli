import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    target: number;
    speed?: number;       // optional, time in ms between increments
    suffix?: string;      // optional, e.g., "+", "%", "K"
}

const CountUp: React.FC<CountUpProps> = ({ target, speed = 10, suffix = "" }) => {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let interval: number;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    interval = window.setInterval(() => {
                        setCount((prev) => {
                            if (prev < target) return prev + 1;
                            clearInterval(interval);
                            return target;
                        });
                    }, speed);

                    if (ref.current) observer.unobserve(ref.current); // stop observing after first trigger
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            clearInterval(interval);
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [target, speed]);

    return (
        <div ref={ref} style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {count}
            {suffix}
        </div>
    );
};

export default CountUp;
