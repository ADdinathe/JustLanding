export const loadImage = (list: string[], callback?: () => void) => {
  return Promise.all(
    list.map((url) => {
      new Promise((resolve) => {
        const img = new Image();

        img.src = url;
        img.onload = () => resolve(img);
      });

      if (callback) {
        callback();
      }
    })
  );
};
