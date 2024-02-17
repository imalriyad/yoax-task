const useOrderId = () => {
  function generateRandomCode(initialValue) {
    const prefix = "#";
    const baseNumber = parseInt(initialValue.substring(1), 10);
    const randomSuffix = Math.floor(Math.random() * 1000);
    const newNumber = baseNumber + randomSuffix;
    return `${prefix}${newNumber.toString().padStart(2, "0")}`;
  }

  // Example usage with an initial value
  const initialValue = "#21323";
  const orderID = generateRandomCode(initialValue);
  return orderID;
};

export default useOrderId;
