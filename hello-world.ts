const greet = (name: string, timeOfDay?: string): string => {
    if (timeOfDay) {
        return `Good ${timeOfDay}, ${name}!`;
    }
    return `Hello there, ${name}!`;
};

console.log(greet("World", "morning"));