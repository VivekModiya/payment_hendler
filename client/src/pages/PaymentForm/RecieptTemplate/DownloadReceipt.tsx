import React from 'react';
import { toJpeg } from 'html-to-image';

export const DownloadReceipt = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef.current) {
        toJpeg(elementRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-image-name.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
