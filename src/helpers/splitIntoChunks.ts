const splitIntoChunks = <T>(array: T[], size: number): T[][] =>
  array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      resultArray[chunkIndex] = [];
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

export default splitIntoChunks;
