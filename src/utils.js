export const calculateTotal = (rec, key) => {
  return rec.reduce((acc, curr) => {
    acc = acc + parseInt(curr[key]);
    return acc;
  }, 0);
};

export const groupBy = (rec, key) => {
  return rec.reduce((acc, curr) => {
    const groupKey = curr[key];
    if (!acc?.[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(curr);
    return acc;
  }, {});
};

export const eachTownTotalDatas = (data, totalKey, isAvg = false) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    let total = calculateTotal(value, totalKey);
    let avg = total / value.length;
    let avgData = isAvg ? { avg } : {};
    return [...acc, { townName: key, [totalKey]: total, ...avgData }];
  }, []);
};
