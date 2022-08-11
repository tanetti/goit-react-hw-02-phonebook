export const sorting = (sortField, isOrderASC) => {
  if (sortField === 'name') {
    if (isOrderASC) {
      return (a, b) => {
        const aLower = a.name.toLowerCase();
        const bLower = b.name.toLowerCase();

        if (aLower > bLower) return 1;
        if (aLower < bLower) return -1;

        return 0;
      };
    } else {
      return (a, b) => {
        const aLower = a.name.toLowerCase();
        const bLower = b.name.toLowerCase();

        if (aLower < bLower) return 1;
        if (aLower > bLower) return -1;

        return 0;
      };
    }
  }

  if (sortField === 'number') {
    if (isOrderASC) {
      return (a, b) => {
        const aLower = a.number;
        const bLower = b.number;

        if (aLower > bLower) return 1;
        if (aLower < bLower) return -1;

        return 0;
      };
    } else {
      return (a, b) => {
        const aLower = a.number;
        const bLower = b.number;

        if (aLower < bLower) return 1;
        if (aLower > bLower) return -1;

        return 0;
      };
    }
  }
};
