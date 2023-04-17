export const readFileAsBuffer = (file: File | Blob): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const buffer = Buffer.from(reader.result as string);
      resolve(buffer);
    };
    reader.onerror = (err: unknown) => {
      reject(err);
    };
    reader.readAsArrayBuffer(file);
  });
};

export const readFileAsText = (file: File | Blob): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsText(file);
  });
};

export const blobToFile = (fileName: string, fileBlob: Blob): File => {
  return new File([fileBlob], fileName, {
    type: fileBlob.type,
  });
};

export const blobToBase64 = (blob: Blob): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const fileToBase64 = (file: File | Blob): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
