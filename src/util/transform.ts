export function transToColumn(val: string) {
  const columns: {
    title: string;
    dataIndex: string;
    key: string;
  }[] = [];
  const data = JSON.parse(val);
  Object.keys(data).forEach((key: string) => {
    columns.push({
      title: data[key],
      dataIndex: key,
      key
    });
  });
  return columns;
}

export function transToSchema(val: string) {
    const data = JSON.parse(val);
    return data;
}

export function transToDescripionts(val: string) {
    const data = JSON.parse(val);
    return data;
}
