export const findTypeColor = (type) => {
  switch (type) {
    case "grass":
      return "green-500";
    case "fire":
      return "red-500";
    case "water":
      return "blue-500";
    case "bug":
      return "purple-400";
    case "poison":
      return "purple-600";
    case "flying":
      return "gray-300";
    default:
      return "gray-500";
  }
};
