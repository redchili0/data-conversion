
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
  const schema:Record<string, any> = {};
  Object.keys(data).forEach((key: string) => {
    schema[key] = {
      title: data[key],
      type: "string",
      required: false
    }
  })
  return schema;
}

export function transToDescripionts(val: string) {
  const data = JSON.parse(val);
  const descriptions: {
    key: number;
    label: string;
    text: string;
  }[] = [];
  Object.keys(data).forEach((key: string, index: number) => {
    descriptions.push({
      key: index,
      label: data[key],
      text: key
    });
  });
  return descriptions;
}
