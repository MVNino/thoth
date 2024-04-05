/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const stream = {
  write: (message) => {
    console.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { stream };
