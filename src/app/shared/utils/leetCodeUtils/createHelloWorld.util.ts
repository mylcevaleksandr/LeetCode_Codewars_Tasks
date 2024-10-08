
export const createHelloWorld = function () {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return function(args: string): { color: string, btnInstructions: string, result: string } {
    const color = generateRandomColor();
    const btnInstructions = 'Run Again';
    const result = 'Hello World';

    return { color, btnInstructions, result };
  }
}
